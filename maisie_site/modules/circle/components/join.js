export default (props) =>
  <div className="circlejoin col-c-c">
    <div className="circle__subhead">PRICE PER SESSION</div>
    <div className="circlejoin-price">{"$" + props.price}</div>
    <div style={{height: 10}} />
    <button className="primary">Apply to Join this Circle</button>
    <div style={{height: 10}} />
    <button className="secondary">Ask a question</button>
  </div>
