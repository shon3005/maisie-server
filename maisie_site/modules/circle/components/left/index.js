import LargeText from '../../../../shared/components/text/largeText.js';
import Hosted from './components/hosted.js';
import Divider from './components/divider.js';
import Tags from './components/tags.js';
import Details from './components/details.js';
import Calendar from './components/calendar/index.js';
import Location from './components/location.js';


const Sub = (props) => <div className="circle_left__subhead">{props.children}</div>
var classNames = require('classnames')
export default (props) => {
  const day = props.circle && props.circle.day ? props.circle.day : 'tuesday';
  const minute = props.circle && props.circle.minute ? props.circle.minute : 0;
  const location = props.circle && props.circle.locationType ? props.circle.locationType : "private space";
  let hour = props.circle && props.circle.hour ? props.circle.hour : 0;
  hour = props.circle && props.circle.ampm && props.circle.ampm === 'am' ?
    hour :
    hour + 12;
  const date = new Date();
  date.setHours(hour);
  date.setMinutes(minute);
  return (
    <div className={classNames(["circle_left", {"dark_theme": props.dark}])}>
      <LargeText>{props.circle ? props.circle.title : null}</LargeText>
      <div style={{height: 20}} />
      <Hosted host={{
        name: props.user.firstName + ' ' + props.user.lastName,
        license: props.user.host.license,
        imageUrl: props.user.host.imageUrl
      }} abb />
      <div style={{height: 20}} />
      <div className="circle_left_tags row">
        <Tags tags={props.d.tags ? props.d.tags : null} />
      </div>
      <Divider />
      <Sub>description</Sub>
      <div className="circle_left-text dark_theme_primary_text">{props.circle ? props.circle.description : null}</div>
      <Divider />
      <Sub>scheduling</Sub>
      <Calendar date={"2019-04-20"} time={props.circle ? props.d.time : null} length={props.circle ? props.circle.length : null} />
      <Divider />
      <Sub>who should join this circle?</Sub>
      <div className="dark_theme_primary_text circle_left-text">{props.d.who_should_join}</div>
      <Divider />

      <Sub>location</Sub>
      <div style={{height: 20}} />
      <Location neighborhood={props.circle.neighborhood} type={location} />
      <div style={{height: 20}} />
      <Divider />
      <Sub>about the host</Sub>
      <Hosted host={{
        name: props.user.firstName + ' ' + props.user.lastName,
        imageUrl: props.user.host.imageUrl,
        description: props.user.host.description,
        education: props.user.host.education,
        license: props.user.host.license
      }} />
    </div>
  );
}
