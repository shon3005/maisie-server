import React, {Component} from 'react';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';
import { connect } from 'react-redux';
import * as actions from '../shared/services/actions';
import { ApolloConsumer } from 'react-apollo';
import PanelModule from '../modules/panel';

class Panel extends Component {
  state = {}

  static getInitialProps = ({ctx}) => {
    let cookies;
    if (ctx.req) {
      cookies = cookie.parse(ctx.req.headers.cookie || '');
      if (!cookies.token) {
        redirect(ctx, '/')
      }
    } else {
      cookies = cookie.parse(document.cookie || '');
    }
    return {sub: ctx.query.sub, code: ctx.query.code, state: ctx.query.state, token: cookies.token};
  }

  render() {
    let sub = this.props.sub ? this.props.sub : "finances";
    return(
      <ApolloConsumer>
        {client =>
          <PanelModule token={this.props.token} client={client} updateUser={this.props.updateUser} user={this.props.user} sub={sub} state={this.props.state} code={this.props.code}/>
        }
      </ApolloConsumer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps, actions)(Panel);
