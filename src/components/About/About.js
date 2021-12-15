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
        <article className="ourWork-banner-img">
          <img src="./images/web-design.png" alt="designer" />
        </article>

        <article className="ourWork-banner-text">
          <h2 className="ourWork-banner-text-title">
            Our beliefs and ideals
          </h2>
          <p className="ourWork-banner-text-subtext">
            Creativity moves people. Creativity brings emotion. We believe in
            the transformative power of illustration and design and their
            ability to simplify communications, elevate experiences, engage and
            inspire people everywhere.
          </p>
        </article>
      </section>
    </>
  );
}
