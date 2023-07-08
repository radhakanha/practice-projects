import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";
import MoviesList from "./components/MoviesList";
import MoviesWatched from "./components/MoviesWatched";
// import { tempMovieData, tempWatchedData } from "./assets/dummyData";
import Loader from "./UI/Loader";
import { useEffect, useState } from "react";
const APIKEY = "808f6538";
const fetchLocalWatchList = () => {
  const localWatchList = localStorage.getItem("watched");
  return JSON.parse(localWatchList);
};
function AppMyMovies() {
  const [movieData, setMovieData] = useState([]);
  const [watchedData, setWatchedData] = useState(fetchLocalWatchList);
  // const [selectedMovieInWatchList, setSelectedMovieInWatchlist] =
  //   useState(null);
  const [isLoading, setIsLoading] = useState({
    movieListLoading: false,
    selectedMovieLoading: false,
  });
  const [searchText, setSearchText] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  //function to fetchMovies on change in search text.
  useEffect(() => {
    setSelectedMovie(null);
    const controller = new AbortController();
    const fetchMovies = async () => {
      setIsLoading({ ...isLoading, movieListLoading: true });
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`,
        { signal: controller.signal }
      );
      // console.log(response);
      const data = await response.json();
      // console.log(data.Search);
      setMovieData(data.Search);
      setIsLoading({ ...isLoading, movieListLoading: false });
    };

    searchText.length >= 3 ? fetchMovies() : setMovieData([]);

    //Fixing the race condition using cleanup function that will..
    //..cancel the last fetch request on receiving a new search text
    return () => {
      controller.abort();
    };
  }, [searchText]);
  //To set watchedList in local browser store
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watchedData));
  }, [watchedData]);
  //Function to change to tab name when movie details load
  useEffect(() => {
    document.title = "Movies App";
  }, []);
  //When a movie is selected (clicked) from the list, after movies are fetched.
  const onSelectMovie = async (id) => {
    console.log(id);
    setIsLoading({ ...isLoading, selectedMovieLoading: true });

    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`
    );
    const data = await res.json();
    //If watchlist is empty
    const selectedMovieNotInWatchList = () => {
      setSelectedMovie({ ...data, watched: false });
    };
    if (watchedData.length === 0) {
      selectedMovieNotInWatchList();
    } else {
      //If watchlist is not empty

      const matchedData = watchedData.map((watchedMovie) => {
        if (watchedMovie.imdbID === data.imdbID) {
          // console.log("movie matches");
          setSelectedMovie({
            ...data,
            watched: true,
            userRating: watchedMovie.userRating,
          });
          return true;
        }
      });
      console.log(matchedData);
      !matchedData.includes(true) && selectedMovieNotInWatchList();
    }
    setIsLoading({ ...isLoading, selectedMovieLoading: false });
  };

  //When a movie is added to watched list
  const addWatchedMovie = (newWatchedMovie) => {
    setWatchedData([...watchedData, newWatchedMovie]);
    setSelectedMovie(null);
  };

  //To delete a movie from watchedlist
  const deleteWatchedMovie = (deleteID) => {
    const updatedWatchList = watchedData.filter((watchedMovie) => {
      return watchedMovie.imdbID !== deleteID;
    });
    setWatchedData(updatedWatchList);
  };

  //Render Data To Screen
  return (
    <div className="p-6 bg-zinc-900 h-screen w-9/10 mx-auto  ">
      <Header
        resultsCount={movieData && movieData.length}
        searchText={searchText}
        onSearch={setSearchText}
      ></Header>
      <div className="flex w-9/10 mx-auto gap-8 justify-around  ">
        {isLoading.movieListLoading ? (
          <Loader></Loader>
        ) : (
          <MoviesList
            movieData={movieData}
            onSelectMovie={onSelectMovie}
          ></MoviesList>
        )}
        {selectedMovie && isLoading.selectedMovieLoading && (
          <Loader></Loader>
        )}
        {selectedMovie && !isLoading.selectedMovieLoading && (
          <MovieDetails
            selectedMovie={selectedMovie}
            onExit={setSelectedMovie}
            onAddToWatchlist={addWatchedMovie}
          ></MovieDetails>
        )}
        {!selectedMovie && (
          <MoviesWatched
            watchedData={watchedData}
            onDelete={deleteWatchedMovie}
          ></MoviesWatched>
        )}
      </div>
    </div>
  );
}

export default AppMyMovies;
