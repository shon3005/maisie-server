export default (props) =>
  <div className="col-c-c">
    <div className="signup__main_in col-fs-c">
      <div className="row">
        <img className="signup_logo" src="../../../../static/shared/icon.svg" />
        <img className="signup_wordmark" src="../../../../static/shared/wordmark.svg" />
      </div>
      <span className="signup__main_in-text">Check your email for further instructions.</span>
      <button onClick={props.handleButton}>Okay</button>
    </div>
  </div>
