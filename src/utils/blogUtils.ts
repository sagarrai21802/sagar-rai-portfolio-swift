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
