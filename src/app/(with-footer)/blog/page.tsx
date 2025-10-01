import { getAllBlogPosts } from "@/lib/blog-data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover stories, insights, and updates from Where Jesus Walked
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No blog posts found. Check back soon for updates!
            </p>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-8">
            {posts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-1/3">
                    {post.firstImage ? (
                      <div className="relative h-48 md:h-full w-full">
                        <Image
                          src={post.firstImage}
                          alt={post.title}
                          fill
                          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                        />
                      </div>
                    ) : (
                      <div className="h-48 md:h-full w-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex items-center justify-center">
                        <div className="text-blue-600 text-6xl">📝</div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="mb-3">
                        <time className="text-sm text-muted-foreground font-medium">
                          {format(new Date(post.date), "MMMM d, yyyy")}
                        </time>
                      </div>
                      <h2 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      {post.description && (
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.description}
                        </p>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          Read More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Blog - Where Jesus Walked",
  description: "Read the latest stories, insights, and updates from Where Jesus Walked - Branson's premier immersive Christian theater experience.",
};
