import Router from 'next/router';

export default (props) =>
  <div onClick={() => Router.back()} className="circleback row-fs-c">
    <img src={'../../../static/shared/back.svg'} />
    <span>Back</span>
  </div>
