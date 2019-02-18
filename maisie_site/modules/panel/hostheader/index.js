function handleClick(id) {
  document.getElementById('hostheader_dash').classList.remove('selected')
  document.getElementById('hostheader_finances').classList.remove('selected')
  document.getElementById('hostheader_circles').classList.remove('selected')
  document.getElementById('hostheader_inbox').classList.remove('selected')
  document.getElementById('hostheader_profile').classList.remove('selected')
  document.getElementById(id).classList.add('selected')
}
var classNames = require('classnames')
export default (props) =>
  <div className="hostheader row-c-c">
    <div className="row-fs-c">
      <div onClick={(id) => props.renderHeader("dash")} className={classNames(["col-c-c", {"selected": props.page === "dash"}])}>
        <img src="../../../static/shared/house.svg" />
        <div />
      </div>
      <div onClick={(id) => props.renderHeader("finances")} className={classNames(["col-c-c", {"selected": props.page === "finances"}])}>
        <span>Finances</span>
        <div />
      </div>
      <div onClick={(id) => props.renderHeader("circles")} className={classNames(["col-c-c", {"selected": props.page === "circles"}])}>
        <span>Circles</span>
        <div />
      </div>
      <div onClick={(id) => props.renderHeader("inbox")} className={classNames(["col-c-c", {"selected": props.page === "inbox"}])}>
        <span>Inbox</span>
        <div />
      </div>
      <div onClick={(id) => props.renderHeader("profile")} className={classNames(["col-c-c", {"selected": props.page === "profile"}])}>
        <span>Profile</span>
        <div />
      </div>
    </div>
  </div>
