import "./Profile.css"

export default function Profile() {
  return (
    <section className="profile-page">
      <section className="profile-card">
        <article className="profile-card-image">
          <img src="./icons/avatar.png" alt="user icon" />
        </article>
        <article className="profile-card-text">
          <p className="profile-card-text-email">email</p>
          <p className="profile-card-text-name">display name</p>
        </article>

        <article className="profile-button-container">
          <button className="profile-button">Change Info</button>
        </article>
      </section>
    </section>
  );
}
