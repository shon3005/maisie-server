const routes = require('next-routes')
                                                    // Name   Page   Pattern
module.exports = routes()                           // ----   ----   -----                                 // about  about  /about
.add('settings')
.add('host')
.add('messages')
.add('schedule')
.add('support')
.add('circles')
.add('circle', '/circle/:id')
.add('panel', '/panel/:sub', 'panel')
.add('create')
.add('signup')
.add('signin')
