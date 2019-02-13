export default (props) =>
  <div className="circle__inner">
    <div className="circle__inner-img" style={{backgroundImage: `url(${props.d.img})`, backgroundSize: "cover", backgroundPosition: "center"}} />
  </div>
