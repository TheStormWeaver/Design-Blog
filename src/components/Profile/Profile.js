import { useContext} from "react";

import { AuthContext } from "../../contexts/AuthContext";

import "./Profile.css";

export default function Profile() {
  const { user } = useContext(AuthContext);

  

  return (
    <section className="profile-page">
      <section className="profile-card">
        <article className="profile-card-image">
          <img src="./icons/avatar.png" alt="user icon" />
        </article>
        
        <article className="profile-card-text">
          <p className="profile-card-text-email">Email: email</p>
          <p className="profile-card-text-name">Name: name</p>
          <p className="profile-card-text-phone">Number: 088 888 888</p>
        </article>

        <button className="profile-card-button">Change Info</button>
      </section>
    </section>
  );
}
