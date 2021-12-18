import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

import ErrorModal from "../Common/ErrorModal";

import "./Register.css";

export default function Register() {
  const [errors, setErrors] = useState({
    emailTxt: null,
    passTxt: null,
    rePassTxt: null,
  });
  const [showError, setShowError] = useState(false);
  const [text, setText] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  let isCorrect = true;

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
      isCorrect = false;
    }
    
    if (isCorrect) {
      authService.Register(email, password).then((data) => {
        if (data == "409") {
          setText("User already exists")
          setShowError(true);
        } else if (data == "400") {
          throw data;
        } else {
          loginUser(data);
          navigate("/");
        }
      });
    }
  }

  const onClose = () => {
    setShowError(false);
  };

  function formValChange(e) {
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
        value.length < 1
          ? setErrors((state) => ({
              ...state,
              passTxt: "Password is required",
            }))
          : setErrors((state) => ({ ...state, passTxt: false }));
        break;
      case "rePassword":
        value < 1
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
      <ErrorModal
        show={showError}
        onClose={onClose}
        message={text}
      />
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
              onBlur={formValChange}
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
              onBlur={formValChange}
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
              onBlur={formValChange}
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
