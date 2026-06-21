import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { formatDate, parseTags } from '@/utils/blogUtils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogs } from '@/data/blogs';
import SEO from '@/components/SEO';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO 
          title="Blog Not Found | Sagar Rai" 
          description="The blog post you're looking for doesn't exist."
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Blog Post Not Found</h2>
          <p className="text-muted-foreground mb-4">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const tags = parseTags(blog.tags);
  const preview = blog.content.substring(0, 160).trim() + '...';

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <SEO 
        title={`${blog.title} | Sagar Rai`}
        description={preview}
        type="article"
        image={blog.image_url}
        url={`https://sagarrai.dev/blog/${blog.slug}`}
      />
      
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 hover:bg-transparent hover:text-primary"
          onClick={() => navigate('/blog')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>

        {/* Hero Image */}
        {blog.image_url && (
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <img
              src={blog.image_url}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {blog.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(blog.created_at)}</span>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {blog.content.split('\\n').map((paragraph, index) => {
            if (paragraph.trim() === '') {
              return <br key={index} />;
            }
            // Basic markdown support for bold text
            const renderParagraph = () => {
              const parts = paragraph.split(/\\*\\*(.*?)\\*\\*/g);
              if (parts.length > 1) {
                return parts.map((part, i) => 
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                );
              }
              return paragraph;
            };

            return (
              <p key={index} className="mb-4 text-foreground/90 leading-relaxed">
                {renderParagraph()}
              </p>
            );
          })}
        </article>

        {/* Divider */}
        <div className="border-t border-border mt-12 mb-8" />

        {/* Back to Blog Button */}
        <div className="text-center">
          <Button onClick={() => navigate('/blog')} size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Blog Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;