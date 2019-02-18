import LargeText from '../../../../shared/components/text/largeText.js';
import Hosted from './components/hosted.js';
import Divider from './components/divider.js';
import Tags from './components/tags.js';
import Details from './components/details.js';
import { Query } from 'react-apollo';
import getCircle from '../../../../shared/services/get-circle';

const Sub = (props) => <div className="circle_left__subhead">{props.children}</div>
var classNames = require('classnames')
export default (props) => {
  return (
    <Query query={getCircle} variables={{ id: props.id }}>
      {getCircle => {
        const day = getCircle.data.circle && getCircle.data.circle.day ? getCircle.data.circle.day : 'tuesday';
        const minute = getCircle.data.circle && getCircle.data.circle.minute ? getCircle.data.circle.minute : 0;
        let hour = getCircle.data.circle && getCircle.data.circle.hour ? getCircle.data.circle.hour : 0;
        hour = getCircle.data.circle && getCircle.data.circle.ampm && getCircle.data.circle.ampm === 'am' ?
          hour :
          hour + 12;
        const date = new Date();
        date.setHours(hour);
        date.setMinutes(minute);
        return (
          <div className={classNames(["circle_left", {"dark_theme": props.dark}])}>
            <LargeText>{getCircle.data.circle ? getCircle.data.circle.title : null}</LargeText>
            <div style={{height: 10}} />
            <Hosted host={{
              name: props.user.firstName + ' ' + props.user.lastName,
              imageUrl: props.user.host.imageUrl
            }} abb />
            <div style={{height: 10}} />
            <div className="circle_left_tags row">
              <Tags tags={props.d.tags} />
            </div>
            <Divider />
            <Sub>description</Sub>
            <div className="circle_left-text dark_theme_primary_text">{getCircle.data.circle ? getCircle.data.circle.description : null}</div>
            <Divider />
            <Sub>details</Sub>
            <div style={{height: 10}} />
            <Details
              day={day}
              time={date}
              length={getCircle.data.circle ? getCircle.data.circle.length : null}
              type={getCircle.data.circle ? getCircle.data.circle.locationType : null}
              neighborhood={getCircle.data.circle ? getCircle.data.circle.neighborhood : null}
            />
            <div style={{height: 10}} />
            <Divider />
            <Sub>who should join this circle?</Sub>
            <div className="dark_theme_primary_text circle_left-text">{props.d.who_should_join}</div>
            <Divider />
            <Sub>about the host</Sub>
            <Hosted host={{
              name: props.user.firstName + ' ' + props.user.lastName,
              imageUrl: props.user.host.imageUrl,
              description: props.user.host.description,
              education: props.user.host.education,
              license: props.user.host.license
            }} />
          </div>
        );
      }}
    </Query>
  );
}