import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MovieModal = ({ isOpen, onClose, movie }) => {
  console.log("selected Movie", movie);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center px-[25px]  z-50 bg-white bg-opacity-50 ">
      <div className=" ms-3 bg-black bg-opacity-80 pb-6 md:w-auto sm:[400px]   h-[auto] lg:w-[auto] text-white  rounded-lg shadow-md ">
        <button
          className=" items-center ms-2 text-red-500 text-[30px] py-2 hover:text-red-700 mt-4"
          onClick={onClose}
        >
          <AiOutlineCloseCircle />
        </button>
        <div className=" mx-3 flex justify-between align-middle items-center">
          <div className="">
            <h2 className=" ms-1 justify-between align-middle flex font-semibold ">
              Title
              <span className=" ms-[60px]   text-[20px]  font-semibold">
                {" "}
                : {movie.title}
              </span>
            </h2>
            <p>
              <span className=" ">Popularity</span>
              <span className="ms-6 text-[18px]   font-semibold">
                <span className=" text-[20px]  font-semibold me-2">:</span>
                {movie.popularity}
              </span>
            </p>
            <p>
              <span>Release Date</span>
              <span className="ms-1 text-[18px]   font-semibold">
                <span className=" text-[20px]  font-semibold me-2">:</span>
                {movie.release_date}
              </span>
            </p>
            <p>
              <span>Vote average</span>
              <span className="ms-1 text-[18px]   font-semibold">
                <span className=" text-[20px]  font-semibold me-2">:</span>
                {10 * movie.vote_average}%
              </span>
            </p>
            <p>
              <span>Vote count</span>
              <span className="ms-5 text-[18px]   font-semibold">
                <span className=" text-[20px]  font-semibold me-2">:</span>
                {movie.vote_count}
              </span>
            </p>
          </div>
          <img
            className="  ms-[10px] h-[250px]"
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            alt=""
          />
        </div>
        <p className="md:w-[400px] lg:w-[700px] me-2 mt-3 px-4 item-center mx-auto font-semibold ">
          <span className=" ms-4 ">Overview</span>

          <span className="ms-6 text-[18px]   font-semibold">
            <span className="  text-center   font-semibold text-[20px] me-2">
              :
            </span>
            {movie.overview}
          </span>
        </p>{" "}
        {/* Display other movie details here */}
      </div>
    </div>
  );
};

export default MovieModal;
