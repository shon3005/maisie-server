export default () =>
  <div className="hostpanel__top row-sb-c">
    <div className="row-fs-c">
      <div className="hostpanel__top-img"><img src="../../static/shared/matthew.png" /></div>
      <div className="hostpanel__top_text col">
        <div className="hostpanel__top_text-first row-fs-c"><span className="hostpanel__top-name">Matthew Kochakian</span><div className="col-c-c"><span>LCSW</span></div></div>
        <span className="hostpanel__top_text-second">Maise host since March 2019</span>
        <a href="#">View Profile</a>
      </div>
    </div>
    <div className="row-c-c">
      <div className="hostpanelpay col">
        <span className="hostpanelpay-tag">balance</span>
        <span className="hostpanelpay-value">$350.10</span>
      </div>
      <div style={{width: 50}} />
      <div className="hostpanelpay col">
        <button className="banktransfer">Transfer to Bank</button>
                      <div style={{height: 10}} />
        <button className="viewstripe">View Stripe Account</button>
      </div>
    </div>
  </div>
