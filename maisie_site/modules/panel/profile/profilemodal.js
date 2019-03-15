import Field from '../../../shared/components/text/field.js';
import SmallText from '../../../shared/components/text/smallText.js';
import Button from '../../../shared/components/button.js';
import { ApolloConsumer } from 'react-apollo';
import updateHost from '../../../shared/services/update-host';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../shared/services/actions';

class ProfileModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: false,
      saveMessage: "Save",
    }
  }
  handleCancel = () => {
    document.getElementById("profile_modal").classList.add("hide");
  }
  handleSubmit = async (client) => {
    document.getElementById("hostprofile__modal_brow-cancel").classList.add('disabled');
    document.getElementById("hostprofile__modal_brow-submit").classList.add('saving');
    this.setState({saveMessage: "Saving..."});
    // add logic to submit info
    let license = document.getElementById("hostprofilemodal_license").value,
    education = document.getElementById("hostprofilemodal_education").value,
    description = document.getElementById("hostprofilemodal_description").value,
    image = document.getElementById("hostprofile_imageupload").files[0];

    let bodyFormData = new FormData();
    bodyFormData.append('image', image);
    bodyFormData.append('id', this.props.user.host.id);
    bodyFormData.append('table', 'host');
    try {
      await axios.post('/api/upload', bodyFormData, { headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${this.props.token}`
      }});
    } catch(e) {
      document.getElementById("hostprofile__modal_brow-submit").classList.remove('saving');
      this.setState({saveMessage: 'Save'});
      console.log(e);
    }

    const {data: {updateHost: { user }}} = await updateHost(client, {
      id: this.props.user.host.id,
      license,
      education,
      description
    });

    await this.props.updateUser(user);
    document.getElementById("hostprofile__modal_brow-cancel").classList.add('disabled');
    document.getElementById("hostprofile__modal_brow-submit").classList.remove('saving');
    this.setState({saveMessage: 'Save'});
    document.getElementById("profile_modal").classList.add("hide")
  }
  handleUploadImage(x) {
    var image = document.getElementById("hostprofile_imageupload").value;
    this.setState({image: image})
    this.changeField(x)
  }
  changeField(x) {
    let license = document.getElementById("hostprofilemodal_license").value === x.license,
        education = document.getElementById("hostprofilemodal_education").value === x.education,
        description = document.getElementById("hostprofilemodal_description").value === x.description,
        image = document.getElementById("hostprofile_imageupload").value === true,
        submit = document.getElementById("hostprofile__modal_brow-submit");
    license || education || description || image ? submit.classList.remove("fade") : submit.classList.add("fade")
  }
  render() {
    return(
      <ApolloConsumer>
        {client =>
          <div className="hostprofile__modal">
            <div className="hostprofile__modal-top col-c-c">
              <SmallText>Edit Information</SmallText>
            </div>
            <Field title="Certification">
              <input onChange={(x) => this.changeField(this.props.user.host)} id="hostprofilemodal_license" defaultValue={this.props.user.host.license} />
            </Field>
            <Field title="Education">
              <input onChange={(x) => this.changeField(this.props.user.host)} id="hostprofilemodal_education" defaultValue={this.props.user.host.education} />
            </Field>
            <Field title="Description">
              <textarea onChange={(x) => this.changeField(this.props.user.host)} id="hostprofilemodal_description" defaultValue={this.props.user.host.description} />
            </Field>
            <div className="hostprofile__modal-img" style={{backgroundImage: `url(${this.props.user.host.imageUrl || 'https://s3.amazonaws.com/maisie-files/shared/profile-default.svg'})`, backgroundSize: "cover", backgroundPosition: "center"}} />
            <Field title="Profile Picture">
              <input
                type="file"
                id="hostprofile_imageupload" name="hostprofpic"
                accept="image/png, image/jpeg"
                onChange={(x) => this.handleUploadImage(this.props.user.host)}
              />
                <label htmlFor="hostprofile_imageupload"><span>Choose a file</span></label>
                <span>{ this.state.image ? "Uploaded: " + this.state.image : null}</span>
            </Field>
            <div className="hostprofile__modal_brow row-fe-c">
              <Button kind="alt" weight="light" id="hostprofile__modal_brow-cancel" className="hostprofile__modal_brow-cancel" onClick={() => this.handleCancel()}>
                Cancel
              </Button>
              <div style={{width: 10}}/>
              {
                this.state.saveMessage === 'Save' ?
                <Button kind="alt" weight="purple" id="hostprofile__modal_brow-submit" className="hostprofile__modal_brow-submit fade" onClick={() => this.handleSubmit(client)}>
                  {this.state.saveMessage}
                </Button> :
                <Button kind="alt" weight="purple" saving={'Saving...'} id="hostprofile__modal_brow-submit" className="hostprofile__modal_brow-submit fade" onClick={() => this.handleSubmit(client)} />
              }
            </div>
          </div>
        }
      </ApolloConsumer>
    )
  }
}

export default connect(null, actions)(ProfileModal);
