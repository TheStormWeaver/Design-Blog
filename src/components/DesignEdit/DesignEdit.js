import { useContext } from "react";
import { Navigate } from "react-router";

import "./DesignEdit.css";

import { AuthContext } from "../../contexts/AuthContext";

export default function DesignEdit() {
  const { user } = useContext(AuthContext);

  if (!user.email) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="designEdit-ctn">
      <article className="designEdit-card">
        <h2 className="designEdit-title">Edit your design</h2>
        <form className="designEdit-form">
          <section className="designEdit-form-row">
            <article className="designEdit-form-title-ctn">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                className="designEdit-form-title"
                placeholder="Color theory 101"
              />
            </article>

            <article className="designEdit-form-text-ctn">
              <label htmlFor="text">Main Text</label>
              <input
                type="text"
                name="text"
                className="designEdit-form-text"
                placeholder="A better way to use colors in any type of design."
              />
            </article>
          </section>

          <section className="designEdit-form-row">
            <article className="designEdit-form-desc-ctn">
              <label htmlFor="description">Main Description Text</label>
              <input
                type="text"
                name="description"
                className="designEdit-form-desc"
                placeholder="Colors influence the meaning of text, how users move around a particular layout, and what they feel as they do so."
              />
            </article>

            <article className="designEdit-form-mainImg-ctn">
              <label htmlFor="mainImg">Main Image</label>
              <input
                type="text"
                name="mainImg"
                className="designEdit-form-mainImg"
                placeholder="https://image.png"
              />
            </article>
          </section>

          <section className="designEdit-form-row">
            <h3 className="firstArticle-title">First Article Content</h3>
            <article className="designEdit-form-art1-title-ctn">
              <label htmlFor="art1-title">First Article Title</label>
              <input
                type="text"
                name="art1-title"
                className="designEdit-form-art1-title"
                placeholder="Good practices in color theory"
              />
            </article>

            <article className="designEdit-form-art1-text-ctn">
              <label htmlFor="art2-text">Article 1 Text</label>
              <input
                type="text"
                name="art1-text"
                className="designEdit-form-art1-text"
                placeholder="Colors influence the meaning of text, how users move around a particular layout, and what they feel as they do so."
              />
            </article>

            <article className="designEdit-form-art1-img-ctn">
              <label htmlFor="art1-img">Article 1 Img</label>
              <input
                type="text"
                name="art1-img"
                className="designEdit-form-art1-img"
                placeholder="https://image.png"
              />
            </article>
          </section>

          <section className="designEdit-form-row">
            <h3 className="secondArticle-title">Second Article Content</h3>
            <article className="designEdit-form-art2-title-ctn">
              <label htmlFor="art2-title">Second Article Title</label>
              <input
                type="text"
                name="art2-title"
                className="designEdit-form-art2-title"
                placeholder="New way to use colors"
              />
            </article>

            <article className="designEdit-form-art2-text-ctn">
              <label htmlFor="art2-text">Article 2 Text</label>
              <input
                type="text"
                name="art2-text"
                className="designEdit-form-art2-text"
                placeholder="Colors influence the meaning of text, how users move around a particular layout, and what they feel as they do so."
              />
            </article>

            <article className="designEdit-form-art2-img-ctn">
              <label htmlFor="art2-img">Article 2 Img</label>
              <input
                type="text"
                name="art2-img"
                className="designEdit-form-art2-img"
                placeholder="https://image.png"
              />
            </article>
          </section>

          <article id="designEdit-form-submitBtn-ctn">
            <button id="designEdit-form-submitBtn">Create Design</button>
          </article>
        </form>
      </article>
    </section>
  );
}
