export default (props) => {
  const netAmount = props.transaction.amount / 100;
  const fee = netAmount / 19;
  const grossAmount = fee * 20;
  const date = new Date(props.transaction.date).toLocaleDateString();
  return <div className="hostfinances__card row-sb-c">
    <div className="row-fs-c">
      <img src="https://s3.amazonaws.com/maisie-files/shared/creditcard.svg" />
      <div className="in col">
        <span className="title">{props.transaction.circleName}</span>
        <span className="date">{date}</span>
      </div>
    </div>
    <div className="col-fs-fe">
      <span className="value">+${netAmount}</span>
      <span className="subvalue">${grossAmount} - ${fee} (Maisie 5% fee)</span>
    </div>
  </div>
}
