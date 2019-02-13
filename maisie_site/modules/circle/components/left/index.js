import LargeText from '../../../../shared/components/text/largeText.js';
import Hosted from './components/hosted.js';
import Divider from './components/divider.js';
import Tags from './components/tags.js';

export default (props) =>
  <div className="circle_left">
    <LargeText>{props.d.title}</LargeText>
    <div style={{height: 10}} />
    <Hosted host={props.d.host} abb />
    <Tags tags={props.d.tags} />
    <Divider />
    <Hosted host={props.d.host} />
  </div>
