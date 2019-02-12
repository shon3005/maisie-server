import Circles from '../modules/circles/index.js';
import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';

function handleClick() {
  document.getElementById("requests_drop").classList.remove('circles_reqs__drop-visible')
  document.getElementById("circles_overlay").classList.add('hide')
  document.getElementById("requests_cta").classList.remove('clicked')
}

export default () =>
  <div className="mycircles col-fs-c">
    <Header />
    <div className="circles_overlay hide" id="circles_overlay"
      onClick={() => handleClick()}
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        zIndex: 999997,
      }}
    />
    <Circles />
    <Footer />
  </div>
