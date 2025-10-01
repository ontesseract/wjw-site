import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  body: string;
  firstImage?: string;
  description?: string;
  keywords?: string[];
}

const contentDir = path.join(process.cwd(), "src/lib/blog");

async function getBlogPostFromFile(
  fileName: string
): Promise<BlogPost | undefined> {
  try {
    // Extract the blog slug from the filename (remove .md or .mdx extension)
    const blogSlug = fileName.replace(/\.(md|mdx)$/, "");

    // Read the markdown content
    const fullPath = path.join(contentDir, fileName);
    console.log("fullPath", fullPath);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    const firstLine = content.split("\n")[0];
    let title: string;
    let processedContent = content;

    if (firstLine.startsWith("# ")) {
      // Handle titles like: # **What Is An Immersive Show? Here's What to Expect Here in Branson [h1]**
      title = firstLine
        .replace(/^# /, "") // Remove markdown header
        .replace(/\*\*/g, "") // Remove bold markers
        .replace(/\s*\[h[1-6]\]\s*$/, "") // Remove [h1], [h2], etc. annotations
        .trim();
      processedContent = content.split("\n").slice(1).join("\n").trim();
    } else {
      // Fallback to frontmatter title or generated from slug
      title =
        data.title ||
        blogSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    }

    // Clean up content before processing - be more selective
    const cleanedContent = processedContent
      // Remove header annotations like [h1], [h2], [H2], etc. (case insensitive) but preserve spacing
      .replace(/\[h[1-6]\]/gi, '')
      .replace(/\[H[1-6]\]/gi, '')
      // Remove image reference placeholders like ![][image1]
      .replace(/!\[\]\[image\d+\]/gi, '')
      // Remove table dividers like | :---: | but only those specific patterns
      .replace(/^\|\s*:?-+:?\s*\|\s*$/gm, '')
      // Remove empty table cells | | but only on their own lines
      .replace(/^\|\s*\|\s*$/gm, '')
      // Replace book tickets links with a special marker
      .replace(/🎟️\s*\[([^\]]+)\]\([^)]+\)/gi, '{{BOOK_TICKETS_BUTTON:$1}}')
      // Clean up multiple line breaks only
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    // Find the first image reference for the card after cleaning
    const imageMatch = cleanedContent.match(/!\[.*?\]\((\/[^)]+)\)/i);
    const firstImage = imageMatch ? imageMatch[1] : undefined;

    const processedMarkdown = await remark()
      .use(html)
      .process(cleanedContent);

    return {
      title,
      slug: blogSlug,
      date:
        data.date ||
        new Date(fs.statSync(fullPath).mtime).toISOString().split("T")[0],
      body: String(processedMarkdown),
      firstImage,
      description: data.description,
      keywords: data.keywords ? (Array.isArray(data.keywords) ? data.keywords : [data.keywords]) : undefined,
    };
  } catch (error) {
    console.error(`Error processing blog post ${fileName}:`, error);
    return undefined;
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  // Try .mdx first, then fall back to .md
  const mdxPost = await getBlogPostFromFile(`${slug}.mdx`);
  if (mdxPost) return mdxPost;
  return getBlogPostFromFile(`${slug}.md`);
}

export async function getBlogPosts(
  offset: number = 0,
  limit: number = 10
): Promise<BlogPost[]> {
  try {
    const blogFiles = fs
      .readdirSync(contentDir)
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .slice(offset, offset + limit);

    const posts = await Promise.all(blogFiles.map(getBlogPostFromFile));
    return posts
      .filter((post): post is BlogPost => post !== undefined)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export async function getBlogPostCount(): Promise<number> {
  try {
    const blogFiles = fs
      .readdirSync(contentDir)
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
    return blogFiles.length;
  } catch (error) {
    console.error("Error counting blog posts:", error);
    return 0;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogFiles = fs
      .readdirSync(contentDir)
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

    const posts = await Promise.all(blogFiles.map(getBlogPostFromFile));
    return posts
      .filter((post): post is BlogPost => post !== undefined)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading all blog posts:", error);
    return [];
  }
}
