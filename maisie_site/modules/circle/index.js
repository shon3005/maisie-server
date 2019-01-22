import CircleHost from './components/circlehost';
import MeetingTime from './components/meetingtime';

export default () =>
  <div className="circle row-sb">
    <div className="circle__cent col">
      <span>Testy Testers</span>
    </div>
    <div className="circle__side col">
      <CircleHost />
      <MeetingTime />
    </div>
  </div>
