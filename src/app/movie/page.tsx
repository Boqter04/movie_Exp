// import Image from "next/image";
// import { getMovies } from "../actions/movie_action";

// export default async function MoviePage() {
//   const movies = await getMovies();

//   return (
//     <div className="px-6 py-10">
//       <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
//         Trending Movies
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//         {movies.map((movie) => (
//           <div
//             key={movie.id}
//             className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
//           >
//             {/* Movie Poster */}
//             <Image
//               src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
//               alt={movie.title}
//               width={400}
//               height={600}
//               className="w-full h-auto object-cover"
//             />

//             {/* Gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

//             {/* Movie Info */}
//             <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//               <h3 className="font-semibold text-lg truncate">
//                 {movie.title}
//               </h3>
//               <p className="text-sm text-gray-200">
//                 {movie.releaseDate ? movie.releaseDate.slice(0, 4) : "Unknown"}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { getMovies } from "../actions/movie_action";

export default async function MoviePage() {
  const movies = await getMovies();

  return (
    <div className="px-6 py-10">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        Trending Movies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie) => {
          const poster =
            movie.posterUrl ||
            (movie.posterPath
              ? `https://image.tmdb.org/t/p/w500${movie.posterPath}`
              : "/placeholder.jpg");

          return (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <Image
                src={poster}
                alt={movie.title}
                width={400}
                height={600}
                className="w-full h-auto object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold text-lg truncate">{movie.title}</h3>
                <p className="text-sm text-gray-200">
                  {movie.releaseDate ? movie.releaseDate.slice(0, 4) : "Unknown"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

