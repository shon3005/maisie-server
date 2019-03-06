import React, {Component} from 'react';
import acceptRequest from '../../../../../../shared/services/accept-request';
import denyRequest from '../../../../../../shared/services/deny-request';
import Link from 'next/link'

export default class List extends Component {
  constructor(props) {
    super(props);
    const circleRequests = {}
    props.r.forEach((circle, index) => {
      circleRequests[index] = circle.requests
    });
    this.state = {
      circleRequests
    }
  }

  requests = (a, client, circleId, hostId, circleIndex) => {
    return a.map((req, index) =>
      <div key={index} className="circles_req__ind row-sb-c">
        <div className="circles_req__ind_l col">
          <span className="circles_req__ind_l-name">{req.user.firstName + ' ' + req.user.lastName}</span>
          <Link href={'/profile/' + req.user.id}>
            <a>View Profile</a>
          </Link>
        </div>
        <div className="circles_req__ind_r row-fe-c">
          <a href={'mailto:' + req.user.email} className="email" style={{backgroundImage: "url('https://s3.amazonaws.com/maisie-files/shared/email_lightgray.svg')", backgroundRepeat: "no-repeat", backgroundSize: "18px 18px", backgroundPosition: "center"}} />
          <div onClick={() => this.handleAcceptRequest(index, client, req.id, req.user.id, circleId, hostId, circleIndex)} className="accept" style={{backgroundImage: "url('https://s3.amazonaws.com/maisie-files/shared/accept.svg')", backgroundRepeat: "no-repeat", backgroundSize: "15px 15px", backgroundPosition: "center"}} />
          <div onClick={() => this.handleDenyRequest(index, client, req.id, circleIndex)} className="deny" style={{backgroundImage: "url('https://s3.amazonaws.com/maisie-files/shared/deny.svg')", backgroundRepeat: "no-repeat", backgroundSize: "12px 12px", backgroundPosition: "center"}} />
        </div>
      </div>
    );
  }

  handleAcceptRequest = async (index, client, requestId, userId, circleId, hostId, circleIndex) => {
    await acceptRequest(client, requestId, userId, circleId, hostId);
    this.setState({
      circleRequests: {
        ...this.state.circleRequests, [circleIndex]: this.state.circleRequests[circleIndex].filter((_, i) => i !== index)
      }
    });
    this.props.updateRequestCount();
  }
  
  handleDenyRequest = async (index, client, requestId, circleIndex) => {
    await denyRequest(client, requestId);
    this.setState({
      circleRequests: {
        ...this.state.circleRequests, [circleIndex]: this.state.circleRequests[circleIndex].filter((_, i) => i !== index)
      }
    });
    this.props.updateRequestCount();
  }

  render() {
    return this.props.r.map((circle, index) => {
      return this.state.circleRequests[index].length !== 0 ? <div key={index} className="circles_req">
        <div className="circles_req-title">{circle.title}</div>
        {this.requests(this.state.circleRequests[index] || [], this.props.client, circle.id, this.props.hostId, index)}
      </div> : null
    })
  }
}
