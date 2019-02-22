import React from 'react';
import Socials from './components/socials.js';
import Button from '../../../../shared/components/button.js';
const Sub = (props) => <div className="circle_left__subhead">{props.children}</div>
var classNames= require('classnames')

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joining: false,
    }
  }
  handleJoin(a) {
    !a
      ? document.getElementById("onjoinmodal").classList.remove('hide')
        // *** need to put logic here for changing status to "requested"
      : null
  }
  handleClick() {
    document.getElementById("askmodal").classList.remove('hide');
  }
  render() {
    return(
      <div className="circle_right col-fs-c">
        <div className={classNames(["circle_right__inner", "col-fs-c", { "dark_theme": this.props.dark }])}>
          <div className="circle_right__inner_cont col-fs-c">
            <div className="circle_right__inner_cont-price col-fs-c dark_theme_primary_text">
              <span><span className="large">{"$" + this.props.circle.price}</span> per session</span>
            </div>
            <div style={{height: 10}} />
            <div className="circle_right__inner_cont-price col-fs-c dark_theme_primary_text">
              <span className="lower">{this.props.circle.min + "-" + this.props.circle.max + " members"}</span>
            </div>
            <div style={{height: 25}} />
            <div className="circle_right__inner_cont-join">
              <Button saving={this.state.joining} kind="primary" weight="purple" onClick={(a) => this.handleJoin(this.props.status)} className={classNames({
                "requested": this.props.status === "requested",
                "joined": this.props.status === "joined",
                "col-c-c": true, })}
              >{
                this.props.status === "requested"
                  ? "Requested"
                  : this.props.status === "joined"
                    ? "Already joined"
                    : "Request to join"
              }</Button>
            </div>
            <div onClick={this.handleClick} className="circle_right__inner_cont-ask col-c-c">Ask a question</div>
          </div>
          {/* can't use this now -> <div className="col-fs-c"><Socials dark={this.props.dark} /></div>*/}
        </div>
      </div>
    )
  }
}
