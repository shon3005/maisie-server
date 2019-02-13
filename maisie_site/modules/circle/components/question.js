import SmallText from '../../../shared/components/text/smallText.js';

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
      <div onClick={handleClick} className="btn send col-c-c">Send</div>
      <div onClick={handleClick} className="btn cancel col-c-c">Cancel</div>
    </div>
  </div>
