export default (props) => {
  const x = props.content.map((tag, index) => <div key={index}>{tag}</div> )
  return(<div className="circle_l__tags row">{x}</div>)
}
