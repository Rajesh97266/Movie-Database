import { Link } from "react-router-dom";
import NotFound from "../assets/Not Found.jpg";

export const PageNotFound = () => {
  return (
    <div className="container">
      <img src={NotFound} alt="Not Found" className="img-fluid" />
      <p className="text-danger text-center mt-2">
        <Link to="/" className="btn btn-danger">
          Go To Home Page
        </Link>
      </p>
    </div>
  );
};
