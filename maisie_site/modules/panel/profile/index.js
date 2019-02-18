import LargeText from '../../../shared/components/text/largeText.js';
import SmallText from '../../../shared/components/text/smallText.js';
import Hosted from '../../circle/components/left/components/hosted.js';

export default (props) =>
  <div>
    <LargeText>Profile</LargeText>
    <SmallText>Here's what users will see:</SmallText>
    <Hosted host={{
      name: props.user.firstName + ' ' + props.user.lastName,
      imageUrl: props.user.host.imageUrl,
      description: props.user.host.description,
      education: props.user.host.education,
      license: props.user.host.license
    }} />
  </div>
