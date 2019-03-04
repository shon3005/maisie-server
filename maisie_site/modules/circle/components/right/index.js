import React from 'react';
import Button from '../../../../shared/components/button.js';
var classNames= require('classnames');
import createRequest from '../../../../shared/services/create_request';
import Router from 'next/router';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joining: false,
      status: ''
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
  handleJoin = async (a, client, circleId) => {
    if (this.props.user) {
      this.setState({joining: true});
      if (!this.props.user.last4) {
        Router.push('/settings');
        return;
      }
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
  handleClick = () => {
    if (this.props.user) {
      document.getElementById("askmodal").classList.remove('hide');
    } else {
      Router.push('/signin');
    }
  }
  render() {
    const isHostCircle = this.props.user ? this.props.user.circles.find((circle) => circle.id === this.props.circle.id) : null;
    return(
      <div className="circle_right col-fs-c">
        <div className={classNames(["circle_right__inner", "col-fs-c", { "dark_theme": this.props.dark }])}>
          <div className="circle_right__inner_cont col-fs-c">
            <div className="circle_right__inner_cont-price col-fs-c dark_theme_primary_text">
              <span><span className="large">{"$" + this.props.circle.price}</span> per session</span>
            </div>
            <div style={{height: 10}} />
            <div className="circle_right__inner_cont-price col-fs-c dark_theme_primary_text">
              <span className="lower">{this.props.circle.min + "-" + this.props.circle.max + " members"}</span>
            </div>
            {!isHostCircle ? <div style={{height: 25}} /> : null}
            {!isHostCircle ? <div className="circle_right__inner_cont-join">
              <Button saving={this.state.joining} kind="primary" weight="purple" onClick={(a) => this.handleJoin(this.props.status, this.props.client, this.props.circle.id)} className={classNames({
                "requested": this.state.status === "requested",
                "joined": this.state.status === "joined",
                "col-c-c": true, })}
              >{
                this.state.status === "requested"
                  ? "Requested"
                  : this.state.status === "joined"
                    ? "Already joined"
                    : "Request to join"
              }</Button>
            </div> : null}
            {!isHostCircle ? <div onClick={() => this.handleClick()} className="circle_right__inner_cont-ask col-c-c">Ask a question</div> : null}
          </div>
          {/* can't use this now -> <div className="col-fs-c"><Socials dark={this.props.dark} /></div>*/}
        </div>
      </div>
    )
  }
}
