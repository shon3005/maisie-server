export default () => {
  return(
    <div className="phoneEntry col-fs-c">
      <div className="phoneEntry-tri col-c-c"/>
      <form className="col-c-c">
        <input required type="phone" placeholder="phone number"/>
        <button type="submit">Receive a call</button>
      </form>
    </div>
  )
}
