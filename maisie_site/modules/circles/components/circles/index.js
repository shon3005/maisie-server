import Cards from './components/cards/index.js';
import Requests from './components/requests/index.js';

export default (props) =>
  <div className="mycircles__inner">
    <div className="mycircles__inner-title row-sb-c">
      <span>My Circles</span>
      <div className="row-fe-c">
        <Requests requests={props.requests} />
        <a href="/create" className="col-c-c">Start a Circle</a>
      </div>
    </div>
    <Cards/>
  </div>
