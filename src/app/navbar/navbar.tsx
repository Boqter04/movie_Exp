 "use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { searchMovies } from "../actions/movie_search";
import "flowbite";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    // Call Prisma searchMovies
    const movies = await searchMovies(value);
    setResults(movies);
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Flowbite search input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
          className="block w-full pl-10 pr-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-cyan-700 focus:border-cyan-700"
        />
      </div>

      {/* Dropdown Results */}
      {results.length > 0 && (
        <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {results.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 transition"
            >
              {movie.posterPath && (
                <Image
                  src={`https://image.tmdb.org/t/p/w92${movie.posterPath}`}
                  alt={movie.title}
                  width={40}
                  height={60}
                  className="rounded-md"
                />
              )}
              <span className="text-sm font-medium text-gray-800">
                {movie.title}
              </span>
              <span className="ml-auto text-xs text-gray-500">
                {movie.releaseDate ? movie.releaseDate.slice(0, 4) : ""}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white font-bold text-xl">
            MERL
          </div>

          {/* Search Bar */}
          <SearchBar />

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-white font-medium">
            <li>
              <Link
                href="/"
                className="hover:bg-cyan-700 px-3 py-2 rounded-md transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/movie"
                className="hover:bg-cyan-700 px-3 py-2 rounded-md transition"
              >
                Movie
              </Link>
            </li>
            <li>
              <Link
                href="/contact_us"
                className="hover:bg-cyan-700 px-3 py-2 rounded-md transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:bg-cyan-700 px-3 py-2 rounded-md transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
