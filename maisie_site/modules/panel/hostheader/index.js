import Link from 'next/link';

var classNames = require('classnames')
export default (props) =>
  <div className="hostheader row-c-c">
    <div className="row-fs-c">
      <Link as="/panel" href="/panel/dash">
        <div className={classNames(["col-c-c", {"selected": props.page === "dash"}])}>
          <img src="../../../static/shared/house.svg" />
          <div />
        </div>
      </Link>
      <Link as="/panel/finances" href="/panel/finances">
        <div className={classNames(["col-c-c", {"selected": props.page === "finances"}])}>
          <span>Finances</span>
          <div />
        </div>
      </Link>
      <Link as="/panel/circles" href="/panel/circles">
        <div className={classNames(["col-c-c", {"selected": props.page === "circles"}])}>
          <span>Circles</span>
          <div />
        </div>
      </Link>
      {/*<Link as="/panel/inbox" href="/panel/inbox">
        <div className={classNames(["col-c-c", {"selected": props.page === "inbox"}])}>
          <span>Inbox</span>
          <div />
        </div>
      </Link> */}
      <Link as="/panel/profile" href="/panel/profile">
        <div className={classNames(["col-c-c", {"selected": props.page === "profile"}])}>
          <span>Profile</span>
          <div />
        </div>
      </Link>
    </div>
  </div>
