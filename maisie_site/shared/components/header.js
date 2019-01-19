export default (props) =>
  <div className="header row-sb-c">
    <a href="/index"><img src="https://s3.amazonaws.com/maisie-files/header/logo_purple.svg" /></a>
    <div className="header__links stretch row-fe-c">
      {props.links.map((link, index) => <a key={index} href={link[1]}>{link[0]}</a> )}
    </div>
  </div>
