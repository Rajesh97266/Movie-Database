import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { data: movies } = useFetch({
    apiPath: "search/movie",
    queryTerm: query,
  });

  useEffect(() => {
    document.title = `Search | ${query}`;
  }, []);
  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom">
        {movies.length === 0
          ? `No Results Found for "${query}"`
          : `Search Results`}
      </h5>
      <div className="row row-cols-1  row-cols-md-2 row-cols-lg-3 g-3 py-3">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};
