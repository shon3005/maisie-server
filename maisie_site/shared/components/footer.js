var classNames = require('classnames')
let LINKS_COLUMN_ONE = [["How it works", "/"], ["Browse Circles", "/"] /*, ["Why Host?", "/"]*/],
    LINKS_COLUMN_TWO = [["Values and Mission", ""],["Careers at Maisie", "https://angel.co/maisie-1"]],
    LINKS_COLUMN_THREE = [["Product Support", "mailto:support@heymaisie.com"],["Contact Us", "mailto:say@heymaisie.com"]/*,["Terms & Privacy", "#"]*/]


function Links(props) {
  const content = props.links.map((link, index) => <a key={index} href={link[1]}>{link[0]}</a> )
  return <div className="dropdown col"><span>{props.header}</span>{content}</div>
}

function Logos() {
  return(
    <div className="footer__logos col-c-c">
      <img className="footer__logos-logo" src="https://s3.amazonaws.com/maisie-files/footer/dots_purple.svg" style={{height: 25}} />
      <div className="footer__logos-social col">
        <a href="https://www.instagram.com/sayheymaisie"><img src="https://s3.amazonaws.com/maisie-files/footer/instagram.svg" /></a>
        <a href="https://www.twitter.com/sayheymaisie"><img src="https://s3.amazonaws.com/maisie-files/footer/twitter.svg" /></a>
        <a href="https://www.facebook.com/pg/Maisie-2274087959477864/"><img src="https://s3.amazonaws.com/maisie-files/footer/facebook.svg" /></a>
      </div>
    </div>
  )
}

function Drawer() {
  return(
    <div className="footer__more row-c-c">
      <img src="https://s3.amazonaws.com/maisie-files/footer/more.svg" />
    </div>
  )
}

export default (props) =>
  <div className={classNames(["footer", "row-c-c", {hidemobile: props.hidemobile}])}>
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
