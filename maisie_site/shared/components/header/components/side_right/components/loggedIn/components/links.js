import Item from './item.js';
import links from '../utils/links.js';

export default (props) => links.map((x, index) =>
  <Item key={index} text={x.text} img={x.img} href={x.href} />
)
