import LargeText from '../../../../shared/components/text/largeText.js';
import Hosted from './components/hosted.js';

export default (props) =>
  <div className="circle_left">
    <LargeText>{props.d.title}</LargeText>
    <Hosted host={props.d.host} />
  </div>
