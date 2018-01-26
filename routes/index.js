var express = require('express');
var nodemailer = require('nodemailer');
var projects = require('../data/data.json')
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paul Ballas' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Paul Ballas - Portfolio', projects });
});

router.get('/portfolio/process', function(req, res, next) {
  res.render('process', { title: 'Paul Ballas - Process' });
});

router.get('*', function(req, res, next) {
  res.render('err', { title: 'Whoops!' });
});

module.exports = router;
