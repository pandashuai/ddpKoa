
var app = require('koa')();
var logger = require('koa-logger');
var json = require('koa-json');
var views = require('koa-views');
var onerror = require('koa-onerror');
var index = require('./routes/index');
var admin = require('./routes/admin');
var session = require('koa-session');
// error handler
onerror(app);

// global middlewares
app.use(views('views', {
    root: __dirname + '/views',
    default: 'jade'
}));

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(session({
  key: 'koa_test'
}, app));

app.keys = ['im a newer secret', 'i like turtle'];

app.use(require('koa-static')(__dirname + '/public'));

app.use(function *(next){
    this.local = {};
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(index.routes(), index.allowedMethods());
app.use(admin.routes(), admin.allowedMethods());

module.exports = app;
