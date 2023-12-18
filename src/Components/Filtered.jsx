import React, { useEffect } from 'react'

const Filtered = ({
  popular,
  filter,
  setFilter,
  activeGenre,
  setActiveGenre,
}) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFilter(popular)
      return
    }
    const filterMovie = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre),
    )
    setFilter(filterMovie)
  }, [activeGenre])
  console.log(activeGenre)
  return (
    <div
      className="  h-[30px] mt-4 flex flex-wrap justify-center "
      role="group"
    >
      <button
        onClick={() => setActiveGenre(0)}
        className=" font-extrabold border-[1px] border-white focus:bg-white hover:opacity-70 focus:text-black  px-3  bg-black text-white"
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className=" font-extrabold border-[1px] border-white focus:bg-white hover:opacity-80 focus:text-black  px-3  bg-black text-white"
      >
        Action
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className=" font-extrabold border-[1px] border-white focus:bg-white hover:opacity-80 focus:text-black  px-3  bg-black text-white"
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(27)}
        className=" font-extrabold border-[1px] border-white focus:bg-white hover:opacity-80 focus:text-black  px-3  bg-black text-white"
      >
        Horror
      </button>
      <button
        onClick={() => setActiveGenre(18)}
        className=" font-extrabold border-[1px] border-white focus:bg-white hover:opacity-80 focus:text-black  px-3  bg-black text-white"
      >
        Drama
      </button>
      <button
        onClick={() => setActiveGenre(16)}
        className=" font-extrabold border-[1px] border-white focus:bg-white hover:opacity-80 focus:text-black  px-3  bg-black text-white"
      >
        Animation
      </button>
      <button
        onClick={() => setActiveGenre(14)}
        className=" font-extrabold border-[1px] border-white focus:bg-white hover:opacity-80 focus:text-black  px-3  bg-black text-white"
      >
        Fantasy
      </button>
      <button
        onClick={() => setActiveGenre(10751)}
        className=" font-extrabold border-[1px] border-white focus:bg-white hover:opacity-80 focus:text-black  px-3  bg-black text-white"
      >
        Family
      </button>
    </div>
  )
}

export default Filtered
