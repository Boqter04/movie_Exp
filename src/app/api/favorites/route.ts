import { NextResponse } from "next/server";
import prisma from "@/app/db/store_db"; // adjust path if needed

export async function POST(req: Request) {
  try {
    const { userId, movieId } = await req.json();

    if (!userId || !movieId) {
      return NextResponse.json(
        { success: false, error: "Missing userId or movieId" },
        { status: 400 }
      );
    }

    // check if movie already in favorites
    const existing = await prisma.favorite.findFirst({
      where: { userId, movieId },
    });

    if (existing) {
      // remove from favorites
      await prisma.favorite.delete({
        where: { id: existing.id },
      });
      return NextResponse.json({ success: true, favorite: false });
    }

    // add to favorites
    const favorite = await prisma.favorite.create({
      data: { userId, movieId },
    });

    return NextResponse.json({ success: true, favorite: true, data: favorite });
  } catch (error: any) {
    console.error("❌ Favorite API error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
