const Error = (props) => <div className="signin__error">{props.children}</div>

export default () =>
  <div className="signupfull col-c-c">
    <div className="signupfull__inner row-c-c">

      <div className="signupfull__inner_right col-c-c">
        <img src="../static/shared/newlogo.svg"/>
                      <div style={{height: 20}} />
        <span className="signupfull__inner_right-welcome">welcome to maisie</span>
        <span className="signupfull__inner_right-subwelcome">create an account</span>
                      <div style={{height: 20}} />
        <form className="col-fs-c">
          <input
            required
            placeholder="email address"
            type="text"
          />
                      <div style={{height: 10}} />
          <input
            required
            placeholder="password"
            type="password"
          />
                      <div style={{height: 10}} />
          <input
          required
          placeholder="confirm password"
          type="password"
          />
          <div style={{height: 10}} />
          <div className="row">
            <input
              required
              placeholder="first name"
              type="text"
            />
            <div style={{width: 10}} />
            <input
              required
              placeholder="last name"
              type="text"
            />
          </div>
                      <div style={{height: 20}} />
          <button type="submit">
            Sign Up
          </button>
        </form>
                      <div style={{height: 20}} />
        <a className="signuplink" href="/signin">Already have an account?</a>

        <Error></Error>
      </div>
    </div>
  </div>
