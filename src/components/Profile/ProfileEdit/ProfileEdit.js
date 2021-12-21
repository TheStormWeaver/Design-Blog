import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./ProfileEdit.css";

import { AuthContext } from "../../../contexts/AuthContext";

export default function ProfileEdit() {
  const { user, updateProfileData } = useContext(AuthContext);
  const navigate = useNavigate();

  function onSaveClick(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let profileImg = formData.get("profileImg");
    let displayName = formData.get("displayName");
    let profileBio = formData.get("bio");

    updateProfileData({
      photo: profileImg,
      displayName: displayName,
      bio: profileBio,
    });

    navigate("/profile");
  }

  return (
    <section className="profile-edit-page">
      <article className="profile-edit-card">
        <h2 className="profile-edit-title">Edit Profile</h2>
        <form className="profile-edit-form" onSubmit={onSaveClick}>
          <article className="profile-edit-form-profileImg-ctn">
            <label htmlFor="profileImg">Profile Picture</label>
            <input
              className="profile-edit-form-profileImg"
              type="text"
              name="profileImg"
              defaultValue={user.photo}
            />
          </article>

          <article className="profile-edit-form-displayName-ctn">
            <label htmlFor="displayName">Display Name</label>
            <input
              className="profile-edit-form-displayName"
              type="text"
              name="displayName"
              defaultValue={user.displayName}
            />
          </article>

          <article className="profile-edit-form-profileNumber-ctn">
            <label htmlFor="bio">About Me</label>
            <textarea
              className="profile-edit-form-number"
              type="text"
              name="bio"
              defaultValue={user.bio}
            />
          </article>

          <section className="profile-edit-form-save-ctn">
            <button className="profile-edit-form-save">Save</button>
          </section>
        </form>
      </article>
    </section>
  );
}
