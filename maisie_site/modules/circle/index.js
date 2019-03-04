import Left from './components/left/index.js';
import Right from './components/right/index.js';
import MobileRight from './components/mobile_right/index.js';
import Question from './components/question';
import OnJoinModal from './components/onjoinmodal';
import { ApolloConsumer } from 'react-apollo';
var classNames = require('classnames');
import React, {Component} from 'react';

class CircleModule extends Component {
  async componentDidMount() {
    await this.props.updateUser(this.props.user);
  }
  render() {
    return (
      <ApolloConsumer>
        {client =>
          <div className={classNames(["circle__inner", "col-fs-c", {"dark_theme": this.props.dark}])}>
            <Question circleId={this.props.circle.id} client={client} />
            {this.props.user ? <OnJoinModal user={this.props.user} circleId={this.props.circle.id} client={client} host={this.props.host} /> : null}
            <div className={classNames(["circle__inner-img", {"dark_theme": this.props.dark}])}>
              <div className="circle__inner-img-shadow" />
              {this.props.dark ? <div className="circle__inner-img-bshadow" /> : null}
              <div className="circle__inner-img-filter" />
              {this.props.circle && this.props.circle.imageUrl ? <div className="circle__inner-img-img" style={{backgroundImage: `url(${this.props.circle.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}} /> : null}
            </div>
            <div className={classNames(["circle__inner_cont", "row-c", {"dark_theme": this.props.dark}])}>
              <Left
                circle={this.props.circle}
                host={this.props.host}
                user={this.props.user}
                id={this.props.id}
                dark={this.props.dark} // sets color scheme
                d={this.props.d} // sets dummy data for component
              />
              <div className="circle__inner_cont-spcr" />
              <Right
                circle={this.props.circle}
                dark={this.props.dark} // sets color scheme
                d={this.props.d} // sets dummy data for component
                user={this.props.user}
                client={client}
                updateUser={this.props.updateUser}
                status={""}
              />
              <MobileRight
                circle={this.props.circle}
                dark={this.props.dark} // sets color scheme
                d={this.props.d} // sets dummy data for component
                user={this.props.user}
                client={client}
                updateUser={this.props.updateUser}
                status={""}
              />
            </div>
          </div>
        }
      </ApolloConsumer>
    );
  }
}

export default CircleModule;
