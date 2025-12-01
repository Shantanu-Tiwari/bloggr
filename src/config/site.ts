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
    "A modern blog platform for developers and tech enthusiasts. Share insights, tutorials, and experiences.",
  url: "https://bloggr.dev",
  ogImage: "https://bloggr.dev/og",
  links: {
    twitter: "https://x.com/ShantanuTi43203",
    github: "https://github.com/Shantanu-Tiwari",
  },
};
