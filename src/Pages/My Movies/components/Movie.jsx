function Movie({ movie, watched, onDelete, onSelectMovie }) {
  const {
    imdbID: id,
    Title: title,
    Year: year,
    Poster: poster,
  } = movie;

  return (
    <>
      <div
        onClick={() => !watched && onSelectMovie(id)}
        className="flex gap-8 text-zinc-200 px-8 py-4 items-center border-b cursor-pointer  hover:bg-zinc-700 last:border-none"
      >
        <div className="w-16">
          <img src={poster} alt={title}></img>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2 tracking-wide">
            {title}
          </h3>
          <div className="flex gap-4 items-center">
            {!watched && (
              <span className="text-base">{`📆 ${year}`}</span>
            )}
            <span className="text-base">
              {movie.imdbRating && `⭐ ${movie.imdbRating}`}
            </span>
            <span className="text-base">
              {" "}
              {movie.userRating && `🤩 ${movie.userRating}`}
            </span>
            <span className="text-base">
              {movie.runtime && `⌚ ${movie.runtime} min`}{" "}
            </span>
            {watched && (
              <button
                className="bg-gray-700 w-8 h-8 text-sm rounded-full text-center hover:bg-zinc-100 "
                onClick={() => {
                  onDelete(id);
                }}
              >
                ❌
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
