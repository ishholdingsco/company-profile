// Project data configuration
export interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  heroImages: string[];
  category: string;
  customLayout?: string;
}

export const projectData: Record<string, Record<string, ProjectData>> = {
  product: {
    pocketmine: {
      title: "PocketMine",
      subtitle: "Product",
      description: "The world's pioneering mining navigation app for your smartphone.",
      heroImages: [
        "/project/product/pocketmine/hero-1.png",
        "/project/product/pocketmine/hero-2.png",
        "/project/product/pocketmine/hero-3.png",
        "/project/product/pocketmine/hero-4.png",
      ],
      category: "product",
      customLayout: "pocketmine"
    },
    yanto: {
      title: "His Name is Yanto",
      subtitle: "Product",
      description: "A 2D horror rogue-like bullet hell where you play as an Indonesian shaman.",
      heroImages: [
        "/project/product/yanto/hero-1.png",
        "/project/product/yanto/hero-2.png",
        "/project/product/yanto/hero-3.png",
        "/project/product/yanto/hero-4.png",
      ],
      category: "product",
      customLayout: "yanto"
    },
    fms: {
      title: "Fleet Management System",
      subtitle: "Product",
      description: "A comprehensive fleet management system for real-time vehicle monitoring and optimization.",
      heroImages: [
        "/project/product/fms/hero-1.png",
        "/project/product/fms/hero-2.png",
        "/project/product/fms/hero-3.png",
      ],
      category: "product",
      customLayout: "fms"
    },
    wanderound: {
      title: "Wanderound",
      subtitle: "Product",
      description: "A smart location-based discovery platform for exploring hidden gems and unique experiences.",
      heroImages: [
        "/project/product/wanderound/hero-1.png",
        "/project/product/wanderound/hero-2.png",
        "/project/product/wanderound/hero-3.png",
      ],
      category: "product",
      customLayout: "wanderound"
    }
  },
  research: {
    "transport-network": {
      title: "Jakarta Transportation Network Resilience",
      subtitle: "Research",
      description: "Analysis of the resilience and robustness of Jakarta's transportation network infrastructure.",
      heroImages: [
        "/project/research/transport-network/hero-1.png",
        "/project/research/transport-network/hero-2.png",
        "/project/research/transport-network/hero-3.png",
        "/project/research/transport-network/hero-4.png",
      ],
      category: "research",
      customLayout: "transport-network"
    },
    "electric-wheeler-modelling": {
      title: "Electric 2-Wheelers Adoption Modelling",
      subtitle: "Research",
      description: "System dynamics modeling of electric 2-wheeler adoption rates and market penetration.",
      heroImages: [
        "/project/research/electric-wheeler-modelling/hero-1.png",
        "/project/research/electric-wheeler-modelling/hero-2.png",
        "/project/research/electric-wheeler-modelling/hero-3.png",
        "/project/research/electric-wheeler-modelling/hero-4.png",
        "/project/research/electric-wheeler-modelling/hero-5.png",
      ],
      category: "research",
      customLayout: "electric-wheeler-modelling"
    }
  }
};
