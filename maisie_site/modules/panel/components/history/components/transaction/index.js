import DATA from '../../data.js';
var moment = require('moment');
var classNames = require('classnames');

export default (props) => {
  const t = props.data
  const NAME = t.circle_name
  const DATE = moment(t.time_stamp).format("MMMM D, YYYY")
  const BASE = t.base_price
  const NUM_ATTS = t.attendees.length
  const FEE = t.maisie_fee

  const TOTAL = NUM_ATTS * BASE * (1-FEE)
  const atts = t.attendees.map((att, index) =>
    <a className="ht__cont_atts_att row-fs-c" key={index}>
      <div className="ht__cont_atts_att-img" style={{backgroundImage: "url('../../../../static/shared/matthew.png')", backgroundSize: "cover"}} />
      <span className="ht__cont_atts_att-name">{att.id}</span>
      <span className="ht__cont_atts_att-price">{"$" + (BASE-BASE*att.discount).toString()}</span>
      <div className={classNames({
        "ht__cont_atts_att-tag": true,
        "green": att.attended,
        "red": !att.attended,
      })}>{att.attended ? "attended" : "canceled"}</div>
    </a>
  )
  return(
    <div className="ht">
      <div className="ht__head row-fs-c">
        <div className="ht__head-value col-fs-fe">{"+$" + TOTAL}</div>
        <div className="ht__head_info col">
          <span className="two">{DATE}</span>
          <span className="one">{NAME}</span>
        </div>
      </div>
      <div className="ht__cont row">

        <div className="ht__cont_nums col">
          <span className="tag">Amount paid</span>
          <span>{BASE + " x " + NUM_ATTS + " attendees = $" + BASE*NUM_ATTS}</span>
          <span className="tag">Maisie Fee</span>
          <span>{FEE*100 + "% = $" + BASE*NUM_ATTS*FEE}</span>
          {/*<span className="tag">Net revenue</span>
          <span className="bold">{"$" + TOTAL}</span>*/}
          <a className="ht__cont_atts-manage" href="circles/001">Manage Circle</a>
        </div>
        <div className="ht__cont_atts">
          <span>attendees</span>
          {atts}
          <div style={{height: 20}} />
        </div>
      </div>
    </div>
  )
}
