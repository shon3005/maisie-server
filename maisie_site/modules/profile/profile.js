import Button from '../../shared/components/button.js';

const Spacer = (props) => <div style={{height: props.height}} />

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: false,
      saveMessage: "Save Profile",
    }
  }
  render() {
    return(
      <form className="profile__inner col">
        <div className="profile__inner-title row-sb-c">
          <div className="row-fs-c">
            <div className="img" style={{backgroundImage: `url(${this.props.user.imageUrl || 'https://s3.amazonaws.com/maisie-files/shared/profile-default.svg'})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}} />
            <div>
              <span className="title">{this.props.user.firstName + ' ' + this.props.user.lastName}</span>
              <div className="sub">{this.props.user.email}</div>
            </div>
          </div>
          <Button kind="primary" weight="dark" href="/editprofile">Edit Profile</Button>
        </div>
        <Spacer height={25} />
        <div className="profile__inner_in">
          <div className="profile__inner_in-item">
            <span className="tag">bio</span>
            <br />
            <span className="text">{this.props.user.bio || 'not available'}</span>
            <Spacer height={25} />
            <span className="tag">School</span>
            <br />
            <span className="text">{this.props.user.school || 'not available'}</span>
            <Spacer height={25} />
            <span className="tag">Work</span>
            <br />
            <span className="text">{this.props.user.work || 'not available'}</span>
            <Spacer height={25} />
            <span className="tag">Where you live</span>
            <br />
            <span className="text">{this.props.user.neighborhood || 'not available'}</span>
          </div>
        </div>
        <Spacer height={20} />
        <div className="profile__inner_in">
          <div className="profile__inner_in-item">
            <span className="tag">phone</span>
            <br />
            <span className="text">{this.props.user.phone || 'not available'}</span>
            <Spacer height={25} />
            <span className="tag">gender</span>
            <br />
            <span className="text">Not using this field</span>
          </div>
        </div>
      </form>
    )
  }
}
