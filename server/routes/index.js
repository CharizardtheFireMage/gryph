'use strict';

const config = require('../config');

function home(req, res) {
  res.render('index', {title: 'Hydrocity', isDev: config.isDev});
}

module.exports = home;
