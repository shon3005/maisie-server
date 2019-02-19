var classNames = require('classnames');
var moment = require('moment');

function populateDays(day) {
  const list = [] // we need to create the list of days
  let day2num = parseInt(moment(day).startOf('month').format("e"), 10) // get the number of blank days to add
  for (let i = day2num-1; i > -1; i--) {
    let correctNum = moment(day).subtract(1, "month").daysInMonth() - i // format blank days inversely
    list.push({day: correctNum, active: false, inMonth: false}) // add blank days to month
  }
  // for (let i = 0; i < day2num; i++) { list.push({day: i, active: false, inMonth: false}) } // add blank days to beginning of month
  let daysInMonth = moment(day).daysInMonth() // get the total number of actual days in the month
  for (let i = 1; i < daysInMonth+1; i++) {
    if (moment(day).format("DD") == i) {
      list.push({day: i, active: true, inMonth: true})
    } else {
      list.push({day: i, active: false, inMonth: true})
    }
  } // add actual days to month
  let daysToAddAtEnd = 7 - (list.length % 7) // get the number of days to add at the end
  if (daysToAddAtEnd != 7) { for (let i = 1; i < daysToAddAtEnd+1; i++) { list.push({day: i, active: false, inMonth: false}) }} // add blank days to end of month
  return list
}

export default (props) => populateDays(props.date).map((d, index) => <div className={classNames(["col-c-c", { "inMonth": d.inMonth, "active": d.active }])}  key={index}>{d.day}</div> )
