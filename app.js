var serve = require('koa-static');
var koa = require('koa');
var app = koa();

// 静态资源服务器 
app.use(serve('./static/'));

//cgi路由表
app.use(require('./routes/routerConfig').routes());

app.listen(12800);
 
console.log('listening on port 12800');