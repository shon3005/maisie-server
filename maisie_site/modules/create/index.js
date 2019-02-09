import Footer from '../../shared/components/footer.js';

const NewHeader = () =>
  <div className="newheader row-sb-c">
    <img src="../../static/header/logo_nocircle.svg" />
  </div>

const Progress = (props) =>
  <div className="header_progress row">
    <div />
  </div>

export default () =>
  <div className="create col-fs-c">
    <NewHeader />
    <Progress />
    <div className="create__inner col-fs-c">
      <div className="create__inner_cont col-fs-c">
      </div>
      <div className="create__inner_brow row-sa-c">
        <div className="back">Back</div>
        <div className="next">Next</div>
      </div>
    </div>
    <Footer />
  </div>
