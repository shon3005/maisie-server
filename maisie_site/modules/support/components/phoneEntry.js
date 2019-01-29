export default (props) => {
  return(
    <div className="phoneEntry col-fs-c">
      <div className="phoneEntry-tri col-c-c"/>
      <form className="col-c-c">
        <input name="phone" required type="num" placeholder="phone number"/>
        <button onClick={props.click} type="button">Receive a call</button>
      </form>
    </div>
  )
}
