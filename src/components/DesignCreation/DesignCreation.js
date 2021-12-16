import { useContext } from "react";
import { useNavigate, Navigate } from "react-router";

import "./DesignCreation.css";

import { AuthContext } from "../../contexts/AuthContext";
import { CreateDesign } from "../../services/designService";

export default function DesignCreation() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user.email) {
    return <Navigate to="/login" />
  }

  function onDesignCreate(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let title = formData.get("title");
    let text = formData.get("text");
    let description = formData.get("description");
    let mainImg = formData.get("mainImg");
    let imgCollection = formData.get("imgCollection");

    CreateDesign({
      title,
      text,
      description,
      mainImg,
      imgCollection,
      _ownerId: user._id,
    }, user.accessToken).then(() => {
      return navigate("/inspiration");
    });
  }

  return (
    <section className="designCreation-ctn">
      <article className="designCreation-card">
        <h2 className="designCreation-title">Express your self</h2>
        <form
          className="designCreation-form"
          onSubmit={onDesignCreate}
          method="POST"
        >
          <article className="designCreation-form-title-ctn">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="designCreation-form-title"
              placeholder="Color theory 101"
            />
          </article>

          <article className="designCreation-form-mainImg-ctn">
            <label htmlFor="mainImg">Main Image</label>
            <input
              type="text"
              name="mainImg"
              className="designCreation-form-mainImg"
              placeholder="https://image.png"
            />
          </article>

          <article className="designCreation-form-text-ctn">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              name="text"
              className="designCreation-form-text"
              placeholder="A better way to use colors in any type of design."
            />
          </article>

          <article className="designCreation-form-desc-ctn">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              className="designCreation-form-desc"
              placeholder="Colors influence the meaning of text, how users move around a particular layout, and what they feel as they do so."
            />
          </article>

          <article className="designCreation-form-imgCollection-ctn">
            <label htmlFor="imgCollection">Side Images</label>
            <input
              type="text"
              name="imgCollection"
              className="designCreation-form-imgCollection"
              placeholder="https://image.png, https://image.jpg"
            />
          </article>

          <article id="designCreation-form-submitBtn-ctn">
            <button id="designCreation-form-submitBtn">Create Design</button>
          </article>
        </form>
      </article>
    </section>
  );
}
