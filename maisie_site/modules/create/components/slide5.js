import Disclaimer from './disclaimer.js';
import Field from './field.js';
import LargeText from './largeText.js';
import SmallText from './smallText.js';

var classNames = require('classnames');

const Divider = () =>
  <div
    style={{
      height: 2,
      backgroundColor: "rgba(5,45,84,.10)",
      width: "100%",
      marginLeft: "calc(105px + 5%)",
      marginTop: 50,
      marginBottom: 35,
    }}
  />

export default (props) =>
    <div className="create__inner_cont">
      <LargeText>Review</LargeText>
      <SmallText>Is everything correct?</SmallText>
      <Field title="Title"><span className="create__field_input-textbox">{props.title}</span></Field>
      <Field title="Description"><span className="create__field_input-textbox">{props.description}</span></Field>
      <Divider />
      <Field title="Day"><span className="create__field_input-textbox" style={{textTransform: "capitalize"}}>{props.day}</span></Field>
      <Field title="Frequency"><span className="create__field_input-textbox" style={{textTransform: "capitalize"}}>{props.frequency}</span></Field>
      <Field title="Length"><span className="create__field_input-textbox" style={{textTransform: "capitalize"}}>{props.length}</span></Field>
      <Field title="Time"><span className="create__field_input-textbox">{props.hour + ":" + props.minute + " " + props.ampm}</span></Field>
      <Divider />
      <Field title="Location Type"><span className="create__field_input-textbox" style={{textTransform: "capitalize"}}>{props.location_type}</span></Field>
      <Field title="Neighborhood"><span className="create__field_input-textbox" style={{textTransform: "capitalize"}}>{props.neighborhood}</span></Field>
      <Field private={true} title="Address"><span className="create__field_input-textbox" style={{textTransform: "capitalize"}}>{props.address}</span></Field>
      <Divider />
      <Field title="Price"><span className="create__field_input-textbox">{"$" + props.price}</span></Field>
    </div>
