// Note: apply 'nostretch' prop to have field not expand by default
var classNames = require('classnames')
export default (props) =>
  <div className="create__field row-sb-c">
    <div className="create__field_text col-fs-fe">
      <span>{props.title}</span>
      <span className="tag">{props.private ? "Private" : null}</span>
    </div>
    <div className={classNames(["create__field_input", {"field_nostretch": props.nostretch}])}>{props.children}</div>
  </div>
