export type Solution = "CV" | "IoT" | "NLP" | "Robotics & Engineering" | "Web & Mobile Development";
export type Sector = "Logistics" | "Mining" | "Government & Public Sector" | "Retail" | "Manufacturing" | "Agriculture & Farming" | "Construction" | "Finance" | "Healthcare";

export interface SolutionData {
  id: string;
  name: Solution;
  description: string;
  featured?: boolean;
}

export interface SectorData {
  id: string;
  name: Sector;
  description: string;
  featured?: boolean;
}

export const solutions: SolutionData[] = [
  {
    id: "cv",
    name: "CV",
    description: "Our Computer Vision solutions leverage advanced artificial intelligence and deep learning algorithms to enable machines to see, understand, and analyze visual data with remarkable accuracy. From real-time object detection and tracking to sophisticated pattern recognition and anomaly detection, we deliver cutting-edge visual intelligence systems that transform how businesses operate, enhance safety protocols, optimize quality control, and drive operational efficiency across diverse industries.",
  },
  {
    id: "iot",
    name: "IoT",
    description: "We deliver comprehensive Internet of Things solutions that connect physical devices, sensors, and systems to create intelligent, data-driven environments. Our IoT platforms enable real-time monitoring, predictive analytics, and automated decision-making through seamlessly integrated networks of smart devices. From environmental monitoring and asset tracking to fleet management and cold chain integrity, our solutions empower businesses to optimize operations, reduce costs, and unlock new opportunities through connected intelligence.",
  },
  {
    id: "nlp",
    name: "NLP",
    description: "Our Natural Language Processing solutions harness the power of advanced AI to understand, interpret, and generate human language at scale. We develop intelligent systems that automate document processing, extract meaningful insights from unstructured text, enable conversational interfaces, and facilitate seamless human-machine communication. From automated customer service and sentiment analysis to contract review and regulatory compliance, our NLP technologies help organizations process information faster, make smarter decisions, and deliver enhanced user experiences.",
  },
  {
    id: "robotics",
    name: "Robotics & Engineering",
    description: "We specialize in advanced robotics and automation engineering solutions that combine mechanical design, intelligent control systems, and cutting-edge software to create autonomous solutions for complex industrial challenges. Our expertise spans from automated guided vehicles and drone systems to sophisticated conveyor optimization and robotic process automation. These solutions enhance productivity, improve workplace safety, and enable businesses to scale operations while maintaining precision and reliability.",
  },
  {
    id: "web-mobile",
    name: "Web & Mobile Development",
    description: "We create powerful, user-centric web and mobile applications tailored to your specific business needs and objectives. Our development expertise encompasses modern frameworks, cloud-native architectures, and responsive design principles to deliver scalable, secure, and high-performance solutions. From enterprise dashboards with AI-powered analytics to customer-facing e-commerce platforms and mobile apps, we build digital experiences that drive engagement, streamline operations, and accelerate business growth.",
  },
];

export const sectors: SectorData[] = [
  {
    id: "logistics",
    name: "Logistics",
    description: "In logistics, we provide comprehensive technology solutions that streamline supply chain operations, optimize warehouse management, and enhance transportation efficiency. Our cutting-edge systems help businesses track inventory in real-time, ensure package integrity, and maintain optimal conditions throughout the delivery process.",
  },
  {
    id: "mining",
    name: "Mining",
    description: "We specialize in delivering advanced mining technology solutions that revolutionize operations, enhance safety protocols, and maximize resource optimization. Our expertise spans from autonomous vehicle systems to environmental monitoring, helping mining companies achieve operational excellence while maintaining the highest safety standards.",
    featured: true,
  },
  {
    id: "government",
    name: "Government & Public Sector",
    description: "We empower government and public sector organizations with smart city solutions, intelligent infrastructure monitoring, and digital transformation services. Our technologies help create safer, more efficient communities through automated systems for traffic management, waste monitoring, and public service optimization.",
  },
  {
    id: "retail",
    name: "Retail",
    description: "In the retail sector, we deliver innovative solutions that enhance customer experience, optimize inventory management, and drive operational efficiency. Our technologies enable real-time stock monitoring, intelligent planogram compliance, and data-driven insights into customer behavior and foot traffic patterns.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "We provide industrial manufacturing solutions that ensure quality control, enhance workplace safety, and drive automation. Our advanced systems monitor production lines, detect defects in real-time, verify assembly processes, and enable predictive maintenance to minimize downtime and maximize productivity.",
  },
  {
    id: "agriculture",
    name: "Agriculture & Farming",
    description: "In agriculture and farming, we offer smart farming solutions that leverage technology to increase crop yields, optimize resource usage, and improve farm management. Our systems provide disease detection, nutrient mapping, yield forecasting, and automated irrigation to help farmers make data-driven decisions.",
  },
  {
    id: "construction",
    name: "Construction",
    description: "We deliver construction technology solutions focused on site safety, project management, and quality assurance. Our systems monitor PPE compliance, detect hazards in real-time, enable digital twin modeling, and streamline permit management to ensure projects are completed safely and efficiently.",
  },
  {
    id: "finance",
    name: "Finance",
    description: "In the financial sector, we provide intelligent solutions for document processing, identity verification, and data analysis. Our technologies automate expense management, ensure secure authentication, analyze contracts, and generate actionable insights from financial statements and market news.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "We offer healthcare technology solutions that enhance patient care, improve operational efficiency, and enable better health outcomes. Our systems monitor patient behavior, manage bed occupancy, process medical transcriptions, and maintain critical cold chain integrity for pharmaceuticals and vaccines.",
  },
];

