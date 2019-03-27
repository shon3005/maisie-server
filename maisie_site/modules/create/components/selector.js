var classNames = require('classnames');
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: "left"
    }
  }
  render() {
    return(
      <div className="create-session row-sb-c">
        <div className={classNames({
          "create-session__select": true,
          "col-c-c": true,
          "active": this.state.active === "left",
        })} onClick={() => this.setState({ active: "left" })}>One-time fee</div>
        <div className={classNames({
          "create-session__select": true,
          "col-c-c": true,
          "active": this.state.active === "right",
        })} onClick={() => this.setState({ active: "right" })}>Per session</div>
        <div className={classNames({
          "create-session__active": true,
          "left": this.state.active === "left",
          "right": this.state.active === "right",
        })}>
        </div>
      </div>
    )
  }
}
