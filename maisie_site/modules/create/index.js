import Footer from '../../shared/components/footer.js';
var classNames = require('classnames');

const NewHeader = (props) =>
  <div className="newheader row-fs-c">
    <img src="../../static/header/logo_nocircle.svg" />
    <div className="newheader-barrier" />
    <span>{props.status}</span>
  </div>

const Progress = (props) =>
  <div className="header_progress row">
    <div />
  </div>

const LargeText = (props) =>
  <div className="create__inner_cont-largetext">{props.children}</div>
const SmallText = (props) =>
  <div className="create__inner_cont-smalltext">{props.children}</div>

const Field = (props) =>
  <div className="create__field row-sb-c">
    <div className="create__field_text col-fs-fe">
      <span>{props.title}</span>
      <span className="tag">{props.private ? "Private" : null}</span>
    </div>
    <div className="create__field_input">{props.children}</div>
  </div>

const Disclaimer = (props) => <div className="create-disclaimer">{props.children}</div>

const SlideOne = (props) =>
    <div className="create__inner_cont">
      <LargeText>Start a new Circle</LargeText>
      <SmallText>General Information</SmallText>
      <Field title="Circle Title">
        <input
          type="text"
          placeholder="Female Founders Stand Together"
          id="title"
        />
      </Field>
      <Disclaimer>This title is the first thing about your Circle that users will see. Choose something creative!</Disclaimer>
      <Field title="Description">
        <textarea id="description" rows={8} />
      </Field>
      <Disclaimer>Here's your chance to give readers more information about your circle. Who is this Circle meant for? What kinds of goals will you work towards? Who will be happy in this group?</Disclaimer>
      <Field title="Host">
        <div className="create__hostinfo row-fs-c"><div><img src="../../static/shared/matthew.png" /></div><span>Chester Chzburger</span></div>
      </Field>
    </div>

const SlideTwo = (props) =>
  <div className="create__inner_cont" />

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slidetoShow: 0,
      status: "Step 1: General Information",
    }
  }
  handleBackPress() {
    this.setState({ slidetoShow: this.state.slidetoShow === 0 ? 0 : this.state.slidetoShow - 1 })
  }
  handleForwardPress() {
    if (this.state.slidetoShow === 0) {
      var title = document.getElementById("title").value;
      title.length == 0 ? title.className += "red" : null;
      var description = document.getElementById("description").value;
    }

    this.setState({ slidetoShow: this.state.slidetoShow + 1 })
  }
  render() {
    const slidetoShow = ""
    const slideToShow = () => {
      if (this.state.slidetoShow == 0) { return <SlideOne /> }
      else if (this.state.slidetoShow != 0) { return <SlideTwo /> }
    }
    return(
      <div className="create col-fs-c">
        <NewHeader status={this.state.status} />
        <Progress />
        <div className="create__inner col-fs-c">
          {slideToShow()}
        </div>
        <div className="create__inner_brow row-sa-c">
          <div className={classNames(["back", {"fade": this.state.slidetoShow === 0}])} onClick={this.handleBackPress.bind(this)}>Back</div>
          <div className="next" onClick={this.handleForwardPress.bind(this)}>Next</div>
        </div>
        <Footer />
      </div>
    )
  }
}
