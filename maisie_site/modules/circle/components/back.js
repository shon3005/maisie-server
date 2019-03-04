import Router from 'next/router';

export default (props) =>
  <div onClick={() => Router.back()} className="circleback row-fs-c">
    <img src={'https://s3.amazonaws.com/maisie-files/shared/back.svg'} />
  </div>
