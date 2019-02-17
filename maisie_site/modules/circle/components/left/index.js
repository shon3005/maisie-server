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
        return (
          <div className={classNames(["circle_left", {"dark_theme": props.dark}])}>
            <LargeText>{getCircle.data.circle ? getCircle.data.circle.title : null}</LargeText>
            <div style={{height: 10}} />
            <Hosted host={{
              name: props.user.firstName + ' ' + props.user.lastName
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
              day={getCircle.data.circle ? getCircle.data.circle.day : null}
              start={props.d.start}
              time={getCircle.data.circle ? getCircle.data.circle.hour + ':' + getCircle.data.circle.minute + ' ' + getCircle.data.circle.ampm : null}
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
              name: props.user.firstName + ' ' + props.user.lastName
            }} />
          </div>
        );
      }}
    </Query>
  );
}