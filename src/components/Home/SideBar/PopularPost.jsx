"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PopularPost = () => {
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from an API or JSON file
    const fetchPopularPosts = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/popular-posts");
        const data = await response.json();
        setPopularPosts(data);
      } catch (error) {
        console.error("Error fetching popular posts:", error);
        // Fallback data in case of error
        setPopularPosts([
          {
            id: 1,
            title: "100+ Frontend Projects to Level up Your Skills",
            coverImage: "/img/frontendbg.png",
            description:
              "AxdlmrbklJh7KXNHr8X wLsTjrOE5KSlHen8E_AxdlmrbklJh7KXNHr8Xio85byQCHuiO5iN26ZXY",
            author: "Uvals Codes",
            date: "October 31, 2024",
            category: "project",
          },
          {
            id: 2,
            title: "100+ Frontend Projects to Level up Your Skills",
            coverImage: "/img/frontendbg.png",
            description:
              "AxdlmrbklJh7KXNHr8X wLsTjrOE5KSlHen8E_AxdlmrbklJh7KXNHr8Xio85byQCHuiO5iN26ZXY",
            author: "Uvals Codes",
            date: "October 31, 2024",
            category: "frontend",
          },
          {
            id: 3,
            title: "100+ Frontend Projects to Level up Your Skills",
            coverImage: "/img/frontendbg.png",
            description:
              "AxdlmrbklJh7KXNHr8X wLsTjrOE5KSlHen8E_AxdlmrbklJh7KXNHr8Xio85byQCHuiO5iN26ZXY",
            author: "Uvals Codes",
            date: "October 31, 2024",
            category: "code",
          },
          {
            id: 4,
            title: "100+ Frontend Projects to Level up Your Skills",
            coverImage: "/img/frontendbg.png",
            description:
              "AxdlmrbklJh7KXNHr8X wLsTjrOE5KSlHen8E_AxdlmrbklJh7KXNHr8Xio85byQCHuiO5iN26ZXY",
            author: "Uvals Codes",
            date: "October 31, 2024",
            category: "code",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularPosts();
  }, []);

  if (loading) {
    return (
      <div className="bg-white px-5 py-6 rounded-xl shadow-sm animate-pulse">
        <div className="h-7 bg-gray-200 rounded mb-5 w-2/3"></div>
        <div className="space-y-5">
          <div className="h-40 bg-gray-200 rounded-xl"></div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4">
              <div className="w-20 h-16 bg-gray-200 rounded-md"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!popularPosts.length) {
    return null;
  }

  return (
    <div className="bg-white px-5 py-6 rounded-xl shadow-sm">
      <header className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">Popular Articles</h2>
      </header>
      <main className="space-y-5">
        {/* Featured Post */}
        {popularPosts.length > 0 && (
          <Link href={`/post/${popularPosts[0].id}`} className="block">
            <div
              className="relative h-50 rounded-xl overflow-hidden bg-gray-900 shadow-md hover:shadow-lg transition-shadow"
              style={{
                backgroundImage: `url(${popularPosts[0].coverImage})`,
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 text-xs font-medium text-white bg-indigo-600 rounded-full">
                  {popularPosts[0].category}
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Other Posts */}
        {popularPosts.slice(1).map((post, index) => (
          <Link href={`/post/${post.id}`} key={post.id} className="block">
            <div className="flex gap-4 group">
              <div className="w-20 h-16 rounded-md overflow-hidden relative flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    post.categoryColor || "bg-gray-200"
                  } ${
                    post.textColor || "text-gray-800"
                  } text-xs font-medium text-center p-1`}
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />{" "}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default PopularPost;
