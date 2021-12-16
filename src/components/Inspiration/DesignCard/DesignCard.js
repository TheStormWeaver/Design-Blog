import { Link } from "react-router-dom";

import "./DesignCard.css";

export default function DesignCard({ design }) {
  return (
    <article className="inspiration-collection">
      <Link
        className="inspiration-collection-ctn"
        to={`/details/${design._id}`}
      >
        <article className="inspiration-collection-img">
          <img src={design.mainImg} />
        </article>
        <h3 className="inspiration-collection-title">{design.title}</h3>
        <p className="inspiration-collection-text">{design.text}</p>
      </Link>
    </article>
  );
}
