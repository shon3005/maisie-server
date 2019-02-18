// server.js
const next = require('next');
const cookie = require('cookie');
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
  const user = req.headers.cookie ?
    cookie.parse(req.headers.cookie) :
    null;
  (!user || !JSON.parse(user.user).token) && (route.page !== '/signup' && route.page !== '/signin') ?
    res.redirect('/') :
    null;
    console.log(query)
  app.render(req, res, route.page, query)
});

// With express
const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(3000)
});
