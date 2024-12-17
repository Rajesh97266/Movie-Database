import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";



export const MovieList = ({ title , apiPath}) => {
  const { data: movies } = useFetch({ apiPath });
  useEffect(() => {
    document.title = title;
  });

  const navigator = useNavigate();
  return (
    <div>
      <main className="container">
        {title == "Your Guide to Popular Movies" ? (
          <div className="bg-body-tertiary p-3 border mb-5 ">
            <h3 className="text-primary">Welcome to MovieHunt</h3>
            <p className="  text-secondary">
              The best place to find your favorite movies
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigator("/movies/upcoming")}
            >
              Explore Now
            </button>
          </div>
        ) : (
          ""
        )}
        <h5 className="text-danger py-2 border-bottom">{title}</h5>
        <div className="row row-cols-1  row-cols-md-2 row-cols-lg-3 g-3 py-3">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))} 
        </div>
      </main>
    </div>
  );
};
