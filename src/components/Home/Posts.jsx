"use client";
import React, { useState, useEffect, memo } from "react";
import BlogPostCard from "../ui/BlogPostCard";
import { FaArrowDown } from "react-icons/fa6";
import { postCaching } from "@/lib/siteConfig";

const Posts = memo(() => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts", {
          cache: postCaching.cache,
        });

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 5);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-white rounded-2xl animate-pulse p-4">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <div className="aspect-[16/8] w-80 h-60 bg-gray-200 rounded-lg"></div>
                  </div>
                  <div className="md:w-2/3 space-y-4 w-full">
                    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-1 sm:px-4 py-8">
      <div className="grid grid-cols-1 gap-6">
        {posts.slice(0, visiblePosts).map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>

      {visiblePosts < posts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 text-white px-6 py-2 bg-[#fe9a1e] rounded-lg font-medium text-lg hover:bg-amber-500 transition-colors"
          >
            Load More <FaArrowDown />
          </button>
        </div>
      )}
    </div>
  );
});

Posts.displayName = "Posts";

export default Posts;
