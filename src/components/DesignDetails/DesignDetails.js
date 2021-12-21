import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import "./DesignDetails.css";
import ConfirmModal from "../Common/ConfirmModal";

import { AuthContext } from "../../contexts/AuthContext";
import { DelDesign, getOneDesign, Like } from "../../services/designService";

export default function DesignDetails() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [design, setDesign] = useState({});
  const { designId } = useParams();
  const [ text, setText ] = useState("");
  const [showDialogue, setShowDialogue] = useState(false);

  useEffect(() => {
    getOneDesign(designId).then((result) => setDesign(result));
  }, [designId]);

  const likeButtonClick = () => {
    if (design.likes.includes(user._id)) {
      setText("User already liked");
      setShowDialogue(true)
      return;
    }

    let likes = [...design.likes, user._id];
    let likedDesign = { ...design, likes };

    Like(design._id, likedDesign, user.accessToken).then((resData) => {
      setDesign((state) => ({
        ...state,
        likes,
      }));
    });
  };

  const onDelete = (e) => {
    e.preventDefault();

    DelDesign(designId, user.accessToken)
      .then(() => {
        navigate("/inspiration");
      })
      .finally(setShowDialogue(false));
  };

  const deleteClickHandler = (e) => {
    e.preventDefault();

    setText("Are you sure you want to delete this design?");
    setShowDialogue(true);
  };

  const onClose = () => {
    setShowDialogue(false);
  };

  const ownerButtons = (
    <>
      <Link
        className="designDetails-content-buttons-edit"
        to={`/edit/${design._id}`}
      >
        Edit
      </Link>
      <Link
        className="designDetails-content-buttons-delete"
        to=""
        onClick={deleteClickHandler}
      >
        Delete
      </Link>
    </>
  );

  const userButtons = (
    <button
      className="designDetails-content-buttons-like"
      onClick={likeButtonClick}
    >
      <i className="fas fa-heart"></i>
      Like
    </button>
  );

  return (
    <section className="designDetails-page">
      <ConfirmModal
        show={showDialogue}
        onClose={onClose}
        onSave={onDelete}
        message={text}
      />
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
          <h3 className="designDetails-content-art1Title" id={design.art1Title ? "" : "hidden"}>
            {design.art1Title}
          </h3>
          <p className="designDetails-content-art1Text" id={design.art1Text ? "" : "hidden"}>{design.art1Text}</p>
          <article className="designDetails-content-art1Img" id={design.art1Img ? "" : "hidden"}>
            <img src={design.art1Img} alt="design-first-img" />
          </article>
        </article>

        <article className="designDetails-content-art2">
          <h3 className="designDetails-content-art2Title" id={design.art2Title ? "" : "hidden"}>
            {design.art2Title}
          </h3>
          <p className="designDetails-content-art2Text" id={design.art2Text ? "" : "hidden"}>{design.art2Text}</p>
          <article className="designDetails-content-art2Img" id={design.art2Img ? "" : "hidden"}>
            <img src={design.art2Img} alt="design-second-img" />
          </article>
        </article>

        <section className="designDetails-content-actions">
          <article className="designDetails-content-buttons">
            {user._id &&
              (user._id === design._ownerId ? ownerButtons : userButtons)}
          </article>

          <article className="designDetails-content-likes">
            <p className="designDetails-content-likes-total">
              <i className="fas fa-heart"></i> {design.likes?.length}
            </p>
          </article>
        </section>
      </article>
    </section>
  );
}
