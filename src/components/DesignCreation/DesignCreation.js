import { useContext, useState } from "react";
import { useNavigate } from "react-router";

import "./DesignCreation.css";

import { AuthContext } from "../../contexts/AuthContext";
import { CreateDesign } from "../../services/designService";

export default function DesignCreation() {
  const [errors, setErrors] = useState({
    titleTxt: null,
    textTxt: null,
    mainImgTxt: null,
    descTxt: null,
  });
  const [isCorrect, setIsCorrect] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  function onDesignCreate(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let title = formData.get("title");
    let text = formData.get("text");
    let description = formData.get("description");
    let mainImg = formData.get("mainImg");
    let art1Title = formData.get("art1-title");
    let art1Text = formData.get("art1-text");
    let art1Img = formData.get("art1-img");
    let art2Title = formData.get("art2-title");
    let art2Text = formData.get("art2-text");
    let art2Img = formData.get("art2-img");
    console.log(isCorrect);
    if (isCorrect) {
      CreateDesign(
        {
          title,
          text,
          description,
          mainImg,
          art1Title,
          art1Text,
          art1Img,
          art2Title,
          art2Text,
          art2Img,
          _ownerId: user._id,
          _ownerName: user.email,
        },
        user.accessToken
      ).then(() => {
        return navigate("/inspiration");
      });
    }
  }

  function FormErrorVal(e) {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        if (!value) {
          setErrors((state) => ({
            ...state,
            titleTxt: "Title is required",
          }));
          setIsCorrect(false);
        } else {
          setErrors((state) => ({ ...state, titleTxt: false }));
          setIsCorrect(true);
        }
        break;
      case "mainImg":
        let imgRegex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi;
        if (!imgRegex.test(value)) {
          setErrors((state) => ({
            ...state,
            mainImgTxt: "Main Image URL is invalid",
          }));
          setIsCorrect(false);
        } else {
          setErrors((state) => ({ ...state, mainImgTxt: false }));
          setIsCorrect(true);
        }
        break;
      case "text":
        if (value.length < 5) {
          setErrors((state) => ({
            ...state,
            textTxt: "Introduction Text must be at least 5 characters long",
          }));
          setIsCorrect(false);
        } else {
          setErrors((state) => ({ ...state, textTxt: false }));
          setIsCorrect(true);
        }
        break;
      case "description":
        if (value.length < 10) {
          setErrors((state) => ({
            ...state,
            descTxt: "Description must be at least 10 characters long",
          }));
          setIsCorrect(false);
        } else {
          setErrors((state) => ({ ...state, descTxt: false }));
          setIsCorrect(true);
        }
        break;
      default:
        break;
    }
  }

  return (
    <section className="designCreation-ctn">
      <article className="designCreation-card">
        <h2 className="designCreation-title">Create your design</h2>
        <form
          className="designCreation-form"
          onSubmit={onDesignCreate}
          method="POST"
        >
          <section className="designCreation-form-row">
            <article
              className="designCreation-form-title-ctn"
              id={errors.titleTxt ? "wrongInput" : "correctInput"}
            >
              <label htmlFor="title">
                {errors.titleTxt ? errors.titleTxt : "Title"}
              </label>
              <input
                type="text"
                name="title"
                className="designCreation-form-title"
                placeholder="Color theory"
                onBlur={FormErrorVal}
              />
            </article>

            <article
              className="designCreation-form-mainImg-ctn"
              id={errors.mainImgTxt ? "wrongInput" : "correctInput"}
            >
              <label htmlFor="mainImg">
                {errors.mainImgTxt ? errors.mainImgTxt : "Main Image"}
              </label>
              <input
                type="text"
                name="mainImg"
                className="designCreation-form-mainImg"
                placeholder="https://image.png"
                onBlur={FormErrorVal}
              />
            </article>
          </section>

          <section className="designCreation-form-row">
            <article
              className="designCreation-form-text-ctn"
              id={errors.textTxt ? "wrongInput" : "correctInput"}
            >
              <label htmlFor="text">
                {errors.textTxt ? errors.textTxt : "Introduction Text"}
              </label>
              <textarea
                type="text"
                name="text"
                className="designCreation-form-text"
                placeholder="The importance of color theory and choosing colors"
                onBlur={FormErrorVal}
              />
            </article>

            <article
              className="designCreation-form-desc-ctn"
              id={errors.descTxt ? "wrongInput" : "correctInput"}
            >
              <label htmlFor="description">
                {errors.descTxt ? errors.descTxt : "Main Description"}
              </label>
              <textarea
                type="text"
                name="description"
                className="designCreation-form-desc"
                placeholder="Color theory is important because of its influence on design"
                onBlur={FormErrorVal}
              />
            </article>
          </section>

          <section className="designCreation-form-row">
            <h3 className="firstArticle-title">
              First Article Content (Optional)
            </h3>
            <article className="designCreation-form-art1-title-ctn">
              <label htmlFor="art1-title">First Article Title</label>
              <input
                type="text"
                name="art1-title"
                className="designCreation-form-art1-title"
                placeholder="Good practices in color theory"
              />
            </article>

            <article className="designCreation-form-art1-img-ctn">
              <label htmlFor="art1-img">First Article Image</label>
              <input
                type="text"
                name="art1-img"
                className="designCreation-form-art1-img"
                placeholder="https://image.png"
              />
            </article>

            <article className="designCreation-form-art1-text-ctn">
              <label htmlFor="art1-text">First Article Text</label>
              <textarea
                type="text"
                name="art1-text"
                className="designCreation-form-art1-text"
                placeholder="Different colors mean different emotions"
              />
            </article>
          </section>

          <section className="designCreation-form-row">
            <h3 className="secondArticle-title">
              Second Article Content (Optional)
            </h3>
            <article className="designCreation-form-art2-title-ctn">
              <label htmlFor="art2-title">Second Article Title</label>
              <input
                type="text"
                name="art2-title"
                className="designCreation-form-art2-title"
                placeholder="New way to use colors"
              />
            </article>

            <article className="designCreation-form-art2-img-ctn">
              <label htmlFor="art2-img">Second Article Image</label>
              <input
                type="text"
                name="art2-img"
                className="designCreation-form-art2-img"
                placeholder="https://image.png"
              />
            </article>

            <article className="designCreation-form-art2-text-ctn">
              <label htmlFor="art2-text">Second Article Text</label>
              <textarea
                type="text"
                name="art2-text"
                className="designCreation-form-art2-text"
                placeholder="The choice of colors comes from the direction of the design"
              />
            </article>
          </section>

          <article id="designCreation-form-submitBtn-ctn">
            <button id="designCreation-form-submitBtn">Create Design</button>
          </article>
        </form>
      </article>
    </section>
  );
}
