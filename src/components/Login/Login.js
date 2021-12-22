import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

import { AuthContext } from "../../contexts/AuthContext";
import { NotificationContext } from '../../contexts/NotificationContext';
import * as authService from "../../services/authService";

export default function Login() {
  const [errors, setErrors] = useState({ emailTxt: null, passTxt: null });
  const { addNotification } = useContext(NotificationContext);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function onLogin(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    authService.Login(email, password).then((data) => {
      if (data == "403") {
        addNotification("Username or password don't match")
      } else {
        loginUser(data);
        navigate("/");
      }
    });
  }

  function formErrorVal(e) {
    const { name, value } = e.target;
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;

    switch (name) {
      case "email":
        emailRegex.test(value)
          ? setErrors((state) => ({ ...state, emailTxt: false }))
          : setErrors((state) => ({
              ...state,
              emailTxt: "Email address is invalid",
            }));
        break;
      case "password":
        !value
          ? setErrors((state) => ({
              ...state,
              passTxt: "Password is required",
            }))
          : setErrors((state) => ({ ...state, passTxt: false }));
        break;
      default:
        break;
    }
  }

  return (
    <section className="login-card-container">
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
              onBlur={formErrorVal}
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
              onBlur={formErrorVal}
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
