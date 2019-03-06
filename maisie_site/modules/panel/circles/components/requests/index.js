import List from './components/list.js';
import { ApolloConsumer } from 'react-apollo';
var classNames = require('classnames');
import React, {Component} from 'react';

function handleClick() {
  document.getElementById("requests_drop").classList.add('circles_reqs__drop-visible')
  document.getElementById("circles_overlay").classList.remove('hide')
  document.getElementById("requests_cta").classList.add('clicked')
}

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRequests: props.requests
    }
  }
  render() {
    return this.props.requests ? <div className={classNames(["circles_reqs", "col-fs-fe", {"hide": this.state.numberOfRequests === 0}])}>
      <div
        id={'requests_cta'}
        onClick={() => handleClick()}
        className="circles_reqs-cta col-c-c"
      >{"Requests " + (this.state.numberOfRequests ? `(${this.state.numberOfRequests.toString()})` : "")}</div>
      <div className="circles_reqs__drop col" id="requests_drop">
        <div className="circles_reqs__drop_inner col">
          <ApolloConsumer>
            {client =>
              <List
                r={this.props.circles || []}
                client={client}
                hostId={this.props.hostId}
                updateUser={this.props.updateUser}
                updateRequestCount={() => this.setState({numberOfRequests: this.state.numberOfRequests - 1})}
              />
            }
          </ApolloConsumer>
        </div>
      </div>
    </div> : null
  }
}

export default Requests;