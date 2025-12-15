"use client";

import { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh, Color, Vec2, RenderTarget, Triangle } from "ogl";

export function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let renderer: Renderer, gl: any, camera: Camera;
    let width: number, height: number, wWidth: number, wHeight: number;
    let mouse: Vec2, mouseOver = false;
    let gridWidth: number, gridHeight: number, gridRatio: number;
    let ripple: any, points: Mesh;

    const color1 = new Color([0.149, 0.141, 0.912]); // Blue
    const color2 = new Color([0.8, 0.8, 0.9]); // Light blue/gray
    let cameraZ = 50;

    function init() {
      renderer = new Renderer({ dpr: 1, canvas });
      gl = renderer.gl;

      camera = new Camera(gl, { fov: 45 });
      camera.position.set(0, 0, cameraZ);

      resize();
      window.addEventListener("resize", resize, false);

      mouse = new Vec2();

      initScene();
      initEventsListener();
      requestAnimationFrame(animate);
    }

    function initScene() {
      gl.clearColor(0.9, 0.9, 0.95, 1);
      ripple = new RippleEffect(renderer);
      initPointsMesh();
    }

    function initPointsMesh() {
      gridWidth = width;
      gridHeight = height;

      const ssize = 3;
      const wsize = ssize * wWidth / width;
      const nx = Math.floor(gridWidth / ssize) + 1;
      const ny = Math.floor(gridHeight / ssize) + 1;
      const numPoints = nx * ny;
      const ox = -wsize * (nx / 2 - 0.5), oy = -wsize * (ny / 2 - 0.5);
      const positions = new Float32Array(numPoints * 3);
      const uvs = new Float32Array(numPoints * 2);
      const sizes = new Float32Array(numPoints);

      let uvx: number, uvy: number, uvdx: number, uvdy: number;
      gridRatio = gridWidth / gridHeight;

      if (gridRatio >= 1) {
        uvx = 0; uvdx = 1 / nx;
        uvy = (1 - 1 / gridRatio) / 2; uvdy = (1 / ny) / gridRatio;
      } else {
        uvx = (1 - 1 * gridRatio) / 2; uvdx = (1 / nx) * gridRatio;
        uvy = 0; uvdy = 1 / ny;
      }

      for (let i = 0; i < nx; i++) {
        const x = ox + i * wsize;
        for (let j = 0; j < ny; j++) {
          const i1 = i * ny + j, i2 = i1 * 2, i3 = i1 * 3;
          const y = oy + j * wsize;
          positions.set([x, y, 0], i3);
          uvs.set([uvx + i * uvdx, uvy + j * uvdy], i2);
          sizes[i1] = ssize / 2;
        }
      }

      const geometry = new Geometry(gl, {
        position: { size: 3, data: positions },
        uv: { size: 2, data: uvs },
        size: { size: 1, data: sizes }
      });

      if (points) {
        points.geometry = geometry;
      } else {
        const program = new Program(gl, {
          uniforms: {
            hmap: { value: ripple.gpgpu.read.texture },
            color1: { value: color1 },
            color2: { value: color2 }
          },
          vertex: `
            precision highp float;
            const float PI = 3.1415926535897932384626433832795;
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            uniform sampler2D hmap;
            uniform vec3 color1;
            uniform vec3 color2;
            attribute vec2 uv;
            attribute vec3 position;
            attribute float size;
            varying vec4 vColor;
            void main() {
                vec3 pos = position.xyz;
                vec4 htex = texture2D(hmap, uv);
                pos.z = 10. * htex.r;

                vec3 mixPct = vec3(0.0);
                mixPct.r = smoothstep(0.0, 0.5, htex.r);
                mixPct.g = sin(htex.r * PI);
                mixPct.b = pow(htex.r, 0.5);
                vColor = vec4(mix(color1, color2, mixPct), 1.0);

                gl_PointSize = size;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
          fragment: `
            precision highp float;
            varying vec4 vColor;
            void main() {
              gl_FragColor = vColor;
            }
          `
        });
        points = new Mesh(gl, { geometry, program, mode: gl.POINTS });
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      camera.position.z += (cameraZ - camera.position.z) * 0.02;

      if (!mouseOver) {
        const time = Date.now() * 0.001;
        const x = Math.cos(time) * 0.2;
        const y = Math.sin(time) * 0.2;
        ripple.addDrop(x, y, 0.05, 0.05);
      }

      ripple.update();
      renderer.render({ scene: points, camera });
    }

    function initEventsListener() {
      if ("ontouchstart" in window) {
        document.body.addEventListener("touchstart", onMove, false);
        document.body.addEventListener("touchmove", onMove, false);
        document.body.addEventListener("touchend", () => { mouseOver = false; }, false);
      } else {
        document.body.addEventListener("mousemove", onMove, false);
        document.body.addEventListener("mouseleave", () => { mouseOver = false; }, false);
      }
    }

    function onMove(e: any) {
      mouseOver = true;
      if (e.changedTouches && e.changedTouches.length) {
        e.x = e.changedTouches[0].pageX;
        e.y = e.changedTouches[0].pageY;
      }
      if (e.x === undefined) {
        e.x = e.pageX; e.y = e.pageY;
      }
      mouse.set(
        (e.x / gl.renderer.width) * 2 - 1,
        (1.0 - e.y / gl.renderer.height) * 2 - 1
      );

      if (gridRatio >= 1) {
        mouse.y = mouse.y / gridRatio;
      } else {
        mouse.x = mouse.x / gridRatio;
      }

      ripple.addDrop(mouse.x, mouse.y, 0.05, 0.05);
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
      const wSize = getWorldSize(camera);
      wWidth = wSize[0]; wHeight = wSize[1];
      if (points) initPointsMesh();
    }

    function getWorldSize(cam: Camera) {
      const vFOV = (cam.fov * Math.PI) / 180;
      const height = 2 * Math.tan(vFOV / 2) * Math.abs(cam.position.z);
      const width = height * cam.aspect;
      return [width, height];
    }

    // Ripple Effect Class
    class RippleEffect {
      renderer: Renderer;
      gl: any;
      width: number;
      height: number;
      delta: Vec2;
      gpgpu: any;
      updateProgram!: Program;
      dropProgram!: Program;

      constructor(renderer: Renderer) {
        this.renderer = renderer;
        this.gl = renderer.gl;
        this.width = 512;
        this.height = 512;
        this.delta = new Vec2(1 / this.width, 1 / this.height);
        this.gpgpu = new GPGPU(this.renderer.gl, { width: this.width, height: this.height });

        this.initShaders();
      }

      initShaders() {
        const defaultVertex = `
          attribute vec2 uv;
          attribute vec2 position;
          varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = vec4(position, 0, 1);
          }
        `;

        this.updateProgram = new Program(this.gl, {
          uniforms: {
            tDiffuse: { value: null },
            uDelta: { value: this.delta }
          },
          vertex: defaultVertex,
          fragment: `
            precision highp float;
            uniform sampler2D tDiffuse;
            uniform vec2 uDelta;
            varying vec2 vUv;
            void main() {
              vec4 texel = texture2D(tDiffuse, vUv);

              vec2 dx = vec2(uDelta.x, 0.0);
              vec2 dy = vec2(0.0, uDelta.y);
              float average = (
                texture2D(tDiffuse, vUv - dx).r +
                texture2D(tDiffuse, vUv - dy).r +
                texture2D(tDiffuse, vUv + dx).r +
                texture2D(tDiffuse, vUv + dy).r
              ) * 0.25;

              texel.g += (average - texel.r) * 2.0;
              texel.g *= 0.8;
              texel.r += texel.g;

              gl_FragColor = texel;
            }
          `
        });

        this.dropProgram = new Program(this.gl, {
          uniforms: {
            tDiffuse: { value: null },
            uCenter: { value: new Vec2() },
            uRadius: { value: 0.05 },
            uStrength: { value: 0.05 }
          },
          vertex: defaultVertex,
          fragment: `
            precision highp float;
            const float PI = 3.1415926535897932384626433832795;
            uniform sampler2D tDiffuse;
            uniform vec2 uCenter;
            uniform float uRadius;
            uniform float uStrength;
            varying vec2 vUv;
            void main() {
              vec4 texel = texture2D(tDiffuse, vUv);
              float drop = max(0.0, 1.0 - length(uCenter * 0.5 + 0.5 - vUv) / uRadius);
              drop = 0.5 - cos(drop * PI) * 0.5;
              texel.r += drop * uStrength;
              gl_FragColor = texel;
            }
          `
        });
      }

      update() {
        this.updateProgram.uniforms.tDiffuse.value = this.gpgpu.read.texture;
        this.gpgpu.renderProgram(this.updateProgram);
      }

      addDrop(x: number, y: number, radius: number, strength: number) {
        const us = this.dropProgram.uniforms;
        us.tDiffuse.value = this.gpgpu.read.texture;
        us.uCenter.value.set(x, y);
        us.uRadius.value = radius;
        us.uStrength.value = strength;
        this.gpgpu.renderProgram(this.dropProgram);
      }
    }

    // GPGPU Helper Class
    class GPGPU {
      gl: any;
      width: number;
      height: number;
      numVertexes: number;
      read: RenderTarget;
      write: RenderTarget;
      mesh: Mesh;

      constructor(gl: any, { width, height }: { width: number; height: number }) {
        this.gl = gl;
        this.width = width;
        this.height = height;
        this.numVertexes = this.width * this.height;

        const renderTargetOptions = {
          width: this.width,
          height: this.height,
          depth: false,
          unpackAlignment: 1,
        };

        this.read = new RenderTarget(gl, renderTargetOptions);
        this.write = new RenderTarget(gl, renderTargetOptions);
        this.mesh = new Mesh(gl, { geometry: new Triangle(gl) });
      }

      renderProgram(program: Program) {
        this.mesh.program = program;
        this.gl.renderer.render({ scene: this.mesh, target: this.write, clear: false });
        this.swap();
      }

      swap() {
        const temp = this.read;
        this.read = this.write;
        this.write = temp;
      }
    }

    init();

    return () => {
      window.removeEventListener("resize", resize);
      if ("ontouchstart" in window) {
        document.body.removeEventListener("touchstart", onMove);
        document.body.removeEventListener("touchmove", onMove);
      } else {
        document.body.removeEventListener("mousemove", onMove);
        document.body.removeEventListener("mouseleave", () => { mouseOver = false; });
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: "#e8e8f0" }}
    />
  );
}
