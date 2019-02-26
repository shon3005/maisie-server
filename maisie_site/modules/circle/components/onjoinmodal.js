import LargeText from '../../../shared/components/text/largeText.js';
import Button from '../../../shared/components/button.js';
import createRequest from '../../../shared/services/create_request';

const handleClick = async (client, circleId) => {
  // close modal
  const resp = await createRequest(client, circleId);
  console.log(resp);
  document.getElementById("onjoinmodal").classList.add('hide');
}

export default (props) => {
  return <div id="onjoinmodal" className="hide circle_askmodal col-c-c">
    <div className="col-c-c">
      <div className="row-c-c"><LargeText>Request Sent.</LargeText></div>
      <div style={{height: 10}} />
      <div className="circle_askmodal-text">{props.host.firstName + " has been notified of your request"}<br />and will reach out with next steps.</div>
      <Button kind="alt" weight="dark" onClick={() => handleClick(props.client, props.circleId)}>Okay</Button>
    </div>
  </div>
}