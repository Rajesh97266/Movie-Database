import { Link } from "react-router-dom";
import BackupImage from "../assets/backupImage.jpg";

export const Card = ({movie}) => {
  const { title, overview,  poster_path, vote_average, vote_count } = movie;
  return (
    <div className="col">
      <div className="card shadow-sm" title={title}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : BackupImage
          }
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <p className="card-text">
            {overview.length > 100
              ? overview.substring(0, 100) + "..."
              : overview}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <Link
              to={`/movie/${movie.id}`}
              className="btn btn-outline-primary btn-sm stretched-link"
            >
              Read More
            </Link>
            <small>
              <i className="bi bi-star-fill text-warning"></i> {vote_average} |{" "}
              {vote_count} reviews
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
