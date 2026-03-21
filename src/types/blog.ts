/**
 * Blog post interface based on Google Sheets CMS fields
 * Fields: id, title, slug, content, image_url, author, created_at, tags
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  image_url: string;
  author: string;
  created_at: string;
  tags: string;
}

/**
 * API response from opensheet - returns array of blog posts
 */
export type BlogAPIResponse = BlogPost[];

/**
 * Opensheet API endpoint for the Google Sheet
 * Sheet ID: 1glfwnsxhgZ17gQvQPCSck2_SDR-KAB4e-9ZGESB8VfY
 * Sheet Tab: Sheet1 (default tab name in Google Sheets)
 */
export const BLOG_SHEET_API_URL = 'https://opensheet.elk.sh/1glfwnsxhgZ17gQvQPCSck2_SDR-KAB4e-9ZGESB8VfY/Sheet1';