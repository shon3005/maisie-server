import LargeText from '../../../../shared/components/text/largeText.js';
import Hosted from './components/hosted.js';
import Divider from './components/divider.js';
import Tags from './components/tags.js';
import Location from './components/location.js';
import Details from './components/details.js';

const Sub = (props) => <div className="circle__subhead">{props.children}</div>

export default (props) =>
  <div className="circle_left">
    <LargeText>{props.d.title}</LargeText>
    <div style={{height: 10}} />
    <Hosted host={props.d.host} abb />
    <div style={{height: 10}} />
    <div className="circle_left_tags row">
      <Tags tags={props.d.tags} />
    </div>
    <Divider />
    <Sub>description</Sub>
    <div className="circle_l-text">{props.d.description}</div>
    <Divider />
    <Sub>details</Sub>
    <div style={{height: 10}} />
    <Details d={props.d} />
    <div style={{height: 10}} />
    <Divider />
    <Sub>about the host</Sub>
    <Hosted host={props.d.host} />
  </div>
