'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import BlogCard from '@/src/components/content/CardBlog';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { Skeleton } from '@/src/components/ui/skeleton';
import Script from 'next/script';
import SearchInput from '@/src/components/ui/SearchInput';

interface Blog {
  guid: string;
  title: string;
  link: string;
  contentSnippet: string;
  categories: string[];
  source: string;
  thumbnail?: string;
  pubDate?: string;
}

interface BlogSectionProps {
  staticBlogs?: Blog[];
}

const BlogSection = ({ staticBlogs }: BlogSectionProps) => {
  const [blogSearch, setBlogSearch] = useState<string>(''); // Add search bar functionality
  const [blogs, setBlogs] = useState<Blog[]>(staticBlogs || []);
  const [isLoading, setIsLoading] = useState<boolean>(staticBlogs ? false : true);
  const [error, setError] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    // If static blogs are provided, filter them based on search
    if (staticBlogs) {
      const filteredBlogs = staticBlogs.filter((blog) => {
        const searchLower = blogSearch.toLowerCase();
        return (
          blog.title.toLowerCase().includes(searchLower) ||
          blog.contentSnippet.toLowerCase().includes(searchLower) ||
          blog.categories.some((category) => category.toLowerCase().includes(searchLower))
        );
      });
      setBlogs(filteredBlogs);
      return;
    }

    // Otherwise fetch blogs from API
    const fetchBlogs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/fetchRSS`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();

        const filteredBlogs = data.items.filter((blog: Blog) =>
          blog.title.toLowerCase().includes(blogSearch.toLowerCase())
        );
        setBlogs(filteredBlogs);
      } catch (error) {
        setError('Failed to fetch blogs');
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [blogSearch, pathname, staticBlogs]);

  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Blogs" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-black dark:text-white">
            I write about my research work in machine learning and AI applications in healthcare, as well as mobile 
            application development using Flutter. My blogs cover a range of topics from skin cancer classification to 
            chronic kidney disease prediction and mobile app architecture.
          </p>

          {/* Use SearchInput component */}
          <SearchInput
            value={blogSearch}
            onChange={(e) => setBlogSearch(e.target.value)}
            placeholder="Search blogs (Articles, topics, etc...)"
            ariaLabel="Search blogs"
          />
        </AnimationContainer>

        <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="w-full h-auto p-4">
                <Skeleton className="w-full h-10 mb-4 bg-gray-700 dark:bg-gray-600 rounded-md" />
                <Skeleton className="w-full h-6 bg-gray-700 dark:bg-gray-600 rounded-md" />
                <Skeleton className="w-3/4 h-4 bg-gray-700 dark:bg-gray-600 rounded-md mt-2" />
                <Skeleton className="w-full h-10 bg-gray-700 dark:bg-gray-600 rounded-md mt-4" />
              </div>
            ))
          ) : error ? (
            <div
              key="error-message"
              className="w-full flex justify-center items-center text-black dark:text-white p-4"
            >
              <h2>{error}</h2>
            </div>
          ) : blogs.length > 0 ? (
            blogs.map(
              ({
                guid,
                title,
                link,
                contentSnippet,
                categories,
                source,
                thumbnail,
                pubDate
              }) => (
                <div key={`blog-${guid}`} className="w-full">
                  {/* Individual JSON-LD for Each Blog Post */}
                  <Script
                    key={`json-ld-blog-${guid}`}
                    id={`json-ld-blog-${guid}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: title,
                        description: contentSnippet,
                        url: link,
                        image: thumbnail || undefined, // Optional field
                        author: {
                          '@type': 'Person',
                          name: siteConfig.author // Assuming the author's name is from siteConfig
                        },
                        datePublished: pubDate || undefined, // Optional field, fallback to undefined if not available
                        keywords: categories.join(', ')
                      })
                    }}
                  />
                  <BlogCard
                    key={guid}
                    title={title}
                    excerpt={contentSnippet}
                    tags={categories}
                    link={link}
                    source={source}
                  />
                </div>
              )
            )
          ) : (
            <div
              key="no-blogs"
              className="w-full flex justify-center items-center text-black dark:text-white p-4"
            >
              <h2>No blogs found</h2>
            </div>
          )}
        </article>
      </div>
    </SectionContainer>
  );
};

export default BlogSection;
