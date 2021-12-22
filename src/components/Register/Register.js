import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Register.css";

import { AuthContext } from "../../contexts/AuthContext";
import { NotificationContext } from "../../contexts/NotificationContext";
import * as authService from "../../services/authService";

export default function Register() {
  const [errors, setErrors] = useState({
    emailTxt: null,
    passTxt: null,
    rePassTxt: null,
  });
  const [isCorrect, setIsCorrect] = useState(true);
  const { addNotification } = useContext(NotificationContext);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function onRegister(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");
    let rePassword = formData.get("rePassword");

    if (password != rePassword) {
      setErrors((state) => ({
        ...state,
        rePassTxt: "Passwords do not match",
      }));
      return;
    }

    if (isCorrect) {
      authService.Register(email, password).then((data) => {
        if (data == "409") {
          addNotification("User already exists");
        } else if (data == "400") {
          throw data;
        } else {
          loginUser(data);
          navigate("/");
        }
      });
    }
  }

  function FormErrorVal(e) {
    const { name, value } = e.target;
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;

    switch (name) {
      case "email":
        if (emailRegex.test(value)) {
          setErrors((state) => ({ ...state, emailTxt: false }));
          setIsCorrect(true);
        } else {
          setErrors((state) => ({
            ...state,
            emailTxt: "Email address is invalid",
          }));
          setIsCorrect(false);
        }
        break;
      case "password":
        value.length < 3
          ? setErrors((state) => ({
              ...state,
              passTxt: "Must be at least 3 characters",
            }))
          : setErrors((state) => ({ ...state, passTxt: false }));
        break;
      case "rePassword":
        !value
          ? setErrors((state) => ({
              ...state,
              rePassTxt: "Repeat password is required",
            }))
          : setErrors((state) => ({ ...state, rePassTxt: false }));
        break;
      default:
        break;
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
              onBlur={FormErrorVal}
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
              onBlur={FormErrorVal}
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
              onBlur={FormErrorVal}
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
