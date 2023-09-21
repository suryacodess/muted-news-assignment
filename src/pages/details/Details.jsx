import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../../utils/Apis";
import { hero_img_url } from "../../utils/constants";

export default function Details() {
  // state for movie details
  const [movieDetails, setMovieDetails] = useState([]);
  // fetching movie id
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getMovies("movie/" + id + "?language=en-US")
      .then((result) => {
        // storing movie details in movieDetails state
        setMovieDetails(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <section className="hero">
        <img
          className="h-[450px] w-full object-cover"
          src={hero_img_url + movieDetails?.backdrop_path}
          alt=""
        />
      </section>
      <main className="w-full px-5">
        <div className="max-w-[1200px] w-full mx-auto">
          <article className="py-10">
            <div className="heading flex justify-between items-start">
              <div className="title">
                <h1 className="text-3xl md:text-5xl italic">
                  {movieDetails?.title}
                </h1>
                <p className="mt-2 text-xl">{movieDetails?.tagline}</p>
              </div>
              <div className="rating flex items-center">
                <svg
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ipc-icon ipc-icon--star-inline"
                  viewBox="0 0 24 24"
                  fill="yellow"
                  role="presentation"
                >
                  <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                </svg>
                <p className="ml-1">
                  {movieDetails?.vote_average?.toString()?.slice(0, 3)}
                </p>
              </div>
            </div>
            <div className="overview mt-2">
              <p>{movieDetails?.overview}</p>
            </div>
            <div className="release-date">
              <p>{movieDetails?.release_date?.toString()?.slice(0, 4)}</p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
