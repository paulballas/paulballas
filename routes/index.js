var express = require('express');
var nodemailer = require('nodemailer');
var projects = require('../data/data.json')
var comics = require('../data/comics.json')
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

router.get('/portfolio/abe', function(req, res, next) {
  res.render('abe', { title: 'Paul Ballas' });
});

router.get('/portfolio/class', function(req, res, next) {
  res.render('class', { title: 'Paul Ballas' });
});

router.get('/portfolio/illustrations', function(req, res, next) {
  res.render('illustrations', { title: 'Paul Ballas', comics });
});

router.get('/portfolio/marigold', function(req, res, next) {
  res.render('marigold', { title: 'Paul Ballas', comics });
});

router.get('/portfolio/pana', function(req, res, next) {
  res.render('pana', { title: 'Paul Ballas', comics });
});

router.get('/portfolio/personas', function(req, res, next) {
  res.render('personas', { title: 'Paul Ballas', comics });
});

router.get('/portfolio/ytb', function(req, res, next) {
  res.render('ytb', { title: 'Paul Ballas', comics });
});

router.get('*', function(req, res, next) {
  res.render('err', { title: 'Whoops!' });
});

module.exports = router;
