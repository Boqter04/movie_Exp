// import prisma from "../lib/prisma";

// export async function searchMovies(query: string) {
//   if (!query) {
//     return []; // return empty array if no query
//   }

//   const movies = await prisma.movie.findMany({
//     where: {
//       title: {
//         contains: query,
//       },
//     },
//     orderBy: {
//       releaseDate: "desc",
//     },
//   });

//   return movies;
// }
"use server"; // important for Next.js Server Actions

import prisma from "../db/store_db";

export async function searchMovies(query: string) {
  if (!query || query.trim() === "") return [];

  const movies = await prisma.movie.findMany({
    where: {
      title: {
        contains: query,
      },
    },
    orderBy: {
      releaseDate: "desc",
    },
    take: 20, // limit results
  });

  return movies;
}
