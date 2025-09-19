import Image from "next/image";
import { getMovies } from "./actions/movie_action";
import MoviePage from "./movie/page";

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-20">
        <div className="container mx-auto flex flex-col items-center text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Explore the World of Movies
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl text-gray-300">
            Discover trending films, explore details, and create your watchlist in one place.
          </p>
          <a
            href="/movie"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Browse Movies
          </a>
        </div>

        {/* Hero Image */}
        {/* <div className="mt-12 flex justify-center">
          <Image
            src="/hero-movie.png" // place image in public/
            alt="Hero Movie"
            width={600}
            height={350}
            className="rounded-2xl shadow-lg"
            priority
          />
        </div> */}
      </section>

      {/* Movies Section */}
      <section className="container mx-auto px-6 py-16">
        <MoviePage />
      </section>

      {/* Footer Section */}
      <section className="bg-black text-gray-300 py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-semibold text-yellow-400">Movie Explorer</p>
          <p className="text-sm text-gray-400 mt-2">
            © {new Date().getFullYear()} Movie Explorer. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="/contact_us" className="hover:text-yellow-400 transition">
              Contact Us
            </a>
            <a href="/about" className="hover:text-yellow-400 transition">
              About
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
