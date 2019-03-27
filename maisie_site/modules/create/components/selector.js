var classNames = require('classnames');
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: props.subscription ? 'right' : 'left'
    }
  }
  isSubscription = (value) => {
    this.setState({ active: value })
    value === 'right' ? this.props.isSubscription(true) : this.props.isSubscription(false);
  }
  render() {
    return(
      <div className="create-session row-sb-c">
        <div className={classNames({
          "create-session__select": true,
          "col-c-c": true,
          "active": this.state.active === "left",
        })} onClick={() => this.isSubscription('left')}>One-time fee</div>
        <div className={classNames({
          "create-session__select": true,
          "col-c-c": true,
          "active": this.state.active === "right",
        })} onClick={() => this.isSubscription('right')}>Per session</div>
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
