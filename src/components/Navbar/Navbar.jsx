import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-md container-fluid ">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style>
            {`
            button[aria-expanded='false'] > .close{
              display:none;
            }
            button[aria-expanded='true'] > .open{
              display:none;
            }
            .open, .close{
              font-size:1.2rem;
            }
          `}
          </style>
          {/* <span className="navbar-toggler-icon"></span> */}
          <span className="open fw-bold text-dark">&#8801;</span>
          <span className="close fw-bold text-dark"> &#10005;</span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={`nav-link {({ isActive }) =>
                  isActive ? "active" : ""}`}
                aria-current="page"
              >
                Charaters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/episodes" className="nav-link">
                Episode
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/location" className="nav-link">
                Location
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
