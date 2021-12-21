import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import "./Profile.css";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  function onProfileChangeClick(e) {
    e.preventDefault();

    navigate("/profile-edit");
  }

  return (
    <section className="profile-page">
      <section className="profile-card">
        <article className="profile-card-image">
          {user.photo ? (
            <img src={user.photo} alt="user icon" />
          ) : (
            <img src="./icons/avatar.png" alt="user icon" />
          )}
        </article>

        <article className="profile-card-text">
          <article className="profile-card-text-name-ctn">
            <p className="profile-card-text-name">{user.displayName}</p>
          </article>

          <article className="profile-card-text-email-ctn">
            <p className="profile-card-text-email">{user.email}</p>
          </article>

          <article className="profile-card-text-bio-ctn">
            <p className="profile-card-text-bio">{user.bio}</p>
          </article>
        </article>

        <button className="profile-card-button" onClick={onProfileChangeClick}>
          Change Info
        </button>
      </section>
    </section>
  );
}
