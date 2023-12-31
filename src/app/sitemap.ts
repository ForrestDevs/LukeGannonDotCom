import { MetadataRoute } from "next";
import { allArticles } from ".contentlayer/generated";
import siteMetadata from "@/data/siteMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;
  const blogRoutes = allArticles.map((post) => ({
    url: `${siteUrl}/${post.slug}`,
    lastModified: post.publishedAt || post.publishedAt,
  }));

  const routes = ["", "blog", "projects", "tags"].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogRoutes];
}
