import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigator = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    e.target.reset();
    navigator(`/search?q=${query}`);
  };
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <i className="bi bi-film me-2"></i>MovieHunt
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/top">
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/popular">
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/upcoming">
                Upcoming
              </NavLink>
            </li>
          </ul>
          <form onSubmit={handleSearch}>
            <input
              className="form-control form-control-sm"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="query"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
