import { ComputedFields, makeSource } from "contentlayer/source-files";
import { writeFileSync } from "fs";
import readingTime from "reading-time";
// Remark packages
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
// Rehype packages
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
// import rehypeCitation from 'rehype-citation'
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypePrismPlus from "rehype-prism-plus";
import rehypePresetMinify from "rehype-preset-minify";
import siteMetadata from "@/data/siteMetadata";
import withToc from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";
import { Article } from "@/content/definitions/Article";
import { Snippets } from "@/content/definitions/Snippet";

const isProduction = process.env.NODE_ENV === "production";

// Rehype Pretty Code Configuration
const PrettyCodeOptions: Partial<Options> = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  onVisitLine(node: any) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    const nodeClass = node.properties.className;
    if (nodeClass && nodeClass.length > 0) {
      node.properties.className.push("highlighted");
    } else {
      node.properties.className = ["highlighted"];
    }
  },
  onVisitHighlightedChars(node: any) {
    node.properties.className = ["word"];
  },
};

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ""),
  },
  path: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
  filePath: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFilePath,
  },
  // toc: { type: "string", resolve: (doc) => withTocExport(doc.body.raw) },
};

/**
 * Count the occurrences of all tags across blog posts and write to json file
 */
// function createTagCount(allBlogs: any[]) {
//   const tagCount: Record<string, number> = {};
//   allBlogs.forEach((file) => {
//     if (file.tags && (!isProduction || file.draft !== true)) {
//       file.tags.forEach((tag: any) => {
//         const formattedTag = GithubSlugger.slug(tag);
//         if (formattedTag in tagCount) {
//           tagCount[formattedTag] += 1;
//         } else {
//           tagCount[formattedTag] = 1;
//         }
//       });
//     }
//   });
//   writeFileSync("./app/tag-data.json", JSON.stringify(tagCount));
// }

// function createSearchIndex(allBlogs: MDXDocumentDate[]) {
//   if (
//     siteMetadata?.search?.provider === "kbar" &&
//     siteMetadata.search.kbarConfig.searchDocumentsPath
//   ) {
//     writeFileSync(
//       `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`,
//       JSON.stringify(allCoreContent(sortPosts(allBlogs)))
//     );
//     console.log("Local search index generated...");
//   }
// }

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Article, Snippets],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    cwd: process.cwd(),
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      [rehypeSlug],
      [rehypePrettyCode, PrettyCodeOptions],
      [withToc, { export: withTocExport }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          properties: {
            className: ["anchor"],
          },
        },
      ],
      [rehypePrismPlus, { defaultLanguage: "js", ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
  onSuccess: async (importData) => {
    const { allBlogs } = await importData();
    // createTagCount(allBlogs);
    // createSearchIndex(allBlogs);
  },
});
