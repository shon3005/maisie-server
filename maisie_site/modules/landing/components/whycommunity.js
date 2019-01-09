const u = [
  {
    "title" : "Share experiences",
    "text" : "Your circle-mates are chosen by a professional based on personality, background, and fit.",
    "img" : "#",
  }, {
    "title" : "Be heard",
    "text" : "In most cases, it helps to have more people to talk to. Maisie gives you that audience.",
    "img" : "#",
  }, {
    "title" : "Grow together",
    "text" : "Set goals and discuss progress, together. Your Circle keeps you accountable and on-track.",
    "img" : "",
  },
]

const Cards = (props) => u.map((v, index) =>
  <div key={index} className="communitycard col-c">
    <div>
      <img src={`../../static/landing/community-${(index+1).toString()}.svg`} />
    </div>
    <span className="communitycard-title">{v.title}</span>
    <span className="communitycard-text">{v.text}</span>
  </div>
)

export default () =>
  <div className="whycommunity col-fs-c">
    <span className="whycommunity-title h-large">Why community?</span>
    <div className="whycommunity__content row-sa">
      <Cards />
    </div>
    <a className="whycommunity-cta" href="mailto:community@heymaisie.com">Learn more about our community →</a>
  </div>
