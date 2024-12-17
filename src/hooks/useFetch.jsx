import { useEffect } from "react";
import { useState } from "react";

export const useFetch = ({ apiPath, queryTerm = "" }) => {
  const [data, setData] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      setData(data.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
