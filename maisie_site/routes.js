const routes = require('next-routes')
                                                    // Name   Page   Pattern
module.exports = routes()                           // ----   ----   -----
.add('discover')                                    // about  about  /about
.add('account')
.add('messages')
.add('schedule')
.add('support')
.add('circles', '/circles/:id')
