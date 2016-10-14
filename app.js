var serve = require('koa-static');
var koa = require('koa');
var app = koa();

// 静态资源服务器 
app.use(serve('./static/'));
 
app.use(require('./routes/shutdown').routes());

app.listen(3000);
 
console.log('listening on port 3000');