'use strict';

const config = require('../config');

function home(req, res) {
  res.render('index', {title: 'hydrocity', isDev: config.isDev});
}

module.exports = home;
