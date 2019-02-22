import Button from '../../../shared/components/button.js';

export default (props) => {
  return(
    <div className="phoneEntry col-fs-c">
      <div className="phoneEntry-tri col-c-c"/>
      <form className="col-c-c">
        <input name="phone" required type="num" placeholder="phone number"/>
        <div style={{height: 10}} />
        <Button onClick={props.click} kind="alt" weight="purple">Receive a call</Button>
      </form>
    </div>
  )
}
