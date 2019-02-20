import SmallText from '../../shared/components/text/smallText.js';
import Button from '../../shared/components/button.js';
import Field from '../../shared/components/text/field.js';
import Disclaimer from '../../shared/components/text/disclaimer.js';
import updateProfile from '../../shared/services/update-profile';
import { ApolloConsumer } from 'react-apollo';
import * as actions from '../../shared/services/actions';
import { connect } from 'react-redux';
import axios from 'axios';


const Spacer = (props) => <div style={{height: props.height}} />

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: false,
      saveMessage: "Save Profile",
      image_url: '',
    }
  }

  onload = (imgtag) => (event) => {
    imgtag.src = event.target.result;
  };

  handleUploadImage(e) {
    const {
      currentTarget: { files }
    } = e;
    const image_url = document.getElementById("profile_imageupload").value;
    const reader = new FileReader();
    const imgtag = document.getElementById("profilePic");
    imgtag.title = files[0].name;

    reader.onload = this.onload(imgtag);
    reader.readAsDataURL(files[0]);

    this.setState({image_url, image: files[0]});
  }
  handlePress = async (e, client) => {
    e.preventDefault()
    document.getElementById("save_profile_button").classList.add("saving");
    this.setState({saveMessage: "Saving..."});
    if (this.state.image) {
      let bodyFormData = new FormData();
      bodyFormData.append('image', this.state.image);
      bodyFormData.append('id', this.props.user.id);
      bodyFormData.append('table', 'user');
      try {
        await axios.post('/api/upload', bodyFormData, { headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${this.props.token}`
        }});
      } catch(e) {
        console.log(e);
      }
    }

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const neighborhood = document.getElementById("location").value;
    const school = document.getElementById("school").value;
    const work = document.getElementById("work").value;
    const bio = document.getElementById("bio").value;

    const {data: {updateProfile: {user}}} = await updateProfile(client, {
      firstName,
      lastName,
      email,
      phone,
      neighborhood,
      school,
      work,
      bio
    });

    await this.props.updateUser(user);
    document.getElementById("save_profile_button").classList.remove('saving');
    this.setState({saveMessage: 'Save'});
  }
  render() {
    return(
      <form className="editprofile__inner col">
        <span className="editprofile__inner-title col">Edit Profile</span>
        <Spacer height={50} />
        <SmallText>General</SmallText>
        <div id="profilePic" className="editprofile__picture" style={{backgroundImage: `url(${this.props.user.imageUrl})`}}></div>
        <Field title="Profile Picture">
          <input
            type="file"
            id="profile_imageupload" name="profpic"
            accept="image/png, image/jpeg"
            onChange={this.handleUploadImage.bind(this)}
          />
            <label htmlFor="profile_imageupload"><span>Choose a file</span></label>
            <span>{ this.state.image_url ? "Uploaded: " + this.state.image_url : null}</span>
        </Field>
        <Field title="First Name">
          <input
            type="text"
            placeholder="John"
            defaultValue={this.props.user.firstName}
            id="firstname"
          />
        </Field>
        <Field title="Last Name">
          <input
            type="text"
            placeholder="Appleseed"
            defaultValue={this.props.user.lastName}
            id="lastname"
          />
        </Field>
        <Field title="Email Address" private={true}>
          <input
            type="text"
            placeholder="john@appleseed.com"
            defaultValue={this.props.user.email}
            id="email"
          />
        </Field>
        <Field title="Phone Number" private={true}>
          <input
            type="num"
            placeholder="000-000-0000"
            defaultValue={this.props.user.phone}
            id="phone"
          />
        </Field>
        <Disclaimer>We ask for your phone number so that your Circle host can contact you. We will never share this information with anyone else.</Disclaimer>
        {/* <Field title="Gender" private={true}>
          <select id="gender" style={{width: 100}}>
            <option value="male" selected="selected">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </Field>
        <Disclaimer>We use this to help you discover new Circles and won't share it with anyone.</Disclaimer> */}
        <Field title="Where You Live">
          <select id="location" defaultValue={this.props.user.neighborhood} style={{width: 150}}>
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
            placeholder="New York University"
            defaultValue={this.props.user.school}
            id="school"
          />
        </Field>
        <Field title="Work">
          <input
            type="text"
            placeholder="Front-end Engineer"
            defaultValue={this.props.user.work}
            id="work"
          />
        </Field>
        <Field title="Bio">
          <textarea
            id="bio"
            rows={6}
            placeholder="CEO at Maisie, recent grad from NYU Stern. Originally from Boston, but now go back and forth between NYC and SF."
            defaultValue={this.props.user.bio}>
          </textarea>
        </Field>
        <Disclaimer>
          Writing a bio helps Hosts get to know you. When you apply to join a Circle, this will
          help hosts learn more about you before you meet. Feel free to include your interests,
          goals, and background.
        </Disclaimer>
        <ApolloConsumer>
          {client =>
            <div className="r_cont">
              <Button type="submit" kind="primary" id="save_profile_button" weight="purple" onClick={(e) => this.handlePress(e, client)}>{this.state.saveMessage}</Button>
            </div>
          }
        </ApolloConsumer>
      </form>
    )
  }
}

export default connect(null, actions)(Profile);