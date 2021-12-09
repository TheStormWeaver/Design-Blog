import { Link } from "react-router-dom";

import "./Login.css";

export default function Login() {
  return (
    <section className="login-card-container">
      <article className="login-card">
        <h2 className="login-title">Login</h2>

        <form className="login-form">
          <article id="login-form-email-ctn">
          <i class="fas fa-user"></i>
            <input
              type="email"
              name="email"
              id="login-form-email"
              placeholder="Email Address"
            />
          </article>

          <article id="login-form-password-ctn">
          <i class="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              id="login-form-password"
              placeholder="Password"
            />
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
