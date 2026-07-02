import type { MetadataRoute } from "next";

const BASE_URL = "https://raimanish.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    // "/about",
    // "/projects",
    // "/experience",
    // "/blog",
    // "/contact",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
