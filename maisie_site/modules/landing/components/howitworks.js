const steps = [
  {
    "step": 1,
    "header": "Sign Up",
    "text": "Browse our selection of available Circles. We personally vet each host and Circle before allowing it on the site."
  }, {
    "step": 2,
    "header": "Join your circle",
    "text": "Once you've found a Circle you like, apply to join straight from the site. The host will reach out and schedule a short meeting to discuss your goals and expectations for the Circle."
  }, {
    "step": 3,
    "header": "Meet",
    "text": "Once you're admitted to a Circle, all that's left is to meet. Don't worry, we'll send you a reminder before each meeting."
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
    <img className="howitworks-background" src="https://s3.amazonaws.com/maisie-files/landing/curved-back.svg" />
    <img className="howitworks-graphic" src="https://s3.amazonaws.com/maisie-files/landing/circle-faces.svg" />
    <div className="howitworks__content col-fs-c">
      <span className="howitworks__content-title h-large">How does it work?</span>
      <Steps />
      <div className="howitworks__content-cta row-sa-c">
        <div className="howitworks__content-cta-1 col-c">
          <span className="howitworks__content-cta-1-1">Spin class for the mind (but more fun).</span>
          <span className="howitworks__content-cta-1-2">Ready to give it a try?</span>
        </div>
        <a href="/signup" className="howitworks__content-cta-2 col-c-c">Get Started</a>
      </div>
    </div>
  </div>
