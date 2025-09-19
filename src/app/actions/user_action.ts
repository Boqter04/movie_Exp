import prisma from "@/app/db/store_db";

export async function getUserProfile(userId: number) {
  return await prisma.user.findUnique({
    where: { id: userId },
    include: {
      favorites: {
        include: { movie: true }, // include full movie details
      },
    },
  });
}
 