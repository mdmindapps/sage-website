import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sageacademy.app";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/demo`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/become-a-coach`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/become-a-coach/monetize`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/become-a-coach/guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/become-a-coach/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/creator-agreement`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/community-guidelines`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/cookies`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];
}
