"use client";

import { useState } from "react";

export default function FavoriteButton({ movieId }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const userId = 2; // 👈 match the user in your DB

  const toggleFavorite = async () => {
    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, movieId }),
      });

      const data = await res.json();
      console.log("Favorite API response:", data);

      if (data.success) {
        setIsFavorite(data.favorite);

        if (data.favorite) {
          alert("✅ Movie added to favorites!");
        } else {
          alert("❌ Movie removed from favorites!");
        }
      } else {
        alert("⚠️ Failed: " + (data.error || "Something went wrong."));
      }
    } catch (error) {
      console.error("❌ Error toggling favorite:", error);
      alert("⚠️ Error: Could not update favorites.");
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`px-6 py-2 rounded-lg font-semibold transition ${
        isFavorite ? "bg-red-600 text-white" : "bg-gray-700 text-gray-200"
      }`}
    >
      {isFavorite ? "Remove Favorite" : "Add to Favorite"}
    </button>
  );
}
