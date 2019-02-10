import Disclaimer from './disclaimer.js';
import Field from './field.js';
import LargeText from './largeText.js';
import SmallText from './smallText.js';

var classNames = require('classnames');

export default (props) =>
    <div className="create__inner_cont">
      <SmallText>Location</SmallText>
      <Field title="Location Type">
        <select
          id="location_type"
          style={{width: "100%"}}
          defaultValue={props.location_type ? props.location_type : ""}
        >
          <option value="private space">Private Space</option>
          <option value="shared space">Shared Space</option>
          <option value="outdoors">Outdoors</option>
        </select>
      </Field>
      <Field title="Neighborhood">
        <input
          type="text"
          defaultValue={props.neighborhood ? props.neighborhood : ""}
          placeholder="Williamsburg"
          id="neighborhood"
          className={classNames({
            "red": props.neighborhood === ""
          })}
        />
      </Field>
      <Disclaimer>Please include this so that visitors to your listing will know where the session takes place.</Disclaimer>
      <Field title="Full Address" private={true}>
        <input
          type="text"
          defaultValue={props.address ? props.address : ""}
          placeholder="123 Awesome Ave, New York, NY 00001"
          id="address"
          className={classNames({
            "red": props.address === ""
          })}
        />
      </Field>
      <Disclaimer>This is the address that the Circle will meet at (not your home address, unless you plan to meet there). This address will not be shown publicly and will only be given out once a Circle member has been approved to join.</Disclaimer>
    </div>
