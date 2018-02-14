'use strict';
const koa = require('koa');
const router = require('koa-router');
const db = require('mongoose');
const app = module.exports = new koa();

app.listen(3000);