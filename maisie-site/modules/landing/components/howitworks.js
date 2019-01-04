const steps = [
  {
    "step": 1,
    "header": "Sign Up",
    "text": "We’ll ask for some basic info, then a team member will reach out to get to know you a bit more."
  }, {
    "step": 2,
    "header": "Join your circle",
    "text": "We’ll match you with a group of peers and a therapist to lead it. A meeting time will be found that works for everyone."
  }, {
    "step": 3,
    "header": "Meet",
    "text": "Now that your Circle has formed, you’ll come together weekly for conversation guided by your Circle leader."
  }
]




const Steps = (props) => steps.map((step, index) =>
  <div key={index} id={`hiw-step-${(index+1).toString()}`} className="howitworks__content__step row">
    <div className="howitworks__content__step-img col-c-c"><span>{step.step}</span></div>
    <div className="col howitworks__content__step_text">
      <span className="howitworks__content__step_text-head">{step.header}</span>
      <span className="howitworks__content__step_text-text">{step.text}</span>
    </div>
  </div>
)

export default (props) =>
  <div className="howitworks col">
    <img className="howitworks-background" src="../../../static/landing/curved-back.svg" />
    <img className="howitworks-graphic" src="../../../static/landing/circle-faces.svg" />
    <div className="howitworks__content col-fs-c">
      <span className="howitworks__content-title h-large">How does it work?</span>
      <Steps />
      <div className="howitworks__content-cta row-c-c">
        <div className="howitworks__content-cta-1 col-c">
          <span className="howitworks__content-cta-1-1">Affordable counseling</span>
          <span className="howitworks__content-cta-1-2">It's here. Ready to give it a try? </span>
        </div>
        <div onClick={(n) => props.onEmailEntry(" ")} className="howitworks__content-cta-2 col-c-c">Get Started</div>
      </div>
    </div>
  </div>
