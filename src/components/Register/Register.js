import { Link } from "react-router-dom";

import "./Register.css";

export default function Register() {
  return (
    <section id="register-card-container">
      <article className="register-card">
        <form className="register-form">
          <h2 className="register-form-title">Register</h2>
          <article id="register-form-email-ctn">
            <i className="fas fa-user"></i>
            <input
              type="email"
              name="email"
              id="register-form-email"
              placeholder="Email Address"
            />
          </article>

          <article id="register-form-password-ctn">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              id="register-form-password"
              placeholder="Password"
            />
          </article>

          <article id="register-form-rePassword-ctn">
          <i className="fas fa-check-circle"></i>
            <input
              type="password"
              name="rePassword"
              id="register-form-rePassword"
              placeholder="Repeat Password"
            />
          </article>

          <article id="register-form-button-container">
            <button type="submit" className="register-form-submitBtn">
              Sign Up
            </button>
          </article>

          <p className="register-register-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </article>

      <article className="register-image-holder"></article>
    </section>
  );
}
