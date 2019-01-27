import Header from '../shared/components/app_header/index.js';

export default (page, id) =>
  <div className="withPage col">
    <Header />
    <div className="withPage__inner row">
      <div className="withPage__inner-content">{page}</div>
    </div>
  </div>
