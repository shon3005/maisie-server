import SmallText from '../../../shared/components/text/smallText.js';
import Button from '../../../shared/components/button.js';

function handleClick() {
  // send question
  // // // insert code here
  // close modal
  document.getElementById("askmodal").classList.add('hide');
  // erase contents
  document.getElementById("askmodal_textarea").value = "";
}

export default () =>
  <div id="askmodal" className="hide circle_askmodal col-c-c">
    <div className="col">
      <SmallText>Ask this host a question</SmallText>
      <textarea id="askmodal_textarea" rows={6} placeholder="Type your question here...">
      </textarea>
      <div className="row-fe">
        <Button kind="alt" weight="light" onClick={handleClick}>Cancel</Button>
        <Button kind="alt" weight="purple" onClick={handleClick}>Send</Button>
      </div>
    </div>
  </div>
