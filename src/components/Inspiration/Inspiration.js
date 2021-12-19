import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Inspiration.css";
import DesignCard from "./DesignCard/DesignCard";

import { getAllDesigns } from "../../services/designService";

export default function Inspiration() {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    getAllDesigns().then((result) => {
      setDesigns(result);
    });
  }, []);

  const emptyPage = (
    <article className="empty">
      <article className="empty-img">
        <img src="./icons/empty-gallery.png" alt="Missing Design" />
      </article>
      <p className="empty-title">Looks like there are no designs.</p>
      <p className="empty-text">
        Be the first one to create an design and showcase it
      </p>
      <Link className="empty-link" to="/create">
        Create Designs
      </Link>
    </article>
  );
  
  const designCollection =
    designs.length > 0
      ? designs.map((design) => <DesignCard key={design._id} design={design} />)
      : emptyPage;

  return (
    <section className="inspiration-page">
      <section className="inspiration-collection-container">
        {designCollection}
      </section>
    </section>
  );
}
