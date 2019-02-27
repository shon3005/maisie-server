import LargeText from '../../shared/components/text/largeText.js';
import SmallText from '../../shared/components/text/smallText.js';
import Button from '../../shared/components/button.js';
import Field from '../../shared/components/text/field.js';
import Disclaimer from '../../shared/components/text/disclaimer.js';

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
            <div className="img" />
            <div>
              <span className="title">Chester Cheeseburger</span>
              <div className="sub">matthew@heymaisie.com</div>
            </div>
          </div>
          <Button kind="primary" weight="dark" href="/editprofile">Edit Profile</Button>
        </div>
        <Spacer height={25} />
        <div className="profile__inner_in">
          <div className="profile__inner_in-item">
            <span className="tag">bio</span>
            <br />
            <span className="text">bla bla bla</span>
            <Spacer height={25} />
            <span className="tag">School</span>
            <br />
            <span className="text">NYU</span>
            <Spacer height={25} />
            <span className="tag">Work</span>
            <br />
            <span className="text">Engineer</span>
            <Spacer height={25} />
            <span className="tag">Where you live</span>
            <br />
            <span className="text">New York</span>
          </div>
        </div>
        <Spacer height={20} />
        <div className="profile__inner_in">
          <div className="profile__inner_in-item">
            <span className="tag">phone</span>
            <br />
            <span className="text">198-419-2283</span>
            <Spacer height={25} />
            <span className="tag">gender</span>
            <br />
            <span className="text">Male</span>
          </div>
        </div>
      </form>
    )
  }
}
