import DUMMY_DATA from './dummy_data.js';
import HostAbb from './components/host_abb.js';
import Tags from './components/tags.js';
import Details from './components/details.js';
import Divider from './components/divider.js';
import Location from './components/location.js';
import Host from './components/host.js';
import Join from './components/join.js';
import Router from 'next/router';

const Sub = (props) => <div className="circle__subhead">{props.children}</div>

export default () => {
  const x = DUMMY_DATA
  return(
    <div className="col">
      <div onClick={() => Router.back()} className="circleback row-fs-c">
        <img src={'../../static/shared/back.svg'} />
        <span>Back</span>
      </div>
      <div className="circle row">
        <div className="circle_l">
          <div className="circle_l-title">{x.title}</div>

          <div style={{height: 10}} />

          <HostAbb name={x.host.name} img={x.host.thumbnail} />

          <div style={{height: 10}} />

          <Tags content={x.tags} />

          <Divider />

          <Sub>description</Sub>
          <div className="circle_l-text">{x.description}</div>

          <Divider />

          <Sub>details</Sub>
          <div style={{height: 10}} />
          <Details
            day={x.day}
            start={x.start}
            time={x.time}
            length={x.program_length}
            type={x.space_type}
            neighborhood={x.neighborhood}
          />
          <div style={{height: 10}} />

          <Divider />

          <Sub>about the host</Sub>
          <Host
            img={x.host.thumbnail}
            name={x.host.name}
            license={x.host.license}
            education={x.host.education}
            description={x.host.description}
          />

          <Divider />
          <div style={{height: 200}} />

        </div>
        <div className="circle_r">
          <Join price={x.price} />
        </div>
      </div>
    </div>
  )
}














// GENERAL STUFF
//   circle name
//   host name + qualification
//   description
//
// CATEGORICAL STUFF
//   tags (categories)
//   "goals" (ie: "clear your mind", "solve problems", "build relationships")
//
// LOGISTICAL STUFF
//   price
//   meeting time
//   head count + cap
//   address / neighborhood
//   location type (shared, office, community center)
//   number of sessions
//   cancellation / absence policy
//   new members policy


// export default () =>
//   <div className="circle row-sb">
//     <div className="circle__cent col">
//       <span>Testy Testers</span>
//     </div>
//     <div className="circle__side col">
//       <CircleHost />
//       <MeetingTime />
//     </div>
//   </div>
