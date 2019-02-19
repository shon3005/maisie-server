var classNames = require('classnames');

const Spinner = (props) =>
  <div className="template_buttons-spinner row-c-c">
<<<<<<< HEAD
    { props.saving && props.kind != "link" && props.kind != "ext" ? <span>{props.saving}</span> : null}
    <div className={classNames(["col-c-c", {
      "purple": props.weight === "purple",
      "dark": props.weight === "dark",
      "light": props.weight === "light"
    }])}>
=======
    { props.saving ? <span>{props.saving}</span> : null}
    <div className="col-c-c">
>>>>>>> 76942e0b277317cca6d082cd8e1fba267a777267
      <div />
    </div>
  </div>

export default (props) => {
  function a(props) {
    return(
      <a
        href={props.href && !props.saving ? props.href : null}
        onClick={props.onClick ? props.onClick : null}
        className={classNames([
          "template_buttons",
          "row-c-c",
          props.weight ? props.weight : console.warn("Warning: weight prop is missing from button component."),
          props.kind ? props.kind : console.warn("Warning: kind prop is missing from button component."),
          {"button_active": !props.saving || (props.kind == "link" || props.kind == "ext")},
          props.className
        ])}
        id={props.id ? props.id : null}
<<<<<<< HEAD
      >{props.saving && props.kind != "link" && props.kind != "ext" ? <Spinner saving={props.saving} weight={props.weight} /> : props.children}
=======
      >{props.saving ? <Spinner saving={props.saving} /> : props.children}
>>>>>>> 76942e0b277317cca6d082cd8e1fba267a777267
        {props.kind === "link"
          ? <svg width="12px" height="11px" viewBox="0 0 12 11">
              <g id="Web-V2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="1">
                  <g id="Group-45-Copy" transform="translate(-97.000000, -5.000000)" fillRule="nonzero">
                      <g id="Group-42-Copy">
                          <g id="external" transform="translate(97.000000, 5.000000)">
                              <path d="M11.9242627,5.11141387 L7.85044408,0.494768744 C7.75037308,0.378613419 7.63172715,0.288769457 7.49085664,0.222480085 C7.35198565,0.157131626 7.20647693,0.125 7.04920131,0.125 C6.76147699,0.125 6.52423017,0.214662342 6.31487965,0.402456309 C6.11859585,0.578529015 6.02887037,0.763760205 6.02887037,0.991164835 C6.02887037,1.11640514 6.05716642,1.24419632 6.1148453,1.37822952 C6.17751943,1.52387061 6.2738806,1.66480943 6.42196903,1.82532649 L8.30126606,4.00711831 L1.30350281,4.00711831 C0.992222757,4.00711831 0.744310273,4.10886961 0.531526196,4.32385398 C0.317638825,4.53995305 0.215909091,4.7933023 0.215909091,5.11113722 C0.215909091,5.43971595 0.317234767,5.69663424 0.529923949,5.90955128 C0.74280377,6.12265916 0.991396495,6.22365092 1.30350281,6.22365092 L8.40741461,6.22365092 L6.39073063,8.26118841 C6.27306332,8.38007246 6.18402556,8.51330732 6.12160509,8.6638518 C6.05954015,8.81353882 6.02887037,8.96742086 6.02887037,9.12917215 C6.02887037,9.40959543 6.12084952,9.63028804 6.31659907,9.82045506 C6.51577264,10.0139484 6.75117208,10.1057692 7.04920131,10.1057692 C7.20186854,10.1057692 7.34416004,10.0746173 7.48099532,10.0112526 C7.62084796,9.94649064 7.7458807,9.85273191 7.85453305,9.73123486 L11.7866394,5.26763976 L11.9242627,5.11141387 Z" id="➜"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
          : props.kind === "ext"
            ? <svg width="26px" height="26px" viewBox="0 0 26 26">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="1">
                    <path d="M12.352,1.41584 C12.352,0.63389316 12.9858932,-3.18307818e-14 13.76784,-3.19744231e-14 L20.9956,-3.28626015e-14 C23.7570237,-3.33698668e-14 25.9956,2.23857625 25.9956,5 L25.9956,12.22775 C25.9956,13.0097024 25.3617024,13.6436 24.57975,13.6436 C23.7977976,13.6436 23.1639,13.0097024 23.1639,12.22775 L23.1639,4.89109 L13.1242991,14.9307 C12.5556117,15.4993874 11.6335874,15.4993874 11.0649,14.9307 C10.4962122,14.3620122 10.4962118,13.4399873 11.0648991,12.8712991 L21.1045,2.83168 L13.76784,2.83168 C12.9858932,2.83168 12.352,2.19778684 12.352,1.41584 Z M20.8515,23.1683 C22.1310333,23.1683 23.1683,22.1310333 23.1683,20.8515 L23.1683,19.95055 C23.1683,19.1685976 23.8021976,18.5347 24.58415,18.5347 C25.3661024,18.5347 26,19.1685976 26,19.95055 L26,22.26735 C26,24.3288357 24.3288357,26 22.26735,26 L5,26 C2.23857625,26 3.38176876e-16,23.7614237 0,21 L0,3.732675 C-2.52460874e-16,1.67117552 1.67117552,3.78691311e-16 3.732675,0 L6.04951,6.66133815e-16 C6.83145684,5.22492511e-16 7.46535,0.63389316 7.46535,1.41584 C7.46535,2.19778684 6.83145684,2.83168 6.04951,2.83168 L5.148515,2.83168 C3.86896236,2.83168 2.83168,3.86896236 2.83168,5.148515 L2.83168,20.1683 C2.83168,21.8251542 4.17482575,23.1683 5.83168,23.1683 L20.8515,23.1683 Z" id="external" fillRule="nonzero"></path>
                </g>
            </svg>
            : null
        }
      </a>
    )
  }
  function b(props) {
    return(
      <div
        type={props.type ? props.type : null}
        onClick={props.onClick ? props.onClick : null}
        className={classNames([
          "template_buttons",
          "row-c-c",
          props.weight ? props.weight : console.warn("Warning: weight prop is missing from button component."),
          props.kind ? props.kind : console.warn("Warning: kind prop is missing from button component."),
          {"button_active": !props.saving || (props.kind == "link" || props.kind == "ext")},
          props.className
        ])}
        id={props.id ? props.id : null}
<<<<<<< HEAD
      >{props.saving && props.kind != "link" && props.kind != "ext" ? <Spinner saving={props.saving} weight={props.weight} /> : props.children}</div>
=======
      >{props.saving ? <Spinner /> : props.children}</div>
>>>>>>> 76942e0b277317cca6d082cd8e1fba267a777267
    )
  }
  return props.href ? a(props) : b(props)
};
