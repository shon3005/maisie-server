import LargeText from '../../../shared/components/text/largeText.js';
import SmallText from '../../../shared/components/text/smallText.js';
import Button from '../../../shared/components/button.js';
import Hosted from '../../circle/components/left/components/hosted.js';

export default (props) => 
  <div className="hostprofile">
    <div className="row-sb-c">
      <div className="col">
        <LargeText>Profile</LargeText>
        <SmallText>Here's what users will see:</SmallText>
      </div>
      <div className="hostprofile__edit col">
        <Button kind="primary" weight="light" onClick={() => document.getElementById("profile_modal").classList.remove("hide")}>Edit Information</Button>
      </div>
    </div>
    <div className="hostprofile__hosted">
    <Hosted host={{
      name: props.user.firstName + ' ' + props.user.lastName,
      imageUrl: props.user.host.imageUrl,
      description: props.user.host.description,
      education: props.user.host.education,
      license: props.user.host.license
    }} />
    </div>
  </div>
