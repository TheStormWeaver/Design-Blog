import { useEffect, useState } from "react";

import "./Inspiration.css";

import DesignCard from "./DesignCard/DesignCard";
import { getAllDesigns } from "../../services/designService";

export default function Inspiration() {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    getAllDesigns().then((result) => {
      console.log(result);
      setDesigns(result);
    });
  }, []);

  const designCollection =
    designs.length > 0 ? (
      designs.map((design) => <DesignCard key={design._id} design={design} />)
    ) : (
      <p className="empty">There are currently no designs.</p>
    );

  return (
    <section className="inspiration-page">
      <h2 className="inspiration-page-title">Design Inspiration & Ideas</h2>
      <p className="inspiration-page-text">
        Fuel your best work with our collection of design and transform clever
        concepts into visual reality.
      </p>
      <section className="inspiration-collection-container">
        {designs.length > 0 ? (
          designs.map((design) => (
            <DesignCard key={design._id} design={design} />
          ))
        ) : (
          <p className="empty">There are currently no designs available.</p>
        )}
      </section>
    </section>
  );
}
