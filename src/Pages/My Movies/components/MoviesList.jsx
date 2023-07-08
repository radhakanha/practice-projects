import { useState } from "react";
import Movie from "./Movie";

function MoviesList({ movieData, onSelectMovie }) {
  // console.log(movieData);
  // console.log(typeof movieData);
  const [showMovieList, setShowMovieList] = useState(true);
  return (
    <div className="bg-zinc-800 w-2/5 h-[78vh] rounded-xl py-2 overflow-auto">
      <button
        className="bg-zinc-50 w-5 h-5 flex justify-center items-center font-bold "
        onClick={() => setShowMovieList(!showMovieList)}
      >
        <span>{showMovieList ? "--" : "+"}</span>
      </button>
      {showMovieList &&
        movieData &&
        movieData.map((movie) => {
          return (
            <Movie
              key={movie.imdbID}
              movie={movie}
              onSelectMovie={onSelectMovie}
            >
              {" "}
            </Movie>
          );
        })}
    </div>
  );
}

export default MoviesList;
