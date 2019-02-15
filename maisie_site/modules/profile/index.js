import LargeText from '../../shared/components/text/largeText.js';
import SmallText from '../../shared/components/text/smallText.js';
import Field from '../../shared/components/text/field.js';
import Disclaimer from '../../shared/components/text/disclaimer.js';

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
  <form className="profile__inner col">
    <span className="profile__inner-title col">Edit Profile</span>
    <Spacer height={50} />
    <SmallText>General</SmallText>
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
    <Field title="Profile Picture" nostretch>
      <div className="create__inner_cont-imgadd col-c-c">Upload image</div>
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
    <Spacer height={100} />
    <SmallText>Optional</SmallText>
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
