const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDUzN2MzM2FhMWJiYTkyZDU0NjJiMmNhY2FkNjIyNyIsInN1YiI6IjY0YzRhZmFmOTVjZTI0MDExZTU4ODZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HZK7CcIr7WQnvZAkCxAKeRnFKhH6oCd1082f0imahpw",
  },
};

export const getMovies = async (url) => {
  const fetchData = await fetch(baseUrl + url, options);
  const response = await fetchData.json();
  return response;
};
