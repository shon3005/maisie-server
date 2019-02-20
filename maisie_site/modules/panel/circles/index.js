import Cards from './components/cards/index.js';
import Requests from './components/requests/index.js';
import LargeText from '../../../shared/components/text/largeText.js';
import Button from '../../../shared/components/button.js';
function handleClick() {
  document.getElementById("requests_drop").classList.remove('circles_reqs__drop-visible')
  document.getElementById("circles_overlay").classList.add('hide')
  document.getElementById("requests_cta").classList.remove('clicked')
}
export default (props) =>
  <div className="hostcircles__inner">
    <div className="hostcircles__inner-title row-sb-c">
      <LargeText>Circles I'm Hosting</LargeText>
      <div className="circles_overlay hide" id="circles_overlay"
        onClick={() => handleClick()}
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          zIndex: 99997,
        }}
      />
      <div className="row-fe-c">
        <Requests requests={props.requests} />
        <Button kind="primary" weight="purple" href="/create">Start a Circle</Button>
      </div>
    </div>
    <Cards />
    {/* <FeaturedRow circles={} /> */}
  </div>
