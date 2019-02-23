import SmallText from '../../../shared/components/text/smallText.js';
import Button from '../../../shared/components/button.js';

function handleClick() {
  // send question
  // // // insert code here
  document.getElementById("askmodal").classList.add('hide'); // close modal
  document.getElementById("askmodal_textarea").value = ""; // erase contents
}

function handleChange() {
  var val = document.getElementById("askmodal_textarea").value; // get value of textarea
  val ? document.getElementById("askmodal_sendbutton").classList.remove('fade') : document.getElementById("askmodal_sendbutton").classList.add('fade'); // if changes, allow submit button
}

export default () =>
  <div id="askmodal" className="hide circle_askmodal col-c-c">
    <div className="col">
      <SmallText>Ask this host a question</SmallText>
      <textarea onChange={handleChange} id="askmodal_textarea" rows={6} placeholder="Type your question here...">
      </textarea>
      <div className="row-fe">
        <Button kind="alt" weight="light" onClick={handleClick}>Cancel</Button>
        <Button id="askmodal_sendbutton" className="fade" kind="alt" weight="purple" onClick={handleClick}>Send</Button>
      </div>
    </div>
  </div>
