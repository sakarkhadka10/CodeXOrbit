"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navitems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white text-gray-900 px-6 lg:px-20 py-4 shadow-md z-50">
      {/* Desktop View */}
      <div className="hidden lg:block">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo/UvaisCodes.png"
              alt="UvaisCodes Logo"
              width={200}
              height={60}
              className="w-48 h-12"
              priority
            />
          </Link>

          <ul className="flex items-center gap-8">
            {navitems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-amber-500 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Search"
          >
            <FaMagnifyingGlass className="text-xl text-gray-700" />
          </button>
        </nav>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        <nav className="flex justify-between items-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {showMenu ? (
              <FaXmark className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>

          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo/UvaisCodes.png"
              alt="UvaisCodes Logo"
              width={160}
              height={48}
              className="w-40 h-10"
              priority
            />
          </Link>

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Search"
          >
            <FaMagnifyingGlass className="text-xl text-gray-700" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="text-xl font-bold">
              <span className="text-amber-500">Uvais</span>Codes
            </Link>
            <button
              onClick={() => setShowMenu(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaXmark className="text-xl" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navitems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 hover:text-amber-500 transition-colors py-2 border-b border-gray-100"
                onClick={() => setShowMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="max-w-2xl mx-auto pt-20">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Search</h2>
              <button
                onClick={() => setShowSearch(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FaXmark className="text-xl" />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search tutorials, projects, and more..."
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"
              />
              <button className="absolute right-4 top-4">
                <FaMagnifyingGlass className="text-xl text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay when mobile menu or search is open */}
      {(showMenu || showSearch) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            setShowMenu(false);
            setShowSearch(false);
          }}
        />
      )}
    </header>
  );
};

export default NavBar;
