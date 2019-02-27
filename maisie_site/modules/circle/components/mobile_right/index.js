import Button from '../../../../shared/components/button.js';
var classNames= require('classnames')

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joining: false,
    }
  }
  handleJoin(a) {
    !a
      ? document.getElementById("onjoinmodal").classList.remove('hide')
        // *** need to put logic here for changing status to "requested"
      : null
  }
  handleClick() {
    document.getElementById("askmodal").classList.remove('hide');
  }
  render() {
    return(
      <div className="circle_mobile_right row-sb-c">
        <div className="circle_mobile_right_left col">
          <span className="circle_mobile_right_left-title">{this.props.circle.title}</span>
          <span className="circle_mobile_right_left-price"><span className="large">{"$" + this.props.circle.price}</span> per session</span>
          <span className="circle_mobile_right_left-ppl lower">{this.props.circle.min + "-" + this.props.circle.max + " members"}</span>
        </div>
        <Button saving={this.state.joining} kind="primary" weight="purple" onClick={(a) => this.handleJoin(this.props.status)} className={classNames({
          "requested": this.props.status === "requested",
          "joined": this.props.status === "joined",
          "col-c-c": true, })}
        >{
          this.props.status === "requested"
            ? "Requested"
            : this.props.status === "joined"
              ? "Already joined"
              : "Request to join"
        }</Button>
      </div>
    )
  }
}
