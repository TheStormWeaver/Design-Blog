import "./About.css";

export default function About() {
  return (
    <>
      <section className="about-mainBanner-ctn">
        <article className="about-mainBanner-mainImg">
          <img src="./images/aurora.png" alt="" />
        </article>

        <article className="about-mainBanner-info">
          <h2 className="about-mainBanner-info-title">
            We are a creative studio focused on design & illustration.
          </h2>
          <p className="about-mainBanner-info-text">
            Launched in 2021, Ixtal design is a network for designers. All kinds
            of designers come to Ixtal to discover and share incredible work,
            including Tips and tricks, illustrations, UI/UX, Logo design, Trends
            in design, Typography, Photography, Interior design, Digital art,
            Fashion and much much more.
          </p>
        </article>

        <article className="about-mainBanner-sideImg">
          <img src="./images/borealis.png" alt="" />
        </article>
      </section>

      <section className="ourWork-banner">
        <article className="ourWork-banner-text">
          <h2 className="ourWork-banner-text-title">What we do</h2>
          <p className="ourWork-banner-text-subtext">
            We give designers the ability to share with others their work and
            connect trough it. Our goal is to build a community of designers,
            that want to inspire others and strive to create and want to find a
            place to find inspiration. Design is a universal way of speaking
            that anyone can interpret in a different way, and that's the beauty
            of it.
          </p>
        </article>

        <article className="ourWork-banner-img">
          <img src="./images/digital-designers.png" alt="design" />
        </article>
      </section>

      <section className="items-banner">
        <article className="items-banner-item">
          <article className="items-banner-item-img">
            <img src="./icons/typing.png" alt="platform" />
          </article>
          <h3 className="items-banner-item-title">
            A platform for all designers
          </h3>
          <p className="items-banner-item-text">
            Join a welcoming community made up of all kinds of designers
          </p>
        </article>

        <article className="items-banner-item">
          <article className="items-banner-item-img">
            <img src="./icons/design.png" alt="platform" />
          </article>
          <h3 className="items-banner-item-title">
            Inspire yourself to create
          </h3>
          <p className="items-banner-item-text">
            Take a deep dive into the world of design and expand your view
          </p>
        </article>

        <article className="items-banner-item">
          <article className="items-banner-item-img">
            <img src="./icons/site.png" alt="platform" />
          </article>
          <h3 className="items-banner-item-title">
            Showcase your amazing work
          </h3>
          <p className="items-banner-item-text">
            Share your work to get feedback, improve and inspire others
          </p>
        </article>
      </section>

      <section className="beliefs-banner">
        <article className="beliefs-banner-img">
          <img src="./images/monitor.png" alt="design" />
        </article>

        <article className="beliefs-banner-text">
          <h2 className="ourWork-banner-text-title">Our beliefs and ideals</h2>
          <p className="beliefs-banner-text-subtext">
            Creativity moves people. Creativity brings emotion. We want to
            connect people trough design. We believe in the transformative power
            of illustration and design and their ability to simplify
            communications, elevate experiences, engage and inspire people
            everywhere.
          </p>
        </article>
      </section>
    </>
  );
}
