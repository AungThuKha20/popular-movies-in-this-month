import React from 'react'

const Movie = ({ item, onClick }) => {
  return (
    <button className="" onClick={() => onClick(item)}>
      <div className=" animate__animated animate__flipInX" >
        <p className="text-xs font-bold">{item.title.substring(0, 20)}</p>
        <img
          className=" hover:opacity-80"
          src={'https://image.tmdb.org/t/p/w300' + item.backdrop_path}
          alt=""
        />
      </div>
    </button>
  )
}
export default Movie
