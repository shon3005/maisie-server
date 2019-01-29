import Dots from './components/dots';
import Buttons from './components/buttons';

const Choices = (props) => props.children.map((x, index) =>
  <div className="featured_groups__choices-choice col-c-c">
    <a href={x[1]}>{x[0]}</a>
    <div />
  </div>
)
// <Dots />

export default () =>
  <div className="featured_groups col-c-c">
    <Buttons />
    <div className="featured_groups__choices row-sb-c">
    </div>
    <div className="featured_groups__imgfeat"><img src="https://s3.amazonaws.com/maisie-files/landing/back.png" /></div>
  </div>

  // <Choices>{[["Stress", "#"], ["Confidence", "#"], ["Activities", "#"], ["Choice 4", "#"]]}</Choices>
