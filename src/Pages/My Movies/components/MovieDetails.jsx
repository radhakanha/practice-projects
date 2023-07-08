import { useEffect } from "react";
import UserRatings from "./UserRatings";
function MovieDetails({ selectedMovie, onExit, onAddToWatchlist }) {
  const {
    Actors: actors,
    Plot: plot,
    Poster: poster,
    Title: title,
    Released: releaseDate,
    Runtime: runtime,
    Genre: genre,
    imdbID,
    imdbRating,
    Director: director,
    Year: year,
    watched,
    userRating,
  } = selectedMovie;
  const AddToListHandler = (userRating) => {
    const newWatchedMovieDetails = {
      imdbID,
      Title: title,
      year,
      Poster: poster,
      runtime: Number(runtime.split(" ")[0]),
      imdbRating: Number(imdbRating),
      userRating: Number(userRating),
    };
    onAddToWatchlist(newWatchedMovieDetails);
  };
  useEffect(() => {
    document.title = `Movie: ${title}`;
    // CleanUp Function:
    return () => {
      document.title = "Movies App";
    };
  }, [title]);
  return (
    <div className="rounded-lg w-1/2 h-[78vh] bg-slate-600 text-zinc-50 overflow-auto">
      {/* Movie Banner */}
      <div className="flex bg-slate-700 ">
        <img className="h-40" src={poster} alt={title}></img>
        <div className="p-4 pl-8 flex flex-col gap-2">
          <h2 className="text-xl font-bold tracking-wide">{title}</h2>
          <div className="flex gap-4 text-sm">
            <span>{releaseDate}</span>
            <span>{`${runtime}`}</span>
          </div>
          <p>{genre}</p>
          <p>{`⭐ ${imdbRating} IMDb rating`}</p>
        </div>
        <button
          className=" flex justify-center items-center h-6 w-6 rounded-full bg-black"
          onClick={() => onExit(null)}
        >
          <span className="text-xl font-extrabold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </span>
        </button>
      </div>

      <section className="p-6 m-8 mb-0 rounded-lg bg-slate-700">
        {watched ? (
          <p className="text-lg font-medium text-center tracking-wide">
            You rated this movie{" "}
            <span className="text-yellow-300 font-bold text-lg text ali">
              {userRating}⭐
            </span>{" "}
          </p>
        ) : (
          <UserRatings onAdd={AddToListHandler}></UserRatings>
        )}
      </section>
      {/* Movie Plot, Starring,Directed By  */}
      <div className="p-6">
        <p className=" italic mb-4">{plot}</p>
        <p className="mb-4 font-medium">{`Starring ${actors}`}</p>
        <p>{`Directed by ${director}`}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
