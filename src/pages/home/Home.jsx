import React, { useEffect, useState } from "react";
import { getMovies } from "../../utils/Apis";
import Card from "../../components/card/Card";

export default function Home() {
  // state for movie lists
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // calling getMovies function to fetch movies
    // getMovies implementation found at constants file
    getMovies("movie/popular?language=en-US&page=1&limit=5")
      .then((result) => {
        console.log(result);
        // storing movie list results into the movie state
        setMovies(result.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    // Home page
    <main className="home w-full px-5">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-5 gap-5 py-20">
        {/* mapping the movie list using map function */}
        {movies.map((movie) => {
          return <Card movie={movie} key={movie.title} />;
        })}
      </div>
    </main>
  );
}
