import Button from '../../../shared/components/button';

export default props =>
  <div className="landing-options col-c-c">
    <div className="landing-options-background" style={{
      backgroundImage: 'url(../../../static/shared/purple_lines.svg)',
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }} />
    <div className="landing-options__in col-fs-c">
      <div className="landing-options__in-top">
        <span>Considering your options</span>
        <h1>How does Maisie stack up?</h1>
        <div className="landing-options__in_grid row-c-c">
          <div className="landing-options__in_grid-column col one">
            <h2>Mental wellness</h2>
            <div>Affordability</div>
            <div>Insurance Coverage</div>
            <div>Time spent in session</div>
            <div>How you’ll pay</div>
          </div>
          <div style={{marginLeft: 4}} className="landing-options__in_grid-column col two">
            <h2>1:1 Therapy</h2>
            <div>$150-$300 per session</div>
            <div>Often required</div>
            <div>45 minutes</div>
            <div>By cash or check</div>
          </div>
          <div className="landing-options__in_grid-column-three col three">
            <h2>Maisie</h2>
            <div>
              <div style={{height: 5}} />
              <div><img src="../../../static/shared/purple_check.svg" />$20-$50 per session</div>
              <div className="d" style={{height: 4}} />
              <div><img src="../../../static/shared/purple_check.svg" />Not required</div>
              <div className="d" style={{height: 4}} />
              <div><img src="../../../static/shared/purple_check.svg" />1 to 1.5 hours</div>
              <div className="d" style={{height: 4}} />
              <div><img src="../../../static/shared/purple_check.svg" />Automatic</div>
              <div style={{height: 5}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{marginTop: 50, textAlign: "center", zIndex: 3}}>
      <span className="landing-options-cta">Still deciding? We're here to help.</span>
      <Button kind="link" href="mailto:say@heymaisie.com">Ask a question</Button>
    </div>
    <div style={{height: 2, width: "100%", backgroundColor: "rgba(5,45,84,.05)", marginTop: 100}} />
  </div>
