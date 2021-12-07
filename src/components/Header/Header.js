import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  let userNav = (
    <>
      <li className="navbar-list-item">
        <Link to="/create">Create Designs</Link>
      </li>

      <li className="navbar-list-item">
        <Link to="/logout">Logout</Link>
      </li>
    </>
  );

  let guestNav = (
    <>
      <li className="navbar-list-item">
        <Link to="/register">Register</Link>
      </li>
      <li className="navbar-list-item">
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <header id="site-header">
      <nav className="navbar">
        <article className="navbar-logo">
          <Link to="/">
            <img src="./images/logo.png" alt="logo" />
          </Link>
        </article>

        <ul className="navbar-list">
          <li className="navbar-list-item">
            <Link to="/about">About us</Link>
          </li>

          <li className="navbar-list-item">
            <Link to="/inspiration">Inspiration</Link>
          </li>

          {userNav}
        </ul>
      </nav>
    </header>
  );
}
