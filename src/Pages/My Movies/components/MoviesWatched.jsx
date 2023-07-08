import Movie from "./Movie";

function MoviesWatched({ watchedData, onDelete }) {
  const averageImdbRating = watchedData.reduce(
    (acc, movie, index) => {
      return (acc = (acc * index + movie.imdbRating) / (index + 1));
    },
    0
  );
  const averageUserRating = watchedData.reduce(
    (acc, movie, index) => {
      return (acc = (acc * index + movie.userRating) / (index + 1));
    },
    0
  );
  const totalWatchedTime = watchedData.reduce((acc, movie) => {
    return (acc = acc + movie.runtime);
  }, 0);

  return (
    <div className="rounded-lg w-1/2 max-h-[78vh] bg-slate-600 text-zinc-50 overflow-auto">
      {/* Movie Summary */}
      <div id="movie-summary" className="p-6 rounded-lg shadow-md ">
        <h3 className=" uppercase text-lg font-semibold">
          movies you watched
        </h3>
        <div className="flex gap-4 mt-2">
          <span>🎦 {watchedData.length} movies</span>
          <span>⭐ {averageImdbRating.toFixed(1)}</span>
          <span>🤩 {averageUserRating.toFixed(1)}</span>
          <span>⌚ {totalWatchedTime} mins</span>
        </div>
      </div>
      {/* Watched Movies List  */}
      <div>
        {watchedData.map((watchedMovie) => {
          return (
            <Movie
              key={watchedMovie.imdbID}
              movie={watchedMovie}
              watched={true}
              onDelete={onDelete}
            ></Movie>
          );
        })}
      </div>
    </div>
  );
}

export default MoviesWatched;
