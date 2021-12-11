import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  function onLogin(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    authService.Login(email, password).then((data) => {
      loginUser(data);
      navigate("/");
    });
  }

  return (
    <section className="login-card-container">
      <article className="login-card">
        <h2 className="login-title">Login</h2>

        <form className="login-form" onSubmit={onLogin} method="POST">
          <article id="login-form-email-ctn">
            <i className="fas fa-user"></i>
            <input
              type="email"
              name="email"
              id="login-form-email"
              placeholder="Email Address"
            />
          </article>

          <article id="login-form-password-ctn">
            <input
              type="password"
              name="password"
              id="login-form-password"
              placeholder="Password"
            />
            <label htmlFor="password"><i className="fas fa-lock"></i></label>
          </article>

          <article id="login-form-button-container">
            <button type="submit" className="login-form-submitBtn">
              Login
            </button>
          </article>
        </form>

        <p className="login-register-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </article>
    </section>
  );
}
