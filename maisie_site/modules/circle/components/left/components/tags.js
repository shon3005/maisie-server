export default (props) => props.tags ? props.tags.map((tag, index) => <div key={index}>{tag}</div> ) : null
