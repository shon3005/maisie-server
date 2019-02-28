import Button from '../../../shared/components/button.js';
export default () =>
  <div className="l_double">
    <div className="l_double__l col">
      <img src="../../../static/shared/circle_l.svg" />
      <h1>What is a Circle?</h1>
      <div className="col">
        <div>
          <span className="title">Definition</span><br />
          <span className="text">
            Circles are small groups of people who meet regularly with a licensed professional. It's like therapy, but with the added benefit of a community.
          </span>
        </div>
        <div>
          <span className="title">How many people?</span><br />
          <span className="text">
            Circles can contain anywhere from three to twelve people, but the average is four or five.
          </span>
        </div>
        <div>
          <span className="title">Who will I meet?</span><br />
          <span className="text">
            When you come together with your Circle, you'll meet new people, all handpicked by your host.
          </span>
        </div>
      </div>
      <Button kind="primary" weight="purple" href="/signup">Browse our Circles</Button>
    </div>
    <div className="l_double__r col-fs-fe">
      <img src="../../../static/shared/circle_d.svg" />
      <h1>Why is it better?</h1>
      <div className="col-fs-fe">
        <div>
          <span className="title">Insurance</span><br />
          <span className="text">
          No insurance is required to use Maisie. But that's okay: sessions on Maisie are often cheaper than what you would pay for 1:1, even with insurance.
          </span>
        </div>
        <div>
          <span className="title">Social</span><br />
          <span className="text">
            No insurance is required to use Maisie. But that's okay: sessions on Maisie are often cheaper than what you would pay for 1:1, even with insurance.
          </span>
        </div>
        <div>
          <span className="title">Platform</span><br />
          <span className="text">
            Maisie is a design-driven company at its heart. We've done our best to build our platform in that way, so that the experience using it is as simple and easy as possible.
          </span>
        </div>
      </div>
      <Button kind="ext" weight="purple" href="mailto:say@heymaisie.com">Reach out for more info</Button>
    </div>
  </div>
