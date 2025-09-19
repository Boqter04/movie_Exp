import Image from "next/image";
import { getUserProfile } from "../actions/user_action";

export default async function ProfilePage() {
  const userId = 2; // ✅ Example user from your DB
  const user = await getUserProfile(userId);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold">User not found</h2>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      {/* User Info */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-2">{user.name || "Unnamed User"}</h1>
        <p className="text-lg text-gray-500">{user.email}</p>
      </div>

      {/* Favorites */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Favorite Movies</h2>

      {user.favorites.length === 0 ? (
        <p className="text-gray-500">You don’t have any favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {user.favorites.map((fav) => {
            const movie = fav.movie;
            const poster =
              movie.posterUrl ||
              (movie.posterPath
                ? `https://image.tmdb.org/t/p/w500${movie.posterPath}`
                : "/placeholder.jpg");

            return (
              <div key={movie.id} className="group">
                <Image
                  src={poster}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="rounded-xl shadow-lg group-hover:opacity-80 transition"
                />
                <h3 className="mt-2 text-lg font-semibold text-center">
                  {movie.title}
                </h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
