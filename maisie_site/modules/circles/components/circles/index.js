import Cards from './components/cards/index.js';

export default (props) =>
  <div className="mycircles__inner">
    <div className="mycircles__inner-title row-sb-c">
      <span>My Circles</span>
      <a href="/create" className="col-c-c">Start a Circle</a>
    </div>
    <Cards />
  </div>
