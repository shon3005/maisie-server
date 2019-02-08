const Field = (props) =>
  <div className="profile__field row-sb-c">
    <div className="profile__field_text col-fs-fe">
      <span>{props.title}</span>
      <span className="tag">{props.private ? "Private" : null}</span>
    </div>
    <div className="profile__field_input">{props.children}</div>
  </div>

const Header = (props) => <span className="profile-header col">{props.children}</span>
const Disclaimer = (props) => <div className="profile-disclaimer">{props.children}</div>
const Spacer = (props) => <div style={{height: props.height}} />

function handlePress(e) {
  e.preventDefault()
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var gender = document.getElementById("gender").value;
  var location = document.getElementById("location").value;
  var school = document.getElementById("school").value;
  var work = document.getElementById("work").value;
  var bio = document.getElementById("bio").value;
}

export default () =>
  <form className="profile col">
    <span className="profile-title col">Edit Profile</span>
    <Spacer height={25} />
    <Header>General</Header>
    <Field title="First Name">
      <input
        type="text"
        defaultValue="Chester"
        id="firstname"
      />
    </Field>
    <Field title="Last Name">
      <input
        type="text"
        defaultValue="Chzburger"
        id="lastname"
      />
    </Field>
    <Field title="Email Address" private={true}>
      <input
        type="text"
        defaultValue="chester@heymaisie.com"
        id="email"
      />
    </Field>
    <Field title="Phone Number" private={true}>
      <input
        type="num"
        defaultValue="000-000-0000"
        id="phone"
      />
    </Field>
    <Disclaimer>We ask for your phone number so that your Circle host can contact you. We will never share this information with anyone else.</Disclaimer>
    <Field title="Gender" private={true}>
      <select id="gender" style={{width: 100}}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </Field>
    <Disclaimer>We use this to help you discover new Circles and won't share it with anyone.</Disclaimer>
    <Field title="Where You Live">
      <select id="location" style={{width: 150}}>
        <option value="nyc">New York City</option>
        <option value="sf">Bay Area</option>
        <option value="other">Somewhere Else</option>
      </select>
    </Field>
    <Spacer height={50} />
    <Header>Optional</Header>
    <Field title="School">
      <input
        type="text"
        defaultValue="New York University"
        id="school"
      />
    </Field>
    <Field title="Work">
      <input
        type="text"
        defaultValue="Front-end Engineer"
        id="work"
      />
    </Field>
    <Field title="Bio">
      <textarea id="bio" rows={6} defaultValue="CEO at Maisie, recent grad from NYU Stern. Originally from Boston, but now go back and forth between NYC and SF.">
      </textarea>
    </Field>
    <Disclaimer>
      Writing a bio helps Hosts get to know you. When you apply to join a Circle, this will
      help hosts learn more about you before you meet. Feel free to include your interests,
      goals, and background.
    </Disclaimer>
    <button type="submit" onClick={(e) => handlePress(e)}>
      Save
    </button>
  </form>
