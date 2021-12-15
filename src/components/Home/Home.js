import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="main-banner">
        <article className="main-banner-img">
          <img src="/images/night-sky.png" alt="" />
        </article>

        <article className="main-banner-text">
          <h1 className="main-banner-text-title">
            Design to inspire, inspire to design
          </h1>
          <p className="main-banner-text-subtext">
            Discover a brand new world of creations and possibilities fueled
            only by one's creativity. Either if you are looking for inspiration
            for your next creative work or you want to share your insight on a
            subject, you will find a place here.
          </p>
        </article>
      </section>

      <section className="designer-banner">
        <article className="designer-banner-img">
          <img src="./images/designer.jpg" alt="designer" />
        </article>

        <article className="designer-banner-text">
          <h2 className="designer-banner-text-title">
            Showcase your true inner creative side
          </h2>
          <p className="designer-banner-text-subtext">
            Ixtal is a platform for sharing inspirational resources in the
            design field. Express your knowledge in the field, with amazing
            posts of your choosing or upload your work to inspire other
            designers.
          </p>
        </article>
      </section>

      <section className="color-banner">
        <article className="color-banner-item">
          <article className="color-banner-item-img">
            <img src="./icons/typing.png" alt="platform" />
          </article>
          <h3 className="color-banner-item-title">
            A platform for all designers
          </h3>
          <p className="color-banner-item-text">
            Join a welcoming community made up of all kinds of designers
          </p>
        </article>

        <article className="color-banner-item">
          <article className="color-banner-item-img">
            <img src="./icons/design.png" alt="platform" />
          </article>
          <h3 className="color-banner-item-title">
            Inspire yourself to create
          </h3>
          <p className="color-banner-item-text">
            Take a deep dive into the world of design and expand your view
          </p>
        </article>

        <article className="color-banner-item">
          <article className="color-banner-item-img">
            <img src="./icons/site.png" alt="platform" />
          </article>
          <h3 className="color-banner-item-title">
            Showcase your amazing work
          </h3>
          <p className="color-banner-item-text">
            Share your work to get feedback, improve and inspire others
          </p>
        </article>
      </section>

      <section className="art-banner">
        <article className="art-banner-text">
          <h2 className="art-banner-text-title">
            Explore and find your inner muse
          </h2>
          <p className="art-banner-text-subtext">
            Ixtal creates a field for all designers alike to find illustrations,
            art and all kinds of creative work, so they can gather all the
            necessary inspiration for their next or current project.
          </p>
        </article>

        <article className="art-banner-img">
          <img src="./images/web-design.png" alt="design" />
        </article>
      </section>
    </>
  );
}
