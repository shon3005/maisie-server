export default (props) => {
  let n = props.d.num_joined, p = props.d.needed_to_start, dots = [];
  for (let i = 0; i < p; i++) {
    i < n ? dots.push(<div key={i}/>) : dots.push(<div className="unfilled" key={i}/>
    )
  }
  return dots;
}
