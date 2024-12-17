import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackupImage from "../assets/backupImage.jpg";
import { convertMinutes } from "../utils/utils";
export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const data = await response.json();

      setMovie(data);
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movie) {
      document.title = movie.title || "Movie Details";
    }
  }, [movie]);

  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : BackupImage
            }
            alt={movie.title}
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{movie.title}</h3>
          <p className="mt-3 text-secondary">
            {movie.overview || "No overview available."}
          </p>
          {movie.genres && movie.genres.length > 0 ? (
            <div className="d-flex flex-wrap gap-2 mt-3">
              {movie.genres.map((genre) => (
                <button
                  key={genre.id}
                  className="btn btn-outline-primary btn-sm"
                >
                  {genre.name}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-muted">No genres available.</p>
          )}

          <p className="mt-2">
            <i className="bi bi-star-fill text-warning"></i>{" "}
            {movie.vote_average} |{" "}
            <i className="bi bi-people-fill text-success"></i>{" "}
            {movie.vote_count} reviews
          </p>
          <table className="table table-bordered w-[80] mt-2">
            <tbody>
              <tr>
                <th>Release Date:</th>
                <td>{movie.release_date}</td>
              </tr>
              <tr>
                <th>Revenue:</th>
                <td>${movie.revenue}</td>
              </tr>
              <tr>
                <th>Runtime:</th>
                <td>{convertMinutes(movie.runtime)}</td>
              </tr>
              <tr>
                <th>Budget:</th>
                <td>${movie.budget}</td>
              </tr>
            </tbody>
          </table>
          <a
            className="btn btn-warning"
            target="_blank"
            href={`https://www.imdb.com/title/${movie.imdb_id}`}
          >
            View in IMDB
          </a>
        </div>
      </div>
    </main>
  );
};
