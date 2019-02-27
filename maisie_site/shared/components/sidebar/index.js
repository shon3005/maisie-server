import LOGIC_MAIN from './logic/links.js';
import LOGIC_LINKS from './logic/circles.js';
import SideItemLarge from './components/side_item_large.js';
import SideItemSmall from './components/side_item_small.js';

const MainLinks = (props) => LOGIC_MAIN.map((x, index) =>
  <SideItemLarge
    pageToRender={props.pageToRender}
    key={index}
    text={x.text}
    img={x.img}
    href={x.href}
  />
)

const CircleLinks = (props) => LOGIC_LINKS.map((x, index) =>
  <SideItemSmall
    pageToRender={props.pageToRender}
    key={index}
    text={x.text}
    img={x.img}
    href={x.href}
    id={x.id}
    circle={props.circle}
  />
)

export default (props) =>
  <div className="sidebar col">
    <MainLinks pageToRender={props.pageToRender} />
    <span className="sidebar-tag">my circles</span>
    <CircleLinks pageToRender={props.pageToRender} circle={props.circle} />
  </div>
