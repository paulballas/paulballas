var express = require('express'),
    nodemailer = require('nodemailer'),
    projects = require('../data/data.json'),
    router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home',{ title: 'Paul Ballas' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio',{ title: 'Paul Ballas - Portfolio', projects });
});

router.get('/portfolio/process', function(req, res, next) {
  res.render('process',{ title: 'Paul Ballas - Process' });
});

router.get('/portfolio/abe', function(req, res, next) {
  res.render('abe',{ title: 'Paul Ballas - ABE' });
});

router.get('/portfolio/class', function(req, res, next) {
  res.render('class',{ title: 'Paul Ballas - ClassScout' });
});

router.get('/logos', function(req, res, next) {
  res.render('logos',{ title: 'Paul Ballas - Logos' });
});

router.get('/portfolio/marigold', function(req, res, next) {
  res.render('marigold',{ title: 'Paul Ballas - Marigold' });
});

router.get('/portfolio/pana', function(req, res, next) {
  res.render('pana',{ title: 'Paul Ballas - Pana' });
});

router.get('/portfolio/personas', function(req, res, next) {
  res.render('personas',{ title: 'Paul Ballas - Personas' });
});

router.get('/portfolio/ytb', function(req, res, next) {
  res.render('ytb',{ title: 'Paul Ballas - YTB' });
});

router.get('/portfolio/hw', function(req, res, next) {
  res.render('hw',{ title: 'Paul Ballas - HelloWallet' });
});

router.get('*', function(req, res, next) {
  res.render('err',{ title: 'Whoops!' });
});

module.exports = router;
