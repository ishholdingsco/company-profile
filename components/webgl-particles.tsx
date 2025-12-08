"use client";

import { useEffect, useRef } from "react";

export function WebGLParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Resize canvas to match display size
    function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    }

    // Linear interpolation
    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    // Vertex shader
    const vsSource = `
      attribute vec2 aVertexPosition;
      attribute float aLifetime;
      uniform vec2 uResolution;
      uniform vec2 uMousePosition;
      uniform float uTime;
      uniform float uAspectRatio;
      varying float vLifetime;

      void main(void) {
        float life = mod(sin(uTime) + aLifetime, 1.0);
        vec2 position = aVertexPosition;

        // Aspect-ratio aware wave effect - smoother on mobile
        float waveFrequency = mix(12.0, 8.0, smoothstep(0.5, 1.5, uAspectRatio));
        float wave = sin((position.x + uTime * 0.002) * waveFrequency) * 0.05;

        // Ripple effect based on mouse position with aspect ratio correction
        vec2 normalizedMouse = uMousePosition / uResolution;

        // Create aspect-corrected coordinates for circular ripples
        vec2 aspectCorrectedPos = position;
        vec2 aspectCorrectedMouse = normalizedMouse;

        // Normalize to square space for circular ripples
        float maxDim = max(uResolution.x, uResolution.y);
        aspectCorrectedPos *= uResolution / maxDim;
        aspectCorrectedMouse *= uResolution / maxDim;

        vec2 direction = aspectCorrectedPos - aspectCorrectedMouse;
        float distance = length(direction);
        float ripple = sin(distance * 50.0 - uTime * 5.0) * 0.01;
        position.y += cos(uTime) * 2.0 * ripple;

        // Convert to clip space - ALWAYS fill entire screen
        vec2 clipSpace = position * 2.0 - 1.0;

        gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
        gl_PointSize = 0.8;
        vLifetime = life;
      }
    `;

    // Fragment shader - adjusted colors for dark background
    const fsSource = `
      precision mediump float;
      varying float vLifetime;
      void main(void) {
        // White to light blue particles on dark background
        vec3 color = mix(vec3(0.8, 0.9, 1.0), vec3(1.0, 1.0, 1.0), vLifetime);
        gl_FragColor = vec4(color, 0.6);
      }
    `;

    function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    function initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
      const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
      const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

      if (!vertexShader || !fragmentShader) return null;

      const shaderProgram = gl.createProgram();
      if (!shaderProgram) return null;

      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);

      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error("Program link error:", gl.getProgramInfoLog(shaderProgram));
        return null;
      }

      return shaderProgram;
    }

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    if (!shaderProgram) return;

    const programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
        lifetime: gl.getAttribLocation(shaderProgram, "aLifetime"),
      },
      uniformLocations: {
        resolution: gl.getUniformLocation(shaderProgram, "uResolution"),
        mousePosition: gl.getUniformLocation(shaderProgram, "uMousePosition"),
        time: gl.getUniformLocation(shaderProgram, "uTime"),
        aspectRatio: gl.getUniformLocation(shaderProgram, "uAspectRatio"),
      },
    };

    // Initialize buffers
    const positionBuffer = gl.createBuffer();
    const lifetimeBuffer = gl.createBuffer();

    // Create particles - responsive count based on screen size
    const particles: { x: number; y: number; lifetime: number }[] = [];
    const isMobileDevice = window.innerWidth < 768;
    const isTabletDevice = window.innerWidth >= 768 && window.innerWidth < 1024;
    const numParticles = isMobileDevice ? 8000 : isTabletDevice ? 15000 : 30000;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        lifetime: Math.random(),
      });
    }

    const positions: number[] = [];
    const lifetimes: number[] = [];
    for (const particle of particles) {
      positions.push(particle.x, particle.y);
      lifetimes.push(particle.lifetime);
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, lifetimeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lifetimes), gl.STATIC_DRAW);

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let smoothMouseX = mouseX;
    let smoothMouseY = mouseY;

    // Device orientation for mobile
    let deviceTiltX = 0;
    let deviceTiltY = 0;
    let isMobile = false;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (event.clientX - rect.left) * (canvas.width / rect.width);
      mouseY = (event.clientY - rect.top) * (canvas.height / rect.height);
      isMobile = false; // Using mouse, not mobile
    };

    // Device orientation handler for mobile gyroscope
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta !== null && event.gamma !== null) {
        isMobile = true;
        // beta: front-to-back tilt (-180 to 180)
        // gamma: left-to-right tilt (-90 to 90)

        // Convert tilt to screen coordinates
        // gamma: -90 (left) to 90 (right) -> 0 to canvas.width
        // beta: -90 (forward) to 90 (backward) -> 0 to canvas.height
        deviceTiltX = ((event.gamma + 90) / 180) * canvas.width;
        deviceTiltY = ((event.beta + 90) / 180) * canvas.height;

        // Clamp values
        deviceTiltX = Math.max(0, Math.min(canvas.width, deviceTiltX));
        deviceTiltY = Math.max(0, Math.min(canvas.height, deviceTiltY));
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Request permission for device orientation on iOS 13+
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      (DeviceOrientationEvent as any).requestPermission()
        .then((permissionState: string) => {
          if (permissionState === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
          }
        })
        .catch(console.error);
    } else if (window.DeviceOrientationEvent) {
      // For Android and older iOS
      window.addEventListener('deviceorientation', handleOrientation);
    }

    function drawScene(time: number) {
      resizeCanvasToDisplaySize(canvas);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(programInfo.program);

      // Position attribute
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
      gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        2,
        gl.FLOAT,
        false,
        0,
        0
      );

      // Lifetime attribute
      gl.bindBuffer(gl.ARRAY_BUFFER, lifetimeBuffer);
      gl.enableVertexAttribArray(programInfo.attribLocations.lifetime);
      gl.vertexAttribPointer(
        programInfo.attribLocations.lifetime,
        1,
        gl.FLOAT,
        false,
        0,
        0
      );

      // Smooth mouse movement or device orientation
      const targetX = isMobile ? deviceTiltX : mouseX;
      const targetY = isMobile ? deviceTiltY : mouseY;

      // Smooth lerp
      smoothMouseX = lerp(smoothMouseX, targetX, 0.05);
      smoothMouseY = lerp(smoothMouseY, targetY, 0.05);

      // Calculate aspect ratio
      const aspectRatio = canvas.width / canvas.height;

      // Set uniforms
      gl.uniform2f(
        programInfo.uniformLocations.resolution,
        canvas.width,
        canvas.height
      );
      gl.uniform2f(
        programInfo.uniformLocations.mousePosition,
        smoothMouseX,
        smoothMouseY
      );
      gl.uniform1f(programInfo.uniformLocations.time, time * 0.001);
      gl.uniform1f(programInfo.uniformLocations.aspectRatio, aspectRatio);

      // Enable blending for transparency
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      gl.drawArrays(gl.POINTS, 0, numParticles);
    }

    function render(time: number) {
      drawScene(time);
      animationId = requestAnimationFrame(render);
    }

    // Dark background - matching the design
    gl.clearColor(0.08, 0.08, 0.12, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    let animationId = requestAnimationFrame(render);

    const handleResize = () => resizeCanvasToDisplaySize(canvas);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{ background: "#14141e" }}
    />
  );
}
