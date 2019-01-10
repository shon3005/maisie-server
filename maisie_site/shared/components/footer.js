let LINKS_COLUMN_ONE = [["For Consumers", "https://heymaisie.com"],["For Providers", "mailto:providers@heymaisie.com?subject=Inquiring about Maisie for Providers"],["Common Q's", "https://docs.google.com/document/d/1ptvBRSMTaRM5PvlVe0x3kTb8fRlV1CUJhr7W8aWm-6M/edit?usp=sharing"]],
    LINKS_COLUMN_TWO = [/*["Our Values", ""],["Why Maisie?", ""],*/["Work at Maisie", "https://angel.co/maisie-1"]],
    LINKS_COLUMN_THREE = [["Product Help", "mailto:support@heymaisie.com"],["Contact Us", "mailto:say@heymaisie.com"]/*,["Terms & Privacy", "#"]*/]


function Links(props) {
  const content = props.links.map((link, index) => <a key={index} href={link[1]}>{link[0]}</a> )
  return <div className="dropdown col"><span>{props.header}</span>{content}</div>
}

function Logos() {
  return(
    <div className="footer__logos col-c-c">
      <img className="footer__logos-logo" src="../static/footer/dots_purple.svg" style={{height: 25}} />
      <div className="footer__logos-social col">
        <a href="https://www.instagram.com/sayheymaisie"><img src="../static/footer/instagram.svg" /></a>
        <a href="https://www.twitter.com/sayheymaisie"><img src="../static/footer/twitter.svg" /></a>
        <a href="https://www.facebook.com/pg/Maisie-2274087959477864/"><img src="../static/footer/facebook.svg" /></a>
      </div>
    </div>
  )
}

function Drawer() {
  return(
    <div className="footer__more row-c-c">
      <img src="../static/footer/more.svg" />
    </div>
  )
}

export default () =>
  <div className="footer row-c-c">
    <div className="footer__drawer row-sb-c">
      <Drawer />
      <Logos />
      <div className="footer__drawer-links row-sa">
        <Links header="Our Service" links={LINKS_COLUMN_ONE} />
        <Links header="Our Company" links={LINKS_COLUMN_TWO} />
        <Links header="Other" links={LINKS_COLUMN_THREE} />
      </div>
      <span>© Maisie</span>
    </div>
  </div>