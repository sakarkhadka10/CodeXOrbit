"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

export default function BlogSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    
    if (searchTerm) {
      params.set("q", searchTerm);
    } else {
      params.delete("q");
    }
    
    // Reset to page 1 when searching
    params.delete("page");
    
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md mt-8 relative">
      <input
        type="text"
        placeholder="Search articles..."
        className="w-full py-3 px-5 pr-12 rounded-full border-0 shadow-lg focus:ring-2 focus:ring-amber-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search blog posts"
      />
      <button 
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500"
        aria-label="Submit search"
      >
        <FaSearch />
      </button>
    </form>
  );
}