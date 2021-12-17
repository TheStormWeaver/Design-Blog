import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import "./DesignDetails.css";

import { AuthContext } from "../../contexts/AuthContext";
import { getOneDesign } from "../../services/designService";

export default function DesignDetails() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [design, setDesign] = useState({});
  const { designId } = useParams();

  useEffect(() => {
    getOneDesign(designId).then((result) => setDesign(result));
  }, [designId]);

  return (
    <section className="designDetails-page">
      <article className="designDetails-content">
        <article className="design-main-content">
          <h3 className="designDetails-content-title">{design.title}</h3>
          <p className="designDetails-content-maker">
            {design._ownerName
              ? `Article made by ${design._ownerName}`
              : "Article made by Ixtal"}
          </p>
          <p className="designDetails-content-text">{design.text}</p>
          <p className="designDetails-content-description">
            {design.description}
          </p>
          <article className="designDetails-content-mainImg">
            <img src={design.mainImg} alt="design-main-mainImg" />
          </article>
        </article>

        <article className="designDetails-content-art1">
          <h3 className="designDetails-content-art1Title">{design.art1Title}</h3>
          <p className="designDetails-content-art1Text">{design.art1Text}</p>
          <article className="designDetails-content-art1Img">
            <img src={design.art1Img} alt="design-first-img" />
          </article>
        </article>

        <article className="designDetails-content-art2">
        <h3 className="designDetails-content-art2Title">{design.art2Title}</h3>
          <p className="designDetails-content-art2Text">{design.art2Text}</p>
          <article className="designDetails-content-art2Img">
            <img src={design.art2Img} alt="design-second-img" />
          </article>
        </article>
      </article>
    </section>
  );
}
