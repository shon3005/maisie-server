import LargeText from '../../../shared/components/text/largeText.js';
import Button from '../../../shared/components/button.js';

function handleClick() {
  // close modal
  document.getElementById("onjoinmodal").classList.add('hide');
}

export default (props) =>
  <div id="onjoinmodal" className="hide circle_askmodal col-c-c">
    <div className="col-c-c">
      <div className="row-c-c"><LargeText>Request Sent.</LargeText></div>
      <div style={{height: 10}} />
      <div className="circle_askmodal-text">{props.user.firstName + " has been notified of your request"}<br />and will reach out with next steps.</div>
      <Button kind="alt" weight="dark" onClick={handleClick}>Okay</Button>
    </div>
  </div>
