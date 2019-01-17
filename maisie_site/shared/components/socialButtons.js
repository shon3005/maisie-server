const socials = [["instagram", "https://instagram.com/sayheymaisie"], ["twitter", "https://twitter.com/sayheymaisie"], ["facebook", "https://www.facebook.com/pg/Maisie-2274087959477864/"]]
// 
export default () => socials.map((x, index) =>
    <a key={x} className="socialbuttons__button" href={x[1]}>
      <div className="col-c-c">
        <img src={`../../static/landing/${x[0]}.svg`} />
      </div>
    </a>
  )
