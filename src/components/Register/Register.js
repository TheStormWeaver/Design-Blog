import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

import "./Register.css";

export default function Register() {
  const [errors, setErrors] = useState({
    emailTxt: null,
    passTxt: null,
    rePassTxt: null,
  });
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function onRegister(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");
    let rePassword = formData.get("rePassword");

    authService.Register(email, password).then((data) => {
      loginUser(data);
      navigate("/");
    });
  }

  function emailBlurHandler(e) {
    let email = e.target.value;
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;

    if (!email.match(emailRegex)) {
      setErrors((state) => ({
        ...state,
        emailTxt: "The email must be valid",
      }));
    } else {
      setErrors((state) => ({ ...state, emailTxt: false }));
    }
  }

  function passBlurHandler(e) {
    let pass = e.target.value;

    if (pass.length < 3) {
      setErrors((state) => ({
        ...state,
        passTxt: "Password must be over 3 characters",
      }));
    } else {
      setErrors((state) => ({ ...state, passTxt: false }));
    }
  }

  function rePassBlurHandler(e) {
    let rePass = e.target.value;

    if (!rePass) {
      setErrors((state) => ({
        ...state,
        rePassTxt: "Repeat Password is required",
      }));
    } else {
      setErrors((state) => ({ ...state, rePassTxt: false }));
    }
  }

  return (
    <section id="register-card-container">
      <article className="register-card">
        <form className="register-form" onSubmit={onRegister} method="POST">
          <h2 className="register-form-title">Register</h2>
          <article id="register-form-email-ctn">
            <i className="fas fa-user"></i>
            <input
              type="email"
              name="email"
              id="register-form-email"
              placeholder="Email Address"
              onBlur={emailBlurHandler}
            />
            <p className={errors.emailTxt ? "error" : "hidden"}>
              {errors.emailTxt}
            </p>
          </article>

          <article id="register-form-password-ctn">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              id="register-form-password"
              placeholder="Password"
              onBlur={passBlurHandler}
            />
            <p className={errors.passTxt ? "error" : "hidden"}>
              {errors.passTxt}
            </p>
          </article>

          <article id="register-form-rePassword-ctn">
            <i className="fas fa-check-circle"></i>
            <input
              type="password"
              name="rePassword"
              id="register-form-rePassword"
              placeholder="Repeat Password"
              onBlur={rePassBlurHandler}
            />
            <p className={errors.rePassTxt ? "error" : "hidden"}>
              {errors.rePassTxt}
            </p>
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
