//  import prisma from "../db/store_db";

// // Fetch all movies
// export async function getMovies() {
//   return await prisma.movie.findMany();
// }
// export async function getMovieById(id: number) {
//   return await prisma.movie.findUnique({
//     where: { id },
//   });
// }
import prisma from "../db/store_db";

// Fetch all movies
export async function getMovies() {
  return await prisma.movie.findMany();
}

// Fetch single movie by ID
export async function getMovieById(id:any) {
  return await prisma.movie.findUnique({
    where: { id: Number(id) }, // ensure id is number if stored as Int
  });
}
