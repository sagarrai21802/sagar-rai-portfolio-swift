/**
 * Static blog post interface
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  image_url?: string;
  author: string;
  created_at: string;
  tags: string; // comma-separated strings
}