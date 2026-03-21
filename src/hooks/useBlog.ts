import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BlogPost, BLOG_SHEET_API_URL } from '@/types/blog';

/**
 * Fetch blog posts from the Google Sheet via opensheet API
 * URL format: https://opensheet.elk.sh/{SHEET_ID}/{TAB_NAME}
 */
const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch(BLOG_SHEET_API_URL);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch blog posts: ${response.status}`);
  }
  
  const data = await response.json();
  
  if (!data || !Array.isArray(data)) {
    throw new Error('Invalid data format from API');
  }
  
  // Sort by created_at in descending order (latest first)
  const sortedData = [...data].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateB - dateA;
  });
  
  return sortedData;
};

/**
 * Custom hook to fetch and manage blog posts
 * Uses React Query for caching and automatic refetching
 * Automatically sorts blogs by created_at in descending order
 */
export const useBlogPosts = () => {
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
    staleTime: 1000 * 60 * 5, // 5 minutes - data is fresh for 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes - keep in cache for 30 minutes
    refetchOnWindowFocus: true, // Refetch when window regains focus
    refetchInterval: 1000 * 60, // Refetch every minute to catch new entries
    retry: 2, // Retry failed requests twice before showing error
    retryDelay: 1000, // Wait 1 second between retries
  });

  return {
    blogs: data || [],
    isLoading,
    error,
    refetch,
    isFetching,
  };
};

/**
 * Custom hook to get a single blog post by slug
 * Memoized for performance optimization
 */
export const useBlogBySlug = (slug: string) => {
  const { blogs, isLoading, error } = useBlogPosts();

  const blog = useMemo(() => {
    if (!slug || !blogs.length) return null;
    return blogs.find((b) => b.slug === slug) || null;
  }, [slug, blogs]);

  return {
    blog,
    isLoading,
    error,
  };
};

/**
 * Get preview text from content (first 150 characters)
 */
export const getContentPreview = (content: string, maxLength: number = 150): string => {
  if (!content) return '';
  if (content.length <= maxLength) return content.substring(0, maxLength);
  return content.substring(0, maxLength).trim() + '...';
};

/**
 * Format date for display
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
};

/**
 * Parse tags from comma-separated string to array
 */
export const parseTags = (tagsString: string): string[] => {
  if (!tagsString) return [];
  return tagsString.split(',').map(tag => tag.trim()).filter(Boolean);
};