const Error = (props) => <div className="signin__error">{props.children}</div>

export default () =>
  <div className="signin col-c-c">
    <img src="../static/shared/newlogo.svg"/>
                  <div style={{height: 20}} />
    <span className="signin-welcome">welcome back</span>
    <span className="signin-subwelcome">please sign in</span>
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
                  <div style={{height: 20}} />
      <button type="submit">
        Sign In
      </button>
    </form>
    {/*<Error>Sample Error</Error>*/}
  </div>
