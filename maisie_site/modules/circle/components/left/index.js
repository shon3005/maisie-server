import LargeText from '../../../../shared/components/text/largeText.js';
import Hosted from './components/hosted.js';
import Divider from './components/divider.js';
import Tags from './components/tags.js';
import Location from './components/location.js';
import Details from './components/details.js';

const Sub = (props) => <div className="circle_left__subhead">{props.children}</div>
var classNames = require('classnames')
export default (props) =>
  <div className={classNames(["circle_left", {"dark_theme": props.dark}])}>
    <LargeText>{props.d.title}</LargeText>
    <div style={{height: 10}} />
    <Hosted host={props.d.host} abb />
    <div style={{height: 10}} />
    <div className="circle_left_tags row">
      <Tags tags={props.d.tags} />
    </div>
    <Divider />
    <Sub>description</Sub>
    <div className="circle_left-text dark_theme_primary_text">{props.d.description}</div>
    <Divider />
    <Sub>details</Sub>
    <div style={{height: 10}} />
    <Details
      day={props.d.day}
      start={props.d.start}
      time={props.d.time}
      length={props.d.program_length}
      type={props.d.space_type}
      neighborhood={props.d.neighborhood}
    />
    <div style={{height: 10}} />
    <Divider />
    <Sub>who should join this circle?</Sub>
    <div className="dark_theme_primary_text circle_left-text">{props.d.who_should_join}</div>
    <Divider />
    <Sub>about the host</Sub>
    <Hosted host={props.d.host} />
  </div>
