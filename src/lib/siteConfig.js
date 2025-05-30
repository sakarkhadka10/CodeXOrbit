/**
 * Site-wide configuration values
 * Centralized to make updates easier
 */

export const siteConfig = {
  name: "CodeX Orbit",
  description:
    "Your stellar hub for web projects, coding adventures, and all things development",
  url: "https://codexorbit.com", // Replace with your actual domain
  logoPath: "/logo/UvaisCodes.png", // Update with your logo path
  author: "AlienX Studio",
  developerName: "Sakar",
  social: {
    youtube: "https://youtube.com",
    instagram: "https://instagram.com/CodeXOrbit",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  features: {
    enablePostCaching: true, // Feature flag to enable/disable post caching
  },
};

// Fix: Changed from default export to named export
export const postCaching = {
  cache: siteConfig.features.enablePostCaching ? "force-cache" : "no-store",
};
