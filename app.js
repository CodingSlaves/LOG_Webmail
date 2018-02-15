'use strict';
//require modules
const koa = require('koa');
const Router = require('koa-router');
const db = require('mongoose');
const http2 = require('http2');
const fs = require('fs');
const logger = require('koa-logger');
const morgan = require('koa-morgan');
const serve = require('koa-static');
const render = require('./lib/render');
const index = require('./route/index');
//create Object
const app = module.exports = new koa();
const router = new Router();
//config
const serverOption = {
    key : fs.readFileSync('../key.pem'),
    cert: fs.readFileSync('../cert.pem')
};
const accessLogStream = fs.createWriteStream(__dirname + '/access.log',
    { flags: 'a' });

//use middleware
app.use(serve(__dirname+"/public"));
app.use(logger());
app.use(render);
app.use(morgan('dev',{stream : accessLogStream}));
//route
router.get('/',index.recieve)
    .get('/send',index.send)
    .post('/send')
    .get('/temp');
app.use(router.routes());
app.use(router.allowedMethods());

const server = http2.createSecureServer(serverOption,app.callback());
server.listen(443);
