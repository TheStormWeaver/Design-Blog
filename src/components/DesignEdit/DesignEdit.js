import "./DesignEdit.css";

export default function DesignEdit() {
  return (
    <section className="designEdit-ctn">
      <article className="designEdit-card">
        <h2 className="designEdit-title">Edit your design</h2>
        <form className="designEdit-form">
          <article className="designEdit-form-title-ctn">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="designEdit-form-title"
              placeholder="Color theory 101"
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

          <article className="designEdit-form-text-ctn">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              name="text"
              className="designEdit-form-text"
              placeholder="A better way to use colors in any type of design."
            />
          </article>

          <article className="designEdit-form-desc-ctn">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="desc"
              className="designEdit-form-desc"
              placeholder="Colors influence the meaning of text, how users move around a particular layout, and what they feel as they do so."
            />
          </article>

          <article className="designEdit-form-imgCollection-ctn">
            <label htmlFor="imgCollection">Side Images</label>
            <input
              type="text"
              name="imgCollection"
              className="designEdit-form-imgCollection"
              placeholder="https://image.png, https://image.jpg"
            />
          </article>

          <article id="designEdit-form-submitBtn-ctn">
            <button id="designEdit-form-submitBtn">Create Design</button>
          </article>
        </form>
      </article>
    </section>
  );
}
