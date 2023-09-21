import React, { useEffect } from "react";
import { poster_path } from "../../utils/constants";
import { Link } from "react-router-dom";
import { getMovies } from "../../utils/Apis";

export default function Card(props) {
  return (
    // movie card component
    <Link to={"moviesinfo/" + props.movie.id}>
      <div className="card overflow-hidden cursor-pointer">
        <div className="img ">
          <img
            className="w-full object-cover hover:scale-105"
            style={{ transition: "all 0.6s ease" }}
            src={poster_path + props?.movie?.poster_path}
            alt={props?.movie?.title}
          />
        </div>
      </div>
    </Link>
  );
}
