import Disclaimer from './disclaimer.js';
import Field from './field.js';
import LargeText from './largeText.js';
import SmallText from './smallText.js';

var classNames = require('classnames');

export default (props) =>
    <div className="create__inner_cont">
      <SmallText>Price</SmallText>
      <Field title="Price">
        <span>$</span>
        <input
          type="num"
          style={{width: 150, marginLeft: 10}}
          defaultValue={props.price ? props.price : 0}
          placeholder={30.00}
          id="price"
          className={classNames({
            "red": props.price === 0
          })}
        />
      </Field>
    </div>
