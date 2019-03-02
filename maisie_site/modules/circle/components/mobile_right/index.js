import Button from '../../../../shared/components/button.js';
var classNames= require('classnames');
import Router from 'next/router';
import createRequest from '../../../../shared/services/create_request';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joining: false,
      statis: ''
    }
  }
  componentDidMount = () => {
    this.props.user && this.props.user.requests ? this.props.user.requests.forEach((request) => {
      (request.circle.id === this.props.circle.id) ? this.setState({status: 'requested'}) : null;
    }) : null;

    this.props.user && this.props.user.members ? this.props.user.members.forEach((member) => {
      (member.circle.id === this.props.circle.id) ? this.setState({status: 'joined'}) : null;
    }) : null;
  }
  handleJoin = async (a) => {
    if (this.props.user) {
      this.setState({joining: true});
      !a
        ? document.getElementById("onjoinmodal").classList.remove('hide')
          // *** need to put logic here for changing status to "requested"
        : null
      const {data: {createRequest: {user: user}}} = await createRequest(client, circleId);
      await this.props.updateUser(user);
      this.setState({joining: false, status: 'requested'});
    } else {
      Router.push('/signin');
    }
  }
  handleClick() {
    if (this.props.user) {
      document.getElementById("askmodal").classList.remove('hide');
    } else {
      Router.push('/signin');
    }
  }
  render() {
    const isHostCircle = this.props.user ? this.props.user.circles.find((circle) => circle.id === this.props.circle.id) : null;
    return(
      <div className="circle_mobile_right row-sb-c">
        <div className="circle_mobile_right_left col">
          <span className="circle_mobile_right_left-title">{this.props.circle.title}</span>
          <span className="circle_mobile_right_left-price"><span className="large">{"$" + this.props.circle.price}</span> per session</span>
          <span className="circle_mobile_right_left-ppl lower">{this.props.circle.min + "-" + this.props.circle.max + " members"}</span>
        </div>
        {!isHostCircle ? <Button saving={this.state.joining} kind="primary" weight="purple" onClick={(a) => this.handleJoin(this.props.status, this.props.client, this.props.circle.id)} className={classNames({
          "requested": this.state.status === "requested",
          "joined": this.state.status === "joined",
          "col-c-c": true, })}
        >{
          this.state.status === "requested"
            ? "Requested"
            : this.state.status === "joined"
              ? "Already joined"
              : "Request to join"
        }</Button> : null}
      </div>
    )
  }
}
