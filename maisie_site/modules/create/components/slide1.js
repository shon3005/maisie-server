import Disclaimer from '../../../shared/components/text/disclaimer.js';
import Field from '../../../shared/components/text/field.js';
import LargeText from '../../../shared/components/text/largeText.js';
import SmallText from '../../../shared/components/text/smallText.js';

var classNames = require('classnames');

export default (props) =>
    <div className="create__inner_cont">
      <LargeText>Start a new Circle</LargeText>
      <SmallText>General Information</SmallText>
      <Field title="Title">
        <input
          type="text"
          defaultValue={props.title ? props.title : ""}
          placeholder="Female Founders Stand Together"
          id="title"
          className={classNames({
            "red": props.title === ""
          })}
        />
      </Field>
      <Disclaimer>This title is the first thing about your Circle that users will see. Choose something creative!</Disclaimer>
      <Field title="Image">
        <input
          type="file"
          id="create_slide1_imageupload" name="image"
          accept="image/png, image/jpeg"
          onChange={e => props.addedImage(e)}
        />
          <label htmlFor="create_slide1_imageupload">Choose a file</label>
          <span>{props.image ? "Uploaded: " + props.image : null}</span>
      </Field>
      <Field title="Description">
        <textarea
          id="description"
          rows={8}
          className={classNames({"red": props.description === ""})}
          defaultValue={props.description ? props.description : ""}
        />
      </Field>
      <Disclaimer>Here's your chance to give readers more information about your circle. Who is this Circle meant for? What kinds of goals will you work towards? Who will be happy in this group?</Disclaimer>
      <Field title="Host">
        <div className="create__hostinfo row-fs-c">
          <div className="create__hostinfo-img"><img src="../../static/shared/matthew.png" /></div>
          <span>Chester Chzburger</span>
          <div className="create__hostinfo-tag col-c-c">LCSW</div>
        </div>
      </Field>
    </div>
