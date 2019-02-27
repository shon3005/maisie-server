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
          <label id="create_slide1_imageupload_label" htmlFor="create_slide1_imageupload">Choose a file</label>
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
      <Field title="Tags">
        <input
          type="text"
          defaultValue={props.tags ? props.tags : ""}
          placeholder="active, outdoors"
          id="tags"
          className={classNames({
            "red": props.tags === ""
          })}
        />
      </Field>
      <Disclaimer>Separate with commas, please.</Disclaimer>
      <Field title="Who should join this Circle?">
        <textarea
          id="whoshouldjoin"
          rows={8}
          className={classNames({"red": props.whoshouldjoin === ""})}
          defaultValue={props.whoshouldjoin ? props.whoshouldjoin : ""}
        />
      </Field>
      <Disclaimer>Maybe you don't want just anyone joining your Circle. Here is your place to tell the world who should join, and who should not.</Disclaimer>
      <Field title="Host">
        <div className="create__hostinfo row-fs-c">
          <div className="create__hostinfo-img" style={{backgroundImage: `url(${props.user.host.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}} />
          <span>{props.user.firstName + ' ' + props.user.lastName}</span>
          <div className="create__hostinfo-tag col-c-c">{props.user.host.license}</div>
        </div>
      </Field>
    </div>
