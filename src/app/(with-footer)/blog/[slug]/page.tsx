import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-8">
          <div className="mb-4">
            <time className="text-sm text-muted-foreground">
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          {post.description && (
            <p className="text-xl text-muted-foreground">{post.description}</p>
          )}
        </header>

        {/* Article content */}
        <article
          className="blog-content prose prose-lg max-w-none 
            prose-headings:font-bold prose-headings:text-foreground
            prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
            prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
            prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80 hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-em:text-foreground
            prose-img:rounded-lg prose-img:shadow-lg prose-img:my-6
            prose-ul:my-4 prose-li:text-foreground prose-li:mb-2
            prose-table:my-6 prose-table:border-collapse prose-table:border-0
            prose-td:border-0 prose-td:p-4 prose-td:text-center
            prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
            prose-hr:border-border prose-hr:my-8"
          dangerouslySetInnerHTML={{
            __html: post.body.replace(
              /\{\{BOOK_TICKETS_BUTTON:([^}]+)\}\}/g,
              `<div class="not-prose my-8 text-center">
                <a href="/tickets" class="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors no-underline text-lg">
                  🎟️ $1
                </a>
              </div>`
            ),
          }}
        />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div>
              {post.keywords && post.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <Link href="/blog">
              <Button variant="outline">View All Posts</Button>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Where Jesus Walked Blog`,
    description:
      post.description ||
      `Read "${post.title}" on the Where Jesus Walked blog.`,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.firstImage ? [post.firstImage] : undefined,
    },
  };
}
