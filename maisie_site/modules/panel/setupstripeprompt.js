import Button from '../../shared/components/button.js';

export default (props) =>
  <div className="hostfinances__setup col-c-c">
    <div className="row-c-c">
      <svg className="hostfinances__setup-maisie" viewBox="0 0 91 24" version="1.1">
          <g id="Web-V2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M3.95301034,14.0195318 C3.95301034,12.1027624 5.15583366,10.6037891 6.99781203,10.6037891 C8.89985717,10.6037891 9.97905287,11.9583783 9.97905287,13.9503008 L9.97905287,23.480767 L13.8685024,23.480767 L13.8685024,13.9849163 C13.8685024,12.0919623 15.0829803,10.6037891 16.9450845,10.6037891 C18.8213345,10.6037891 19.8945449,11.9638184 19.8945449,13.9503008 L19.8945449,23.480767 L23.6886531,23.480767 L23.6886531,12.7733727 C23.6886531,8.9868454 20.5338507,6.63522855 16.9450845,6.63522855 C14.8980953,6.63522855 13.3378282,7.46810987 12.2140236,9.22573219 L11.7848801,9.89690958 L11.446954,9.17548794 C10.742193,7.67092874 8.79624968,6.63522855 6.66475139,6.63522855 C3.13253995,6.63522855 1.55895559e-13,9.27119829 8.10656909e-14,12.7994713 L0,23.480767 L3.95301034,23.480767 L3.95301034,14.0195318 Z M33.8884084,9.8768629 C35.660593,9.8768629 36.8382719,10.832219 36.8382719,12.1849086 C36.8382719,13.0627402 36.2919997,13.6368987 35.2282715,13.7954775 L31.2004977,14.419041 C28.3350852,14.841021 26.5188614,16.5652736 26.5188614,19.1772461 C26.5188614,21.8763346 28.7064942,23.9653845 31.9965164,23.9653845 C34.0202869,23.9653845 35.579588,23.1474178 36.4384899,21.751188 L37.2510483,20.4302942 L37.2510483,21.9811042 C37.2510483,22.6291 37.2901034,23.1251337 37.3449968,23.480767 L41.1865389,23.480767 C41.1142574,22.8929373 41.0515671,22.050304 41.0515671,21.254178 L41.0515671,12.8426037 C41.0515671,9.02695142 38.7001559,6.63522855 33.9228064,6.63522855 C29.9538015,6.63522855 27.3453236,8.86476588 26.9085834,11.5597167 L30.6027301,12.3201153 C30.9319384,10.9050661 32.1727702,9.8768629 33.8884084,9.8768629 Z M33.2692437,21.0352899 C31.7191507,21.0352899 30.8009527,20.1112862 30.8009527,18.8310908 C30.8009527,17.4768588 31.6608203,16.7197174 33.0964758,16.4939802 L36.8382719,15.8931097 L36.8382719,17.1695452 C36.8382719,19.7671598 35.4114768,21.0352899 33.2692437,21.0352899 Z M44.5151039,23.480767 L48.190171,23.480767 L48.190171,7.57901802 C47.6060956,7.78266004 46.9874086,7.88850516 46.3540994,7.88850516 L46.3511751,7.88850516 C45.717866,7.88850516 45.0991792,7.78266009 44.5151039,7.57901802 L44.5151039,23.480767 Z M48.6718617,2.31301981 C48.6718617,1.03557424 47.6362875,0 46.3588419,0 C45.078441,0 44.0428667,1.03557424 44.0428667,2.31301981 C44.0428667,3.59046537 45.078441,4.62603961 46.3558866,4.62603961 C47.6362875,4.62603961 48.6718617,3.59046537 48.6718617,2.31301981 Z M67.4093816,23.480767 L71.0844487,23.480767 L71.0844487,7.57901802 C70.5003733,7.78266004 69.8816863,7.88850516 69.2483772,7.88850516 L69.2454528,7.88850516 C68.6121437,7.88850516 67.9934569,7.78266009 67.4093816,7.57901802 L67.4093816,23.480767 Z M71.5661394,2.31276372 C71.5661394,1.03546873 70.5305743,0 69.2531196,0 C67.9727096,0 66.9371445,1.03546873 66.9371445,2.31276372 C66.9371445,3.59005871 67.9727096,4.62552744 69.2501643,4.62552744 C70.5305743,4.62552744 71.5661394,3.59005871 71.5661394,2.31276372 Z M58.1794912,24 C62.1381305,24 64.5514951,21.6821876 64.5514951,18.6233976 C64.5514951,16.1733909 62.8241611,14.3066924 59.6420845,13.6538073 L57.378156,13.2050141 C56.3630503,13.0192824 55.6768021,12.4150185 55.6768021,11.492598 C55.6768021,10.355006 56.7100182,9.56532311 57.973103,9.56532311 C59.4734147,9.56532311 60.4475895,10.359826 60.7660224,11.6051147 L64.262393,10.9628528 C63.8579349,8.56152029 61.6622034,6.63522855 57.9043069,6.63522855 C54.3847936,6.63522855 51.7730892,8.95310353 51.7730892,11.9079844 C51.7730892,14.3391787 53.3119482,16.0752286 56.5233508,16.7764736 L58.4791736,17.225388 C59.8357718,17.5205611 60.5101901,18.143614 60.5101901,19.0733995 C60.5101901,20.1864989 59.53679,21.0006744 58.0762971,21.0006744 C56.4141198,21.0006744 55.3032953,20.0786723 55.0204414,18.755331 L51.4380049,19.3980986 C51.8236473,21.8769715 54.1575397,24 58.1794912,24 Z M84.9198013,20.114733 C86.0327447,19.4721748 86.8298393,18.434606 87.1954427,17.2086916 L90.3743033,17.3264364 C89.969367,19.69063 88.5986788,21.7338342 86.5406121,22.9220596 C82.6489108,25.1689344 77.5576299,23.6561724 75.1737397,19.5271534 C72.7898494,15.3981344 74.0253995,10.2325747 77.9171008,7.98569996 C81.8088021,5.73882518 86.900083,7.25158721 89.2839732,11.3806062 C89.4876401,11.7333675 89.6663609,12.096233 89.8196744,12.4672218 L78.4805351,19.0138769 L78.9372547,19.4177642 C80.6228768,20.9083975 83.0198032,21.2116974 84.9198013,20.114733 Z M77.057918,16.0921231 L85.3670606,11.2948373 L84.7338695,10.9102107 C83.1211957,9.93060524 81.1446545,9.86537314 79.5379116,10.7930266 C77.9311687,11.7206801 76.9993907,13.465031 77.041417,15.3514502 L77.057918,16.0921231 Z" id="Combined-Shape-Copy" fill-rule="nonzero"></path>
          </g>
      </svg>
      <div className="hostfinances__setup-spcr" />
      <svg className="hostfinances__setup-stripe" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 468 222.5">
        <g>
          <path class="st0" d="M414,113.4c0-25.6-12.4-45.8-36.1-45.8c-23.8,0-38.2,20.2-38.2,45.6c0,30.1,17,45.3,41.4,45.3
            c11.9,0,20.9-2.7,27.7-6.5V132c-6.8,3.4-14.6,5.5-24.5,5.5c-9.7,0-18.3-3.4-19.4-15.2h48.9C413.8,121,414,115.8,414,113.4z
             M364.6,103.9c0-11.3,6.9-16,13.2-16c6.1,0,12.6,4.7,12.6,16H364.6z"/>
          <path class="st0" d="M301.1,67.6c-9.8,0-16.1,4.6-19.6,7.8l-1.3-6.2h-22l0,116.6l25-5.3l0.1-28.3c3.6,2.6,8.9,6.3,17.7,6.3
            c17.9,0,34.2-14.4,34.2-46.1C335.1,83.4,318.6,67.6,301.1,67.6z M295.1,136.5c-5.9,0-9.4-2.1-11.8-4.7l-0.1-37.1
            c2.6-2.9,6.2-4.9,11.9-4.9c9.1,0,15.4,10.2,15.4,23.3C310.5,126.5,304.3,136.5,295.1,136.5z"/>
          <polygon className="st0" points="223.8,61.7 248.9,56.3 248.9,36 223.8,41.3 	"/>
          <rect x="223.8" y="69.3" class="st0" width="25.1" height="87.5"/>
          <path class="st0" d="M196.9,76.7l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7,15.9-6.3,19-5.2v-23C214.5,68.1,202.8,65.9,196.9,76.7z"/>
          <path class="st0" d="M146.9,47.6l-24.4,5.2l-0.1,80.1c0,14.8,11.1,25.7,25.9,25.7c8.2,0,14.2-1.5,17.5-3.3V135
            c-3.2,1.3-19,5.9-19-8.9V90.6h19V69.3h-19L146.9,47.6z"/>
          <path class="st0" d="M79.3,94.7c0-3.9,3.2-5.4,8.5-5.4c7.6,0,17.2,2.3,24.8,6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6
            C67.5,67.6,54,78.2,54,95.9c0,27.6,38,23.2,38,35.1c0,4.6-4,6.1-9.6,6.1c-8.3,0-18.9-3.4-27.3-8v23.8c9.3,4,18.7,5.7,27.3,5.7
            c20.8,0,35.1-10.3,35.1-28.2C117.4,100.6,79.3,105.9,79.3,94.7z"/>
        </g>
      </svg>
    </div>
    <span>You'll need to connect Maisie with Stripe to start hosting.</span>
    <Button kind="link" href="https://www.stripe.com">Set up Stripe account</Button>
  </div>
