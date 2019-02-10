export default (props) =>
  <div className="create__field row-sb-c">
    <div className="create__field_text col-fs-fe">
      <span>{props.title}</span>
      <span className="tag">{props.private ? "Private" : null}</span>
    </div>
    <div className="create__field_input">{props.children}</div>
  </div>
