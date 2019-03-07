import Headers from './components/headers.js';
import Days from './components/days.js';

var classNames = require('classnames');
var moment = require('moment');


export default (props) => {
  // creates array where first value is month as a number, second is month as letters, third is month as abbreviated letters
  const this_month = [moment(props.date).format("MM"), moment(props.date).format("MMMM"), moment(props.date).format("MMM" + ".")]
  // creates array where first value is day as a number, second is day as a number with example "st" or "nd" after, third is day of the week as a string, fourth is day of the week as a number
  const this_day = [moment(props.date).format("DD"), moment(props.date).format("Do"), moment(props.date).format("ddd"), moment(props.date).format("e")]
  return(
    <div className="circlecal row-sb-c">
      <div className="circlecal__left col-sa">
        <div className="circledetails__item row-fs-c">
          <img src="https://s3.amazonaws.com/maisie-files/circle/day.svg" />
          <div className="col">
            <span className="tag dark_theme_tag_text">starts on</span>
            <span className="text dark_theme_primary_text">{moment(props.date).format("dddd, MMM. Do")}</span>
          </div>
        </div>
        <div className="circledetails__item row-fs-c">
          <img src="https://s3.amazonaws.com/maisie-files/circle/time.svg" />
          <div className="col">
            <span className="tag dark_theme_tag_text">time</span>
            <span className="text dark_theme_primary_text">{moment(props.time).format("h:mm A").toString()}</span>
          </div>
        </div>
        <div className="circledetails__item row-fs-c">
          <img src="https://s3.amazonaws.com/maisie-files/circle/length.svg" />
          <div className="col">
            <span className="tag dark_theme_tag_text">length</span>
            <span className="text dark_theme_primary_text">{props.length === 'continuous' ? "continuous" : props.length}</span>
          </div>
        </div>
        <div className="circledetails__item row-fs-c">
          <img src="https://s3.amazonaws.com/maisie-files/circle/length.svg" />
          <div className="col">
            <span className="tag dark_theme_tag_text">frequency</span>
            <span className="text dark_theme_primary_text">{props.frequency}</span>
          </div>
        </div>
      </div>
      <div className="circlecal__in col-c-c">
        <span className="circlecal__in-gridtitle">{this_month[1]}</span>
        <div className="circlecal__in-gridheaders row-sb-c"><Headers /></div>
        <div className="circlecal__in_grid"><Days date={props.date} /></div>
      </div>
    </div>
  )
}
