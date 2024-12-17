export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i className="bi bi-film me-2"></i>MovieHunt
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Top Rated
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Popular
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Upcoming
              </a>
            </li>
          </ul>
          <form>
            <input
              className="form-control form-control-sm"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