// Mapping of solutions to sectors with specific use cases
export const solutionSectorMapping: Record<Solution, Record<Sector, string[]>> = {
  "CV": {
    "Logistics": [
      "Inventory Management",
      "Damage Detection",
      "Yard and Dock Management",
      "Personal Protective Equipment (PPE) Compliance",
      "Hazard Detection",
      "Fatigue detection"
    ],
    "Mining": [
      "Rock detection",
      "Truck cycle (Haul Truck Optimization/Estimation)",
      "Personal Protective Equipment (PPE) Compliance",
      "Ore Sorting and Grade Control",
      "Stockpile Volume Estimation",
      "Autonomous Vehicle Navigation"
    ],
    "Government & Public Sector": [
      "img2loc (Traffic and Crowd Management)",
      "River Waste Monitoring",
      "Waste Management",
      "Infrastructure Monitoring (garbage detection, grafitti, street ilght, road crack)",
      "Public Utilities",
      "Traffic violation, parking enforcement, license plate recognition, crowd density etc",
      "Crime analysis"
    ],
    "Retail": [
      "Planogram Compliance",
      "Real-time Stock Monitoring/Empty Shelf Detection",
      "Heat Mapping and Foot Traffic Analysis (e.g. Dwell Time Analysis, Demographic analysis)"
    ],
    "Manufacturing": [
      "Personal Protective Equipment (PPE) Compliance",
      "Defect Detection (PCB, Bottle fill, Textile, Assembly)",
      "Assembly Verification",
      "Predictive Maintenance",
      "Automated Counting and Sorting (Pupuk, Vehicle)"
    ],
    "Agriculture & Farming": [
      "Disease and Pest Detection",
      "Nutrient Deficiency Mapping",
      "Yield Forecasting",
      "Crop Counting",
      "Optimized Fertilizer and Pesticide Application",
      "Fruit/animal grading"
    ],
    "Construction": [
      "Personal Protective Equipment (PPE) Compliance, Safety Violance Detection",
      "Hazard Detection",
      "Quality Inspection"
    ],
    "Finance": [
      "Expense receipt scanning",
      "ID verification, liveness detection"
    ],
    "Healthcare": [
      "Patient behavior detection (fall, sleep)",
      "Pill detection at pharmacy",
      "Wound detection"
    ]
  },
  "IoT": {
    "Logistics": [
      "Package Tracking Tags",
      "Cold Chain Monitoring - temperature/humidity",
      "Fleet Management System (Vehicle Location, Fuel & Theft Monitor)",
      "Warehouse Environmental"
    ],
    "Mining": [
      "Truck load (Haul Truck Optimization/Estimation)",
      "Fleet Management System (Vehicle Location, Fuel & Theft Monitor)",
      "Digital Twin",
      "Environment monitoring (Underground gas, dust particulate detection, particulate in water)"
    ],
    "Government & Public Sector": [
      "Smart Parking System",
      "Flood Warning System",
      "Air Pollution Monitor",
      "Smart Street Lighting",
      "Bridge structural health"
    ],
    "Retail": [
      "Smart Inventory Counter",
      "Customer Counter",
      "Environmental Control (Freezer Temperature Monitoring)",
      "Smart Security",
      "Building management"
    ],
    "Manufacturing": [
      "Machine Health Monitor (vibvration, temp, etc)",
      "Production Counter",
      "Energy Consumption Monitor",
      "Safety Gas Detector"
    ],
    "Agriculture & Farming": [
      "Pest Detection System",
      "Automated Irrigation",
      "Automated Feeder",
      "Animal Stress Detection"
    ],
    "Construction": [
      "Load Scanner (earthwork)",
      "Safety Perimeter Alert",
      "Digital Twin",
      "Augmented Reality"
    ],
    "Finance": [
      "Queue Management System",
      "Physical Access Control"
    ],
    "Healthcare": [
      "Contactless Vital Sign Monitor",
      "Smart IV Drip Monitor",
      "Bed Occupancy Management",
      "Cold Chain Monitor"
    ]
  },
  "NLP": {
    "Logistics": [
      "Shipping document processing & extraction",
      "Customs document generation (+ integration with LLM through MCP)",
      "Customer complaint categorization"
    ],
    "Mining": [
      "Safety report analysis",
      "Predictive Maintenance",
      "Regulatory compliance document review",
      "Technical documentation search (+ integration with MCP)"
    ],
    "Government & Public Sector": [
      "Process automation (automated permit processing)",
      "Tender document analysis"
    ],
    "Retail": [
      "WhatsApp commerce integration (omnichannel reach?)",
      "Automated customer service for e-commerce (bots)",
      "Return reason analysis",
      "Competitive intelligence from reviews",
      "Product description generation"
    ],
    "Manufacturing": [
      "Maintenance log analysis to predict failures",
      "Technical documentation search (+ integration with MCP)",
      "Quality control report processing",
      "Supplier communication analysis",
      "Work instruction/SOP generation"
    ],
    "Agriculture & Farming": [
      "Market price inquiry/alerts (competitor price scrapping)",
      "Government subsidy application assistance"
    ],
    "Construction": [
      "Permit & Compliance Management",
      "Safety report analysis",
      "Project communication automation",
      "RFQ/RFI processing",
      "Technical documentation search (+ integration with MCP)",
      "Contract Analysis",
      "Predictive Maintenance"
    ],
    "Finance": [
      "Contract Analysis",
      "Investment Research",
      "Financial Statement generator & analysis",
      "Financial News Analysis"
    ],
    "Healthcare": [
      "Medical transcription",
      "Clinical note analysis",
      "Medication information",
      "Appointment scheduling",
      "Insurance claim processing"
    ]
  },
  "Robotics & Engineering": {
    "Logistics": [
      "Automated guided vehicles for warehouse/picking",
      "Drone delivery",
      "Automated sorting system",
      "Conveyor system optimization"
    ],
    "Mining": [
      "Automated guided vehicles for warehouse/picking",
      "Drone delivery",
      "Automated sorting system",
      "Conveyor system optimization"
    ],
    "Government & Public Sector": [
      "Automated toll collection",
      "Automated library system",
      "Drone surveillance"
    ],
    "Retail": [],
    "Manufacturing": [
      "Automated sorting system",
      "Conveyor system optimization"
    ],
    "Agriculture & Farming": [],
    "Construction": [],
    "Finance": [],
    "Healthcare": []
  },
  "Web & Mobile Development": {
    "Logistics": [
      "Fleet Management",
      "BI Dashboard + RAG leveraged"
    ],
    "Mining": [
      "Low cost FMS",
      "minelite expansion",
      "Permit & Compliance Management System",
      "BI Dashboard + RAG leveraged"
    ],
    "Government & Public Sector": [
      "SOE and Government Service web or app",
      "BI Dashboard + RAG leveraged"
    ],
    "Retail": [
      "SME low cost website",
      "BI Dashboard + RAG leveraged"
    ],
    "Manufacturing": [
      "QR Based Component Identification App",
      "BI Dashboard + RAG leveraged"
    ],
    "Agriculture & Farming": [
      "BI Dashboard + RAG leveraged"
    ],
    "Construction": [
      "QR Based Component Identification App",
      "minelite for construction design",
      "BI Dashboard + RAG leveraged"
    ],
    "Finance": [
      "Financial News Crawler",
      "BI Dashboard + RAG leveraged"
    ],
    "Healthcare": [
      "Stopping addiction app (judol, rokok, etc)",
      "BI Dashboard + RAG leveraged"
    ]
  }
};

// Helper function to get use cases for a specific solution-sector combination
export function getUseCases(solution: Solution, sector: Sector): string[] {
  return solutionSectorMapping[solution]?.[sector] || [];
}

// Helper function to get all sectors for a solution
export function getSectorsForSolution(solution: Solution): Sector[] {
  const mapping = solutionSectorMapping[solution];
  return Object.keys(mapping).filter(sector => mapping[sector as Sector].length > 0) as Sector[];
}

// Helper function to get all solutions for a sector
export function getSolutionsForSector(sector: Sector): Solution[] {
  return Object.keys(solutionSectorMapping).filter(solution =>
    solutionSectorMapping[solution as Solution][sector]?.length > 0
  ) as Solution[];
}
