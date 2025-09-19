"use server";

import prisma from "@/app/db/store_db";

export async function toggleFavorite(userId, movieId) {
  const existing = await prisma.favorite.findFirst({
    where: { userId, movieId },
  });

  if (existing) {
    // Remove favorite
    await prisma.favorite.delete({ where: { id: existing.id } });
    return { status: "removed" };
  } else {
    // Add favorite
    await prisma.favorite.create({
      data: { userId, movieId },
    });
    return { status: "added" };
  }
}

export async function isFavorite(userId, movieId) {
  const favorite = await prisma.favorite.findFirst({
    where: { userId, movieId },
  });
  return !!favorite;
}
