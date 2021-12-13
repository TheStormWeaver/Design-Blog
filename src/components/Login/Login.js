import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

import ErrorModal from "../Common/ErrorModal";

import "./Login.css";

export default function Login() {
  const [errors, setErrors] = useState({ emailTxt: null, passTxt: null });
  const [showError, setShowError] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function onLogin(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    authService.Login(email, password).then((data) => {
      console.log(data);
      if (data.code == "403") {
        setShowError(true);
      } else {
        loginUser(data);
        navigate("/");
      }
    });
  }

  const onClose = (e) => {
    e.preventDefault();

    setShowError(false);
  };

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

  return (
    <section className="login-card-container">
      <ErrorModal show={showError} onClose={onClose}/>

      <article className="login-card">
        <h2 className="login-title">Login</h2>

        <form className="login-form" onSubmit={onLogin} method="POST">
          <article className="login-form-email-ctn">
            <i className="fas fa-user"></i>
            <input
              type="email"
              name="email"
              className="login-form-email"
              placeholder="Email Address"
              onBlur={emailBlurHandler}
              id={errors.emailTxt ? "redInput" : "normalInput"}
            />
            <p className={errors.emailTxt ? "error" : "hidden"}>
              {errors.emailTxt}
            </p>
          </article>

          <article className="login-form-password-ctn">
            <input
              type="password"
              name="password"
              className="login-form-password"
              placeholder="Password"
              onBlur={passBlurHandler}
              id={errors.passTxt ? "redInput" : "normalInput"}
            />
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
            </label>
            <p className={errors.passTxt ? "error" : "hidden"}>
              {errors.passTxt}
            </p>
          </article>

          <article className="login-form-button-container">
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
