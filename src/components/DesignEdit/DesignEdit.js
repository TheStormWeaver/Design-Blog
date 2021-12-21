import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import "./DesignEdit.css";

import { AuthContext } from "../../contexts/AuthContext";
import { getOneDesign, UpdateDesign } from "../../services/designService";

export default function DesignEdit() {
  const [errors, setErrors] = useState({
    titleTxt: null,
    textTxt: null,
    mainImgTxt: null,
    descTxt: null,
  });
  const [isCorrect, setIsCorrect] = useState(true);
  const { designId } = useParams();
  const [design, setDesign] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getOneDesign(designId).then((result) => setDesign(result));
  }, [designId]);

  function onDesignEdit(e) {
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

    if (isCorrect) {
      UpdateDesign(
        design._id,
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
          likes: design.likes,
          _ownerId: user._id,
          _ownerName: user.email,
          _id: design._id,
        },
        user.accessToken
      ).then(() => {
        navigate("/inspiration");
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
        if (!value) {
          setErrors((state) => ({
            ...state,
            mainImgTxt: "Main Image is required",
          }));
          setIsCorrect(false);
        } else {
          setErrors((state) => ({ ...state, mainImgTxt: false }));
          setIsCorrect(true);
        }
        break;
      case "text":
        if (!value) {
          setErrors((state) => ({
            ...state,
            textTxt: "Introduction Text is required",
          }));
          setIsCorrect(false);
        } else {
          setErrors((state) => ({ ...state, textTxt: false }));
          setIsCorrect(true);
        }
        break;
      case "description":
        if (!value) {
          setErrors((state) => ({
            ...state,
            descTxt: "Description is required",
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
    <section className="designEdit-ctn">
      <article className="designEdit-card">
        <h2 className="designEdit-title">Edit your design</h2>
        <form className="designEdit-form" method="POST" onSubmit={onDesignEdit}>
          <section className="designEdit-form-row">
            <article
              className="designEdit-form-title-ctn"
              id={errors.titleTxt ? "wrongInput" : "correctInput"}
            >
              <label htmlFor="title">
                {errors.titleTxt ? errors.titleTxt : "Title"}
              </label>
              <input
                type="text"
                name="title"
                className="designEdit-form-title"
                defaultValue={design.title}
                onBlur={FormErrorVal}
              />
            </article>

            <article
              className="designEdit-form-mainImg-ctn"
              id={errors.mainImgTxt ? "wrongInput" : "correctInput"}
            >
              <label htmlFor="mainImg">
                {errors.mainImgTxt ? errors.mainImgTxt : "Main Image"}
              </label>
              <input
                type="text"
                name="mainImg"
                className="designEdit-form-mainImg"
                defaultValue={design.mainImg}
                onBlur={FormErrorVal}
              />
            </article>
          </section>

          <section className="designEdit-form-row">
            <article
              className="designEdit-form-text-ctn"
              id={errors.textTxt ? "wrongInput" : "correctInput"}
            >
              <label htmlFor="text">
                {errors.textTxt ? errors.textTxt : "Introduction Text"}
              </label>
              <textarea
                type="text"
                name="text"
                className="designEdit-form-text"
                defaultValue={design.text}
                onBlur={FormErrorVal}
              />
            </article>

            <article
              className="designEdit-form-desc-ctn"
              id={errors.descTxt ? "wrongInput" : "correctInput"}
            >
              <label htmlFor="description">
                {errors.descTxt ? errors.descTxt : "Main Description"}
              </label>
              <textarea
                type="text"
                name="description"
                className="designEdit-form-desc"
                defaultValue={design.description}
                onBlur={FormErrorVal}
              />
            </article>
          </section>

          <section className="designEdit-form-row">
            <h3 className="firstArticle-title">
              First Article Content (Optional)
            </h3>
            <article className="designEdit-form-art1-title-ctn">
              <label htmlFor="art1-title">First Article Title</label>
              <input
                type="text"
                name="art1-title"
                className="designEdit-form-art1-title"
                defaultValue={design.art1Title}
              />
            </article>

            <article className="designEdit-form-art1-img-ctn">
              <label htmlFor="art1-img">First Article Img</label>
              <input
                type="text"
                name="art1-img"
                className="designEdit-form-art1-img"
                defaultValue={design.art1Img}
              />
            </article>

            <article className="designEdit-form-art1-text-ctn">
              <label htmlFor="art2-text">First Article Text</label>
              <textarea
                type="text"
                name="art1-text"
                className="designEdit-form-art1-text"
                defaultValue={design.art1Text}
              />
            </article>
          </section>

          <section className="designEdit-form-row">
            <h3 className="secondArticle-title">
              Second Article Content (Optional)
            </h3>
            <article className="designEdit-form-art2-title-ctn">
              <label htmlFor="art2-title">Second Article Title</label>
              <input
                type="text"
                name="art2-title"
                className="designEdit-form-art2-title"
                defaultValue={design.art2Title}
              />
            </article>

            <article className="designEdit-form-art2-img-ctn">
              <label htmlFor="art2-img">Second Article Img</label>
              <input
                type="text"
                name="art2-img"
                className="designEdit-form-art2-img"
                defaultValue={design.art2Img}
              />
            </article>

            <article className="designEdit-form-art2-text-ctn">
              <label htmlFor="art2-text">Second Article Text</label>
              <textarea
                type="text"
                name="art2-text"
                className="designEdit-form-art2-text"
                defaultValue={design.art2Text}
              />
            </article>
          </section>

          <article id="designEdit-form-submitBtn-ctn">
            <button id="designEdit-form-submitBtn">Save Changes</button>
          </article>
        </form>
      </article>
    </section>
  );
}
