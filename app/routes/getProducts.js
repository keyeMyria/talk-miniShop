'use strict';

const router = require('express').Router();
const debug = require('debug')('smdp:routes:getProducts');
const db = require('../db');

const SYSTEM_ERROR = 'SYSTEM_ERROR';
const NO_DATA = 'NO_DATA';

router.get('/', (req, res, next) => {
  db.getProducts()
    .then((r) => {
      if (!r.length) {
        return next(NO_DATA);
      }
      res.locals.data = r;
      return next();
    })
    .catch((e) => {
      return next(SYSTEM_ERROR);
    });
});

router.get('/', (req, res, next) => {
  return res.status(200).send(res.locals.data);
});


router.use((err, req, res, next) => {
  if (err === NO_DATA) {
    res.sendStatus(404);
    return next();
  }
  res.sendStatus(500);
  return next();
});

module.exports = router;
