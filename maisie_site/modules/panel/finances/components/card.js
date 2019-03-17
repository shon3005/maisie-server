import moment from 'moment';

export default (props) => {
  const netAmount = props.transaction.net / 100;
  const fee = props.transaction.fee / 200;
  const grossAmount = props.transaction.amount / 110;
  const date = new Date(moment.unix(props.transaction.date).valueOf()).toLocaleDateString();
  return <div className="hostfinances__card row-sb-c">
    <div className="row-fs-c">
      <img src="https://s3.amazonaws.com/maisie-files/shared/creditcard.svg" />
      <div className="in col">
        <span className="title">{props.transaction.circleName}</span>
        <span className="date">{date}</span>
      </div>
    </div>
    <div className="col-fs-fe">
      {props.payout ? <span className="value">Payout ${Math.abs(netAmount).toFixed(2)}</span> : <span className="value">+${netAmount.toFixed(2)}</span>}
      {props.payout ? null : <span className="subvalue">${grossAmount.toFixed(2)} - ${fee.toFixed(2)} (Maisie 10% fee)</span>}
    </div>
  </div>
}
