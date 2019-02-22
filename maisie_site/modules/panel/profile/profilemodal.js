import Field from '../../../shared/components/text/field.js';
import SmallText from '../../../shared/components/text/smallText.js';
import Button from '../../../shared/components/button.js';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: false,
    }
  }
  handleSubmit() {
    // add logic to submit info
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
    if (this.props.user.host) {
      return(
        <div className="hostprofile__modal">
          <div className="hostprofile__modal-top col-c-c">
            <SmallText>Edit Information</SmallText>
          </div>
          <Field title="Certification">
            <input onChange={(x) => this.changeField(this.props.user.host ? this.props.user.host : null)} id="hostprofilemodal_license" defaultValue={this.props.user.host.license ? this.props.user.host.license : null} />
          </Field>
          <Field title="Education">
            <input onChange={(x) => this.changeField(this.props.user.host ? this.props.user.host : null)} id="hostprofilemodal_education" defaultValue={this.props.user.host.education ? this.props.user.host.education : null} />
          </Field>
          <Field title="Description">
            <textarea onChange={(x) => this.changeField(this.props.user.host ? this.props.user.host : null)} id="hostprofilemodal_description" defaultValue={this.props.user.host.description ? this.props.user.host.description : null} />
          </Field>
          <div className="hostprofile__modal-img" style={{backgroundImage: `url(${this.props.user.host.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}} />
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
            <Button kind="alt" weight="light" id="hostprofile__modal_brow-cancel" className="hostprofile__modal_brow-cancel" onClick={() => document.getElementById("profile_modal").classList.add("hide")}>
              Cancel
            </Button>
            <div style={{width: 10}}/>
            <Button kind="alt" weight="purple" id="hostprofile__modal_brow-submit" className="hostprofile__modal_brow-submit fade" onClick={this.handleSubmit}>
              Save
            </Button>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
