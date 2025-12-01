type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Bloggr",
  description:
    "Shantanu Tiwari's personal blog. Sharing insights on web development, programming, and tech experiences.",
  url: "https://bloggr-beige.vercel.app",
  ogImage: "https://bloggr-beige.vercel.app/og",
  links: {
    twitter: "https://x.com/ShantanuTi43203",
    github: "https://github.com/Shantanu-Tiwari",
  },
};
