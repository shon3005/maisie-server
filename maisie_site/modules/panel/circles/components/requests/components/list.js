import React, {Component} from 'react';
import acceptRequest from '../../../../../../shared/services/accept-request';
import denyRequest from '../../../../../../shared/services/deny-request';

export default class List extends Component {
  state = {

  }
  requests = (a, client, circleId, hostId) => {
    return a.map((req, index) =>
      <div key={index} className="circles_req__ind row-sb-c">
        <div className="circles_req__ind_l col">
          <span className="circles_req__ind_l-name">{req.user.firstName + ' ' + req.user.lastName}</span>
          <a>View Profile</a>
        </div>
        <div className="circles_req__ind_r row-fe-c">
          <a href={'mailto:' + req.user.email} className="email" style={{backgroundImage: "url('../../../../../../../static/shared/email_lightgray.svg')", backgroundRepeat: "no-repeat", backgroundSize: "18px 18px", backgroundPosition: "center"}} />
          <div onClick={() => this.handleAcceptRequest(client, req.id, req.user.id, circleId, hostId)} className="accept" style={{backgroundImage: "url('../../../../../../../static/shared/accept.svg')", backgroundRepeat: "no-repeat", backgroundSize: "15px 15px", backgroundPosition: "center"}} />
          <div onClick={() => this.handleDenyRequest(client, req.id, hostId)} className="deny" style={{backgroundImage: "url('../../../../../../../static/shared/deny.svg')", backgroundRepeat: "no-repeat", backgroundSize: "12px 12px", backgroundPosition: "center"}} />
        </div>
      </div>
    )
  }

  handleAcceptRequest = async (client, requestId, userId, circleId, hostId) => {
    const {data: {acceptRequest: user}} = await acceptRequest(client, requestId, userId, circleId, hostId);
    this.props.updateUser(user);
  }
  
  handleDenyRequest = async (client, requestId, hostId, updateUser) => {
    const {data: {denyRequest: user}} = await denyRequest(client, requestId, hostId);
    this.props.updateUser(user);
  }

  render() {
    return this.props.r.map((circle, index) =>
      <div key={index} className="circles_req">
        <div className="circles_req-title">{circle.title}</div>
        {this.requests(circle.requests || [], this.props.client, circle.id, this.props.host)}
      </div>
    )
  }
}
