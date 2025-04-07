"use client";
import React, { useState, useEffect } from "react";
import BlogPostCard from "../ui/BlogPostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        // Fallback data in case of error
        setPosts([
          {
            id: 1,
            title: "100+ Frontend Projects to Level up Your Skills",
            coverImage: "/img/frontendbg.png",
            description:
              "If you're a developer looking to enhance your skills, YouTube is one of the best platforms t",
            author: "Uvals Codes",
            date: "October 31, 2024",
            category: "project",
          },
          {
            id: 2,
            title: "100+ Frontend Projects to Level up Your Skills",
            coverImage: "/img/frontendbg.png",
            description:
              "If you're a developer looking to enhance your skills, YouTube is one of the best platforms t",
            author: "Uvals Codes",
            date: "October 31, 2024",
            category: "frontend",
          },
          {
            id: 3,
            title: "100+ Frontend Projects to Level up Your Skills",
            coverImage: "/img/frontendbg.png",
            description:
              "If you're a developer looking to enhance your skills, YouTube is one of the best platforms t",
            author: "Uvals Codes",
            date: "October 31, 2024",
            category: "code",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="space-y-8 bg-white rounded-2xl animate-pulse"
            >
              <article className="border-1 border-[#e3e3ff] py-4 px-3 rounded-2xl">
                <div className="flex flex-col md:flex-row gap-14 items-center">
                  <div className="md:w-1/3">
                    <div className="aspect-[16/8] w-80 h-60 bg-gray-200 rounded-lg"></div>
                  </div>
                  <div className="md:w-2/3 pr-5 space-y-4 w-full">
                    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-10 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
