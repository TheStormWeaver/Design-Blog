import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="notFound-page">
      <article className="notFound-page-container">
        <h3 className="notFound-page-title">404</h3>
        <h4 className="notFound-page-subtitle">Page Not Found</h4>
        <p className="notFound-page-text">
          The page you are looking for is temporarily unavailable.
        </p>
      </article>
    </section>
  );
}
