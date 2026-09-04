import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { getContentPreview, formatDate } from '@/utils/blogUtils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { blogs } from '@/data/blogs';
import SEO from '@/components/SEO';

const Blog = () => {
  if (!blogs.length) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <SEO
          title="Blog | Sagar Rai"
          description="Read thoughts, tutorials, and insights on iOS development, software engineering, and career growth."
        />
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            No blog posts found. Check back later!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 page-transition">
      <SEO
        title="Blog | Sagar Rai"
        description="Read thoughts, tutorials, and insights on iOS development, software engineering, and career growth."
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on software development
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            const preview = getContentPreview(blog.content, 120);

            return (
              <Link key={blog.id} to={`/blog/${blog.slug}`}>
                <Card className="h-full border-border/50 group cursor-pointer">
                  {/* Image */}
                  {blog.image_url ? (
                    <div className="relative h-48 bg-muted overflow-hidden rounded-t-lg">
                      <img
                        src={blog.image_url}
                        alt={blog.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="relative h-48 bg-muted overflow-hidden rounded-t-lg flex items-center justify-center">
                      <img
                        src="/placeholder.svg"
                        alt={blog.title}
                        className="w-20 h-20 opacity-40 object-contain"
                      />
                    </div>
                  )}

                  <CardHeader className="pb-2 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(blog.created_at)}</span>
                    </div>
                    <h2 className="text-xl font-bold line-clamp-2">
                      {blog.title}
                    </h2>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {preview}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;