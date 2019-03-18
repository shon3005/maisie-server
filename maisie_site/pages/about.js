import Header from '../shared/components/header/index.js';
import Footer from '../shared/components/footer/index.js';
import Button from '../shared/components/button.js';
import { connect } from 'react-redux';

const About = (props) =>
  <div className="about">
    <Header trnsp loggedIn={props.user ? 'loggedIn' : 'loggedOut'} />
    <div className="about__in">
      <h3>Why Maisie?</h3>
      <p>
        In 2018, we began working on Maisie as a way to make mental wellness more
        accessible and open to all. Today, the average price for a therapy session
        in cities like New York and San Francisco is more than $150. This is far, far too
        high for most people. Yet at the same time, the average salary of a mental health
        professional is less than $50,000 a year. Lower the price, and you cut salaries.
        Raise salaries and you raise prices. And right now, neither side can budge.
      </p>
      <p>
        But that's not all. In the US, the percent of people with some kind of mental health
        condition is well over 20% (around 70 million people). And there are millions
        more who will seek out therapy even without some kind of condition. However, there are
        only around 500,000 mental health professionals. This means that the ratio of patients
        to available providers in this country is nearly 140:1, more than four times the number
        of patients any therapist will see at one time.
      </p>
      <p>
        Our answer to these problems is group therapy. Trusted by many professionals, group therapy
        is significantly more affordable than traditional 1:1 care and incredibly effective. Best of
        all, in addition to a licensed professional leading the conversation, you also get to work with
        great people, often working toward the same goals as you.
      </p>
      <p>
        Maisie is the first site of its kind and is the absolute best place to find or host a group therapy experience.
         If you're passionate about our mission of making mental wellness accessible to all, we'd love to hear from you.
      </p>
      <Button kind="link" href="mailto:say@heymaisie.com">Get in touch with us</Button>
      <div style={{
        height: 1,
        width: "100%",
        backgroundColor: "rgba(5, 45, 84, 0.05)",
        marginTop: 50,
        marginBottom: 50
      }} />
      <h3>Our Team</h3>
      <div className="row-sb-c">
        <div className="about_bio col-fs-c">
          <div className="about_bio-img" style={{
            backgroundImage: "url('../static/shared/matthew.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }} />
          <p>Matthew Kochakian</p>
          <span>Co-founder</span>
          <span className="social"><a href="https://twitter.com/kochakian">Twitter</a> | <a href="https://www.linkedin.com/in/mkochakian/">Linkedin</a></span>
        </div>
        <div style={{width: 30}} />
        <div className="about_bio col-fs-c">
          <div className="about_bio-img" style={{
            backgroundImage: "url('../static/shared/shaun.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }} />
          <p>Shaun Chua</p>
          <span>Co-founder</span>
          <span className="social"><a href="https://twitter.com/shon3005">Twitter</a> | <a href="https://www.linkedin.com/in/shon3005/">Linkedin</a></span>
        </div>
      </div>
      <div className="col-fs-c" style={{
        marginTop: 50
      }}>
        <Button kind="primary" weight="purple" link="https://angel.co/maisie-1">Want to join our team?</Button>
      </div>
    </div>
    <Footer />
  </div>

const mapStateToProps = (state) => {
  return { user: state.user.user };
}

export default connect(mapStateToProps)(About);
