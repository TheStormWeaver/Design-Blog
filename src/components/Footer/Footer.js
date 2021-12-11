import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#094498" fill-opacity="1" d="M0,160L16,160C32,160,64,160,96,176C128,192,160,224,192,224C224,224,256,192,288,160C320,128,352,96,384,74.7C416,53,448,43,480,69.3C512,96,544,160,576,165.3C608,171,640,117,672,122.7C704,128,736,192,768,192C800,192,832,128,864,117.3C896,107,928,149,960,192C992,235,1024,277,1056,245.3C1088,213,1120,107,1152,106.7C1184,107,1216,213,1248,213.3C1280,213,1312,107,1344,85.3C1376,64,1408,128,1424,160L1440,192L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg> */}
      <section className="footer-content">
        <article className="footer-main">
          <article className="footer-main-logo">
            <img src="/images/logo-text.png" alt="logo" />
          </article>
        </article>

        <article className="footer-vision">
          <h3 className="footer-vision-title">Our Vision</h3>
          <p className="footer-vision-quote">
            We connect people on a event deeper level trough inspiration and
            design, while giving them the ability to join a welcoming community.
          </p>
        </article>

        <article className="footer-contacts">
          <h3 className="footer-contacts-title">Contact Us</h3>
          <ul className="footer-contacts-list">
            <li className="footer-contacts-list-item"><i className="fas fa-phone-alt"></i> +359 000 000 000</li>
            <li className="footer-contacts-list-item"><i className="fas fa-envelope"></i> info.ixtal@mail.com</li>
          </ul>
        </article>

        <article className="footer-socials">
            <ul className="footer-socials-list">
              <li className="footer-socials-list-item">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="footer-socials-list-item">
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="footer-socials-list-item">
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="footer-socials-list-item">
                <a href="https://www.pinterest.com/">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </article>
      </section>
    </footer>
  );
}
