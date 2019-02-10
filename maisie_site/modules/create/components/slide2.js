import Disclaimer from './disclaimer.js';
import Field from './field.js';
import LargeText from './largeText.js';
import SmallText from './smallText.js';

var classNames = require('classnames');

const group = {
  "title": "test",
  "pending": true,
}


export default (props) =>
    <div className="create__inner_cont">
      <SmallText>Timing</SmallText>
      <Field title="Meeting Day">
        <select
          id="day"
          style={{width: "100%"}}
          defaultValue={props.day ? props.day : ""}
        >
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </Field>
      <Field title="Frequency">
        <select
          id="frequency"
          style={{width: "100%"}}
          defaultValue={props.frequency ? props.frequency : ""}
        >
          <option value="every week">Every Week</option>
          <option value="every other week">Every Other Week</option>
          <option value="once a month">Once a month</option>
        </select>
      </Field>
      <Field title="Length">
        <select
          id="length"
          style={{width: "100%"}}
          defaultValue={props.length ? props.length : ""}
        >
          <option value="continuous">Continuous</option>
          <option value="1 session">1 Session</option>
          <option value="2 sessions">2 Sessions</option>
          <option value="3 sessions">3 Sessions</option>
          <option value="4 sessions">4 Sessions</option>
          <option value="5 sessions">5 Sessions</option>
          <option value="6 sessions">6 Sessions</option>
          <option value="7 sessions">7 Sessions</option>
          <option value="8 sessions">8 Sessions</option>
          <option value="9 sessions">9 Sessions</option>
          <option value="10 sessions">10 Sessions</option>
          <option value="11 sessions">11 Sessions</option>
          <option value="12 sessions">12 Sessions</option>
        </select>
      </Field>
      <Disclaimer>Most groups are on-going, but you can set a length if you'd like.</Disclaimer>

      <Field title="Time">
        <select
          id="hour"
          style={{width: 75}}
          defaultValue={props.hour ? props.hour : ""}
        >
          <option value="12">12</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>
        <span style={{marginLeft: 10}}>:</span>
        <select
          id="minute"
          style={{width: 75, marginLeft: 10}}
          defaultValue={props.minute ? props.minute : ""}
        >
          <option value="00">00</option>
          <option value="05">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
        </select>
        <select
          id="ampm"
          style={{width: 75, marginLeft: 23}}
          defaultValue={props.ampm ? props.ampm : ""}
        >
          <option value="pm">PM</option>
          <option value="am">AM</option>
        </select>
      </Field>
    </div>
