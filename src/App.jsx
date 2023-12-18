import React, { useEffect, useState } from "react";
import "animate.css";
import Movie from "./Components/Movie";
import Filtered from "./Components/Filtered";
import MovieModal from "./Components/MovieModal"; // Import the MovieModal component

const App = () => {
  const [popular, setPopular] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [isMovieVisible, setisMovieVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null); // Store the selected movie

  const toggleContent = () => {
    setisMovieVisible(!isMovieVisible);
  };

  const openModal = (movie) => {
    setSelectedMovie(movie); // Set the selected movie when opening the modal
  };

  const closeModal = () => {
    setSelectedMovie(null); // Clear the selected movie when closing the modal
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const api = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b1ae0eee69d0da84f5106587befce2d0&language=en-US&page=1"
    );
    const { results } = await api.json();
    setPopular(results);
    setFilter(results);
    console.log(popular);
  };

  return (
    <>
      {!isMovieVisible && (
        <div className="flex-col items-center mt-[400px]">
          <div className="animate__animated animate__fadeInTopLeft animate__delay-1s text-[25px] font-sans font-bold text-center">
            THE MOST POPULAR
            <span className="font-serif text-[40px] text-sky-800"> 20 </span>
            MOVIES FOR THIS MONTH
          </div>
          <div>
            <img
              className=" animate__animated animate__zoomInDown mt-[-80px]   mx-auto w-[600px]"
              src="./src/Pop's_Movie Dungeon.webp"
              alt=""
            />
          </div>
          <div className=" mt-[-50px] animate__animated animate__fadeInBottomRight animate__delay-1s text-center">
            <button
              onClick={toggleContent}
              className="text-white  shadow-sky-900 shadow-lg hover:mt-1
               rounded-lg px-4 py-2 font-extrabold bg-cyan-900"
              id="toggleButton"
            >
              View
            </button>
          </div>
        </div>
      )}
      <div className={`${isMovieVisible ? "" : "hidden"}`}>
        <Filtered
          filter={filter}
          setFilter={setFilter}
          popular={popular}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <div className="mt-[50px] mb-5 flex flex-wrap gap-10 justify-center align-middle">
          {filter?.map((item) => (
            <Movie key={item.id} item={item} onClick={() => openModal(item)} />
          ))}
        </div>
      </div>

      <MovieModal
        isOpen={selectedMovie} // Show modal when not in movie list view and a movie is selected
        onClose={closeModal}
        movie={selectedMovie}
      />
    </>
  );
};

export default App;
