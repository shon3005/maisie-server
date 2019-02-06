export default () =>
  <div className="profile col">
    <span className="profile-title col">Edit Profile</span>

    <span className="profile-header col">General</span>

    <div className="profile__field row-sb-c">
      <div className="profile__field_text col-fs-fe">
        <span>First Name</span>
      </div>
      <div className="profile__field_input">
        <input type="text" defaultValue="Chester" id="firstname" />
      </div>
    </div>

    <div className="profile__field row-sb-c">
      <div className="profile__field_text col-fs-fe">
        <span>Last Name</span>
      </div>
      <div className="profile__field_input">
        <input type="text" defaultValue="Chzburger" id="lastname" />
      </div>
    </div>

    <div className="profile__field row-sb-c">
      <div className="profile__field_text col-fs-fe">
        <span>Email Address</span>
        <span className="tag">Private</span>
      </div>
      <div className="profile__field_input">
        <input type="text" defaultValue="chester@heymaisie.com" id="email" />
      </div>
    </div>

    <div className="profile__field row-sb-c">
      <div className="profile__field_text col-fs-fe">
        <span>Phone Number</span>
        <span className="tag">Private</span>
      </div>
      <div className="profile__field_input">
        <input type="num" defaultValue="000-000-0000" id="email" />
        <div>We ask for your phone number so that your Circle host can contact you. We will never share this information with anyone else.</div>
      </div>
    </div>
  </div>
