// import Image from "next/image";
// import { getMovieById } from "@/app/actions/movie_action";

// export default async function MovieDetail({ params }) {
//   const movie = await getMovieById(params.id);

//   if (!movie) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <h2 className="text-2xl font-bold">Movie not found</h2>
//       </div>
//     );
//   }

//   const poster =
//     movie.posterUrl ||
//     (movie.posterPath
//       ? `https://image.tmdb.org/t/p/w500${movie.posterPath}`
//       : "/placeholder.jpg");

//   const backdrop =
//     movie.backdropPath
//       ? `https://image.tmdb.org/t/p/original${movie.backdropPath}`
//       : "/placeholder_backdrop.jpg";

//   return (
//     <div className="relative min-h-screen bg-gray-950 text-white">
//       {/* Backdrop */}
//       <div className="absolute inset-0">
//         <Image
//           src={backdrop}
//           alt={movie.title}
//           fill
//           className="object-cover opacity-30"
//           priority
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Poster */}
//         <div className="md:col-span-1">
//           <Image
//             src={poster}
//             alt={movie.title}
//             width={500}
//             height={750}
//             className="rounded-2xl shadow-lg"
//           />
//         </div>

//         {/* Info */}
//         <div className="md:col-span-2 flex flex-col justify-center">
//           <h1 className="text-4xl font-extrabold mb-4">{movie.title}</h1>
//           <p className="text-lg text-gray-300 mb-6">
//             Release Date: {movie.releaseDate || "Unknown"}
//           </p>
//           <p className="text-base text-gray-200 leading-relaxed">
//             {movie.overview || "No overview available."}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import { getMovieById } from "@/app/actions/movie_action";
import FavoriteButton from "../../favbtn/FavoriteButton";

export default async function MovieDetail({ params }) {
  const movie = await getMovieById(params.id);

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold">Movie not found</h2>
      </div>
    );
  }

  const poster =
    movie.posterUrl ||
    (movie.posterPath
      ? `https://image.tmdb.org/t/p/w500${movie.posterPath}`
      : "/placeholder.jpg");

  const backdrop =
    movie.backdropPath
      ? `https://image.tmdb.org/t/p/original${movie.backdropPath}`
      : "/placeholder_backdrop.jpg";

  return (
    <div className="relative min-h-screen bg-gray-950 text-white">
      <div className="absolute inset-0">
        <Image
          src={backdrop}
          alt={movie.title}
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <Image
            src={poster}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="md:col-span-2 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-4">{movie.title}</h1>
          <p className="text-lg text-gray-300 mb-6">
            Release Date: {movie.releaseDate || "Unknown"}
          </p>
          <p className="text-base text-gray-200 leading-relaxed mb-6">
            {movie.overview || "No overview available."}
          </p>

          <FavoriteButton movieId={movie.id} />
        </div>
      </div>
    </div>
  );
}
