import EmailCapture from '../../../shared/components/emailCapture.js';

const details = [
  {
    "title": "experience",
    "content": [
      "Weekly, in-person meetings at a time that works for you.",
      "Conversation guided by a licensed mental health professional.",
      "Dedicated chat-room for your circle where you can stay in touch and communicate progress between sessions.",
      "Our Customer Care team is available 24/7 to help with any issues."
    ]
  }, {
    "title": "pricing",
    "content": [
      "One affordable price that is locked in when you join your first circle. Enable autopay and you’ll be charged online before each session.",
      "No insurance is accepted, so no more fumbling for papers or worrying about whether you’re covered.",
    ]
  }
]

 const MapDetails = () => details.map((cat, index) =>
   <div className="col details__list" key={index}>
    <span className="details__list-tag">{cat.title}</span>
    {cat.content.map((listitem, index) =>
      <div key={index} className="details__list-checkedItem row">
        <img src="https://s3.amazonaws.com/maisie-files/shared/purplecheckmark.svg" />
        <span>{listitem}</span>
      </div>
    )}
   </div>
 )



export default (props) =>
  <div className="details row-sa">
    <img src="../../../static/landing/circle_small.svg" />
    <div className="details__content">
      <div className="details__content__head row-fs-c">
        <div className="col-fs">
          <span className="details__content__head-tag">
            circles by maisie
          </span><br />
          <span className="details__content__head-text">
            Affordable, community-based counseling.
          </span>
        </div>
      </div>
      <div className="details__content__main col-fs-c">
        <MapDetails />
        <div className="details__content__main-spacer" />
        <div className="details__content__main-cta col-c-c">
          <span>Try us out today</span>
          <div style={{height: '20px'}} />
          <EmailCapture color={2} onEmailEntry={(email) => props.onEmailEntry(email)} />
        </div>
      </div>
    </div>
  </div>
