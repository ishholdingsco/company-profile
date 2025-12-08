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
        "/pocketmine/hero-1.png",
        "/pocketmine/hero-2.png",
        "/pocketmine/hero-3.png",
        "/pocketmine/hero-4.png",
      ],
      category: "product",
      customLayout: "pocketmine"
    },
    yanto: {
      title: "His Name is Yanto",
      subtitle: "Product",
      description: "A 2D horror rogue-like bullet hell where you play as an Indonesian shaman.",
      heroImages: [
        "/yanto/hero-1.png",
        "/yanto/hero-2.png",
        "/yanto/hero-3.png",
        "/yanto/hero-4.png",
      ],
      category: "product",
      customLayout: "yanto"
    }
  },
  research: {
    // Add research projects here
  }
};
