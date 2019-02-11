const routes = require('next-routes')
                                                    // Name   Page   Pattern
module.exports = routes()                           // ----   ----   -----
.add('home')                                    // about  about  /about
.add('settings')
.add('host')
.add('messages')
.add('schedule')
.add('support')
.add('circle', '/circle/:id')
.add('signup')
.add('signin')
