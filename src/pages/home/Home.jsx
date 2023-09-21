import React, { useEffect, useState } from "react";
import { getMovies } from "../../utils/Apis";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";

export default function Home() {
  // state for movie lists
  const [movies, setMovies] = useState([]);
  // state for movie lists page
  const [page, setPage] = useState(1); // default page - 1
  // state for loader
  const [loader, setLoader] = useState(true); // defalut - true

  useEffect(() => {
    // calling getMovies function to fetch movies
    // getMovies implementation found at constants file
    setTimeout(() => {
      getMovies(`movie/top_rated?page=${page}`)
        .then((result) => {
          // setting loader false
          setLoader(false);
          // storing previous and next movie list results into the movie state
          setMovies((prev) => [...prev, ...result.results]);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1100);
  }, [page]);

  // functionality for infinite scroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoader(true);
      // updating movie list page
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    // this event will execute on scroll
    window.addEventListener("scroll", handleScroll);

    // clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Home page
    <main className="home w-full px-5">
      {movies.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="max-w-[1400px] w-full mx-auto grid grid-cols-5 gap-5 py-20">
            {/* mapping the movie list using map function */}
            {movies?.map((movie) => {
              return (
                <Card
                  movie={movie}
                  key={Math.random().toString().slice(2, 6)}
                />
              );
            })}
          </div>
          <div>{loader === true ? <Loader /> : " "}</div>
        </>
      )}
    </main>
  );
}
