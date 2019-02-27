import List from './components/list.js';

var classNames = require('classnames');

const dummy = [
  {
    "name": "example circle 1",
    "requests": ["Jasper Syllabus", "Ladder Jose", "Ferris Chump"],
  }, {
    "name": "example circle 2",
    "requests": ["Ruler Flush", "Harold Just"],
  }
]

function handleClick() {
  document.getElementById("requests_drop").classList.add('circles_reqs__drop-visible')
  document.getElementById("circles_overlay").classList.remove('hide')
  document.getElementById("requests_cta").classList.add('clicked')
}

export default (props) =>
  <div className={classNames(["circles_reqs", "col-fs-fe", {"hide": !props.requests}])}>
    <div
      id={'requests_cta'}
      onClick={() => handleClick()}
      className="circles_reqs-cta col-c-c"
    >{"Requests " + (props.requests ? `(${props.requests.toString()})` : "")}</div>
    <div className="circles_reqs__drop col" id="requests_drop">
      <div className="circles_reqs__drop_inner col">
        <List r={dummy} />
      </div>
    </div>
  </div>
