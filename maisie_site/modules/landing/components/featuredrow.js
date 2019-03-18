import Card from "../../../shared/components/card/index.js";

const MapCards = (props) => {
  const children = props.children.length === 10 ? props.children.slice(0, 10) : props.children.slice(0, props.children.length);
  const x = children.map((b, index) =>
    <Card
      title={b.title}
      price={b.price}
      image_url={b.imageUrl}
      href={`circle/${b.id}`}
      low={b.min}
      high={b.max}
      spots={parseInt(b.max) - b.members.length}
      key={index}
    />
  )
  return x
}


export default (props) =>
  <div className="featuredrow col-c-c">
    <div className="featuredrow_i col-sb-c">
      <div className="featuredrow_i__h row">
        <span>Circles in San Francisco</span>
      </div>
      <div className="featuredrow_i__cont row-fs-c">
        <MapCards>{props.circles}</MapCards>
      </div>
      <div className="featuredrow_i-divider" />
    </div>
  </div>

// import React, {Component} from 'react';
// // import Card from "../../../shared/components/card/index.js";
// import FullPageSpinner from '../../../shared/components/fullpagespinner';

// export default class FeaturedRow extends Component {
//   state = {
//     circles: []
//   };

//   updateCircleCount(circle) {
//     this.setState(({ circles }) => {
//       return { circles: circles.concat(circle) };
//     })
//   }

//   MapCards = (circles) => {
//     const children = circles.length === 10 ? circles.slice(0, 10) : circles.slice(0, circles.length);
//     const x = children.map((b, index) =>
//       <a className="circlecard col" href={`circle/${b.id}`} key={index}>
//         <img src={b.imageUrl} onLoad={this.updateCircleCount.bind(this, b)} className="circlecard__img col-c-c" style={{ backgroundSize: "cover", backgroundPosition: "center" }} />
//         <div className="circlecard__cont col">
//           <span className="circlecard__cont-title lim_one_line">{b.title}</span>
//           <span className="circlecard__cont-spots lim_one_line">{parseInt(b.max) - b.members.length + " spots left (" + b.min + "-" + b.max + " total)"}</span>
//           <span className="circlecard__cont-price lim_one_line">{"$" + b.price.toString() + " per session"}</span>
//         </div>
//       </a>
//     )
//     return x
//   }

//   render() {
//     return <div className="featuredrow col-c-c">
//       <div className="featuredrow_i col-sb-c">
//         <div className="featuredrow_i__h row">
//           <span>Circles in San Francisco</span>
//         </div>
//         <div className="featuredrow_i__cont row-fs-c">
//           {this.state.circles.map((b, i) =>
//             <a className="circlecard col" href={`circle/${b.id}`} key={i}>
//               <div className="circlecard__img col-c-c" style={{backgroundImage: `url(${b.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }} />
//               <div className="circlecard__cont col">
//                 <span className="circlecard__cont-title lim_one_line">{b.title}</span>
//                 <span className="circlecard__cont-spots lim_one_line">{parseInt(b.max) - b.members.length + " spots left (" + b.min + "-" + b.max + " total)"}</span>
//                 <span className="circlecard__cont-price lim_one_line">{"$" + b.price.toString() + " per session"}</span>
//               </div>
//             </a>
//           )}
//           {this.props.circles.length > this.state.circles.length ? <FullPageSpinner color={"dark"} /> : null}
//           <div style={{display: 'none'}}>
//             {this.MapCards(this.props.circles)}
//           </div>
//         </div>
//         <div className="featuredrow_i-divider" />
//       </div>
//     </div>
//   }
// }