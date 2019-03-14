import React, {Component} from 'react';
import Cards from './components/cards/index.js';
import Requests from './components/requests/index.js';
import LargeText from '../../../shared/components/text/largeText.js';
import Button from '../../../shared/components/button.js';
import { Query } from 'react-apollo';
import getCircles from '../../../shared/services/get-circles';

function handleClick() {
  document.getElementById("requests_drop").classList.remove('circles_reqs__drop-visible')
  document.getElementById("circles_overlay").classList.add('hide')
  document.getElementById("requests_cta").classList.remove('clicked')
}
export default class Circles extends Component {
  render() {
    return <Query query={getCircles} variables={{userId: this.props.userId}}>
      {getCircles => {
        let requests = getCircles.data && getCircles.data.userCircles ?
          getCircles.data.userCircles.reduce((total, current) => {
            return current.requests && current.requests.length > 0 ?
              total + current.requests.length : total;
          }, 0) : null;
        return <div className="hostcircles__inner">
          <div className="hostcircles__inner-title">
            <LargeText>Circles I'm Hosting</LargeText>
            <div className="circles_overlay hide" id="circles_overlay"
              onClick={() => handleClick()}
              style={{
                position: "absolute",
                height: "100vh",
                width: "100vw",
                zIndex: 99997,
              }}
            />
            <div className="row-fe-c">
              {requests ? <Requests
                requests={requests}
                circles={getCircles.data && getCircles.data.userCircles ? getCircles.data.userCircles : []}
                hostId={this.props.hostId}
                updateUser={this.props.updateUser}
              /> : null}
              <Button kind="primary" weight="purple" href="/create">Start a Circle</Button>
            </div>
          </div>
          <Cards />
        </div>
      }}
    </Query>
  }
}