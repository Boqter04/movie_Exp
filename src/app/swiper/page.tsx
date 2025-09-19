// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { getMovies } from "../actions/movie_action"; // adjust path if needed

// export default function SwiperPage() {
//   const [movies, setMovies] = useState<any[]>([]);

//   useEffect(() => {
//     async function fetchMovies() {
//       const data = await getMovies();
//       setMovies(data);
//     }
//     fetchMovies();
//   }, []);

//   if (movies.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-[600px] text-gray-400">
//         Loading movies...
//       </div>
//     );
//   }

//   return (
//     <div className="w-full h-[600px] bg-black text-white">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation
//         loop
//         className="w-full h-full"
//       >
//         {movies.slice(0, 6).map((movie) => (
//           <SwiperSlide key={movie.id}>
//             <div className="relative w-full h-[600px]">
//               {/* Background image */}
//               <Image
//                 src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
//                 alt={movie.title}
//                 fill
//                 className="object-cover"
//                 priority
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

//               {/* Content */}
//               <div className="absolute bottom-20 left-10 max-w-xl">
//                 <h2 className="text-4xl font-extrabold mb-4">{movie.title}</h2>
//                 <p className="text-lg text-gray-300 mb-6 line-clamp-3">
//                   {movie.overview}
//                 </p>
//                 <a
//                   href={`/movie/${movie.id}`}
//                   className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
//                 >
//                   Watch Now
//                 </a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
