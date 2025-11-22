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
    description: "Computer Vision solutions for visual recognition, detection, and analysis",
    featured: true,
  },
  {
    id: "iot",
    name: "IoT",
    description: "Internet of Things for connected devices, sensors, and real-time monitoring",
  },
  {
    id: "nlp",
    name: "NLP",
    description: "Natural Language Processing for text analysis, automation, and insights",
  },
  {
    id: "robotics",
    name: "Robotics & Engineering",
    description: "Robotics and automation engineering solutions",
  },
  {
    id: "web-mobile",
    name: "Web & Mobile Development",
    description: "Custom web and mobile application development",
  },
];

export const sectors: SectorData[] = [
  {
    id: "logistics",
    name: "Logistics",
    description: "Supply chain, warehouse, and transportation solutions",
  },
  {
    id: "mining",
    name: "Mining",
    description: "Mining operations, safety, and resource optimization",
    featured: true,
  },
  {
    id: "government",
    name: "Government & Public Sector",
    description: "Smart city, public services, and government solutions",
  },
  {
    id: "retail",
    name: "Retail",
    description: "Retail operations, customer experience, and inventory management",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Industrial manufacturing, quality control, and automation",
  },
  {
    id: "agriculture",
    name: "Agriculture & Farming",
    description: "Smart farming, crop monitoring, and agricultural automation",
  },
  {
    id: "construction",
    name: "Construction",
    description: "Construction safety, project management, and site monitoring",
  },
  {
    id: "finance",
    name: "Finance",
    description: "Financial services, document processing, and analysis",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Healthcare monitoring, patient care, and medical applications",
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
