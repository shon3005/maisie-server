import Header from '../shared/components/header/index.js';
import SideBar from '../shared/components/sidebar/index.js';

export default (page, side, id) =>
  <div className="withPage col">
    <Header />
    <div className="withPage__inner row">
      <SideBar pageToRender={side} circle={id} />
      <div className="withPage__inner-content">{page}</div>
    </div>
  </div>
