import Disclaimer from '../../../shared/components/text/disclaimer.js';
import Field from '../../../shared/components/text/field.js';
import LargeText from '../../../shared/components/text/largeText.js';
import SmallText from '../../../shared/components/text/smallText.js';

var classNames = require('classnames');

export default (props) =>
    <div className="create__inner_cont">
      <SmallText>Economics</SmallText>
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
      <Field title="Minimum">
        <select
          id="min"
          style={{width: 100}}
          defaultValue={props.min ? props.min : 3}
        >
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
        </select>
      </Field>
      <Disclaimer>What is the lowest number of people you need for the group to start?</Disclaimer>
    </div>
