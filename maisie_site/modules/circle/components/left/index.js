import LargeText from '../../../../shared/components/text/largeText.js';
import Hosted from './components/hosted.js';
import Divider from './components/divider.js';
import Tags from './components/tags.js';
import Calendar from './components/calendar/index.js';
import Location from './components/location.js';


const Sub = (props) => <div className="circle_left__subhead">{props.children}</div>
var classNames = require('classnames')
export default (props) => {
  const location = props.circle && props.circle.locationType ? props.circle.locationType : "private space";
  return (
    <div className={classNames(["circle_left", {"dark_theme": props.dark}])}>
      <LargeText>{props.circle ? props.circle.title : null}</LargeText>
      <div style={{height: 20}} />
      <Hosted host={{
        name: props.host.firstName + ' ' + props.host.lastName,
        license: props.host.license,
        imageUrl: props.host.imageUrl
      }} abb />
      <div style={{height: 20}} />
      <div className="circle_left_tags row">
        <Tags tags={props.circle.tags ? props.circle.tags : null} />
      </div>
      <Divider />
      <Sub>description</Sub>
      <div className="circle_left-text dark_theme_primary_text">{props.circle ? props.circle.description : null}</div>
      <Divider />
      <Sub>scheduling</Sub>
      <Calendar
        date={props.circle.startDate}
        time={props.circle ? props.circle.hour + ':' + props.circle.minute + ' ' + props.circle.ampm.toUpperCase() : null}
        length={props.circle ? props.circle.length : null}
        frequency={props.circle.frequency}
      />
      <Divider />
      <Sub>who should join this circle?</Sub>
      <div className="dark_theme_primary_text circle_left-text">{props.circle.whoShouldJoin}</div>
      <Divider />

      <Sub>location</Sub>
      <div style={{height: 20}} />
      <Location neighborhood={props.circle.neighborhood} type={location} />
      <div style={{height: 20}} />
      <Divider />
      <Sub>about the host</Sub>
      <Hosted host={{
        name: props.host.firstName + ' ' + props.host.lastName,
        imageUrl: props.host.imageUrl,
        description: props.host.description,
        education: props.host.education,
        license: props.host.license
      }} />
    </div>
  );
}
