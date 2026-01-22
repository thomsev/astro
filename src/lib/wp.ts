export type WPPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
};

export const getWordPressBaseUrl = (): string | null => {
  const baseUrl = import.meta.env.WORDPRESS_BASE_URL?.trim();
  if (!baseUrl) {
    return null;
  }

  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
};

const buildEndpoint = (path: string, baseUrl: string): URL => {
  return new URL(path.replace(/^\//, ''), baseUrl);
};

const mapPost = (post: any): WPPost => ({
  id: post.id,
  slug: post.slug,
  title: post.title?.rendered ?? '',
  excerpt: post.excerpt?.rendered ?? '',
  content: post.content?.rendered ?? '',
  date: post.date,
});

export const fetchPosts = async (): Promise<WPPost[]> => {
  const baseUrl = getWordPressBaseUrl();
  if (!baseUrl) {
    throw new Error('WORDPRESS_BASE_URL is not configured.');
  }

  const url = buildEndpoint('/wp-json/wp/v2/posts', baseUrl);
  url.searchParams.set('per_page', '10');
  url.searchParams.set('_embed', '1');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`WordPress request failed: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as any[];
  return data.map(mapPost);
};

export const fetchPostBySlug = async (slug: string): Promise<WPPost | null> => {
  const baseUrl = getWordPressBaseUrl();
  if (!baseUrl) {
    throw new Error('WORDPRESS_BASE_URL is not configured.');
  }

  const url = buildEndpoint('/wp-json/wp/v2/posts', baseUrl);
  url.searchParams.set('slug', slug);
  url.searchParams.set('_embed', '1');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`WordPress request failed: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as any[];
  const post = data[0];
  return post ? mapPost(post) : null;
};
