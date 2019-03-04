function requests(a) {
  return a.requests.map((req, index) =>
    <div key={index} className="circles_req__ind row-sb-c">
      <div className="circles_req__ind_l col">
        <span className="circles_req__ind_l-name">{req}</span>
        <a>View Profile</a>
      </div>
      <div className="circles_req__ind_r row-fe-c">
        <div className="email" style={{backgroundImage: "url('https://s3.amazonaws.com/maisie-files/shared/email_lightgray.svg')", backgroundRepeat: "no-repeat", backgroundSize: "18px 18px", backgroundPosition: "center"}} />
        <div className="accept" style={{backgroundImage: "url('https://s3.amazonaws.com/maisie-files/shared/accept.svg')", backgroundRepeat: "no-repeat", backgroundSize: "15px 15px", backgroundPosition: "center"}} />
        <div className="deny" style={{backgroundImage: "url('https://s3.amazonaws.com/maisie-files/shared/deny.svg')", backgroundRepeat: "no-repeat", backgroundSize: "12px 12px", backgroundPosition: "center"}} />
      </div>
    </div>
  )
}

export default (props) => {
  return props.r.map((circle, index) =>
    <div key={index} className="circles_req">
      <div className="circles_req-title">{circle.name}</div>
      {requests(circle)}
    </div>
)}
