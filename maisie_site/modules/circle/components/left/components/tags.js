export default (props) => {
  const x = props.tags.map((tag, index) => <div key={index}>{tag}</div> )
  return(<div className="circle_left__tags row">{x}</div>)
}
