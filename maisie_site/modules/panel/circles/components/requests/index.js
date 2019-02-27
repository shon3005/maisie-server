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
  render() {
    return <div className={classNames(["circles_reqs", "col-fs-fe", {"hide": !this.props.requests}])}>
      <div
        id={'requests_cta'}
        onClick={() => handleClick()}
        className="circles_reqs-cta col-c-c"
      >{"Requests " + (this.props.requests ? `(${this.props.requests.toString()})` : "")}</div>
      <div className="circles_reqs__drop col" id="requests_drop">
        <div className="circles_reqs__drop_inner col">
          <ApolloConsumer>
            {client =>
              <List r={this.props.circles || []} client={client} host={this.props.host} updateUser={this.props.updateUser} />
            }
          </ApolloConsumer>
        </div>
      </div>
    </div>
  }
}

export default Requests;