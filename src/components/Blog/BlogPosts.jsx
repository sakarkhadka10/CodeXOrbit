"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFilter, FaCalendarAlt, FaUser } from "react-icons/fa";
import { useSearchParams, useRouter } from "next/navigation";
import { postCaching } from "@/lib/siteConfig";

export default function BlogPosts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([{ name: "All", count: 0 }]);
  
  // Get query params
  const searchTerm = searchParams.get("q") || "";
  const activeCategory = searchParams.get("category") || "All";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts", {
          cache: postCaching.cache,
        });
        const data = await response.json();
        setPosts(data);
        
        // Generate categories from posts data
        const categoryMap = data.reduce((acc, post) => {
          if (!acc[post.category]) {
            acc[post.category] = 0;
          }
          acc[post.category]++;
          return acc;
        }, {});
        
        const categoryList = [
          { name: "All", count: data.length },
          ...Object.keys(categoryMap).map(name => ({
            name,
            count: categoryMap[name]
          }))
        ];
        
        setCategories(categoryList);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts by category and search term
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = !searchTerm || 
                          post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured posts (first 3)
  const featuredPosts = filteredPosts.slice(0, 3);
  
  // Get paginated posts (excluding featured)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(3).slice(indexOfFirstPost, indexOfLastPost);
  
  // Calculate total pages
  const totalPages = Math.ceil((filteredPosts.length - 3) / postsPerPage);

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    params.delete("page"); // Reset to page 1
    router.push(`/blog?${params.toString()}`);
  };

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`/blog?${params.toString()}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex items-center mr-2 text-gray-700">
          <FaFilter className="mr-2" />
          <span className="font-medium">Filter:</span>
        </div>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryChange(category.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              category.name === activeCategory
                ? "bg-amber-500 text-white"
                : "bg-white text-gray-700 hover:bg-amber-500 hover:text-white"
            }`}
            aria-pressed={category.name === activeCategory}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No posts found</h2>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <>
          {/* Featured Posts */}
          {featuredPosts.length > 0 && !searchTerm && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-1 bg-amber-500 mr-3"></span>
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.id}>
                    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                        <span className="absolute bottom-3 left-3 px-3 py-1 text-xs bg-amber-500 text-white font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>
                        <div className="mt-auto flex items-center text-xs text-gray-500">
                          <span className="flex items-center mr-4">
                            <FaUser className="mr-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center">
                            <FaCalendarAlt className="mr-1" />
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Regular Posts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-amber-500 mr-3"></span>
              {searchTerm ? "Search Results" : "All Articles"}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {currentPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row group">
                    <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900/70 to-transparent"></div>
                      <span className="absolute bottom-3 left-3 px-3 py-1 text-xs bg-amber-500 text-white font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5 md:p-6 md:w-2/3">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 md:line-clamp-3">{post.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="flex items-center mr-4">
                          <FaUser className="mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <FaCalendarAlt className="mr-1" />
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous page"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 text-sm font-medium border ${
                      currentPage === page
                        ? "bg-amber-500 text-white border-amber-500"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next page"
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </>
      )}
    </>
  );
}