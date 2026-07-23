import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { getContentPreview, formatDate, parseTags } from '@/utils/blogUtils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { blogs } from '@/data/blogs';
import SEO from '@/components/SEO';

const Blog = () => {
  if (!blogs.length) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
            const tags = parseTags(blog.tags);
            const preview = getContentPreview(blog.content, 120);

            return (
              <Link key={blog.id} to={`/blog/${blog.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 group cursor-pointer">
                  {/* Image */}
                  {blog.image_url && (
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={blog.image_url}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <CardHeader className="pb-2">
                    <h2 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h2>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {preview}
                    </p>

                    {/* Tags */}
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="pt-0 text-xs text-muted-foreground">
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1 ml-auto">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(blog.created_at)}</span>
                      </div>
                    </div>
                  </CardFooter>
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