//for jsonp

const Koa = require('koa');
const Router = require('koa-router');
const jsonp = require('koa-jsonp');
const logger = require('koa-logger');
const app = new Koa();
const router = new Router();

app.use(logger());
app.use(jsonp({
  callbackName:'cb',//defaults to 'callback'
  //domain:'localhost'//使用该api的一级域名
}));

router.get('/', ctx => {
   ctx.body = { //会自动转为json字符串的
    name:'Bonnie',
    age:26
  }
});

app.use(router.routes());

app.listen(3000, () => {
  console.log('Listening 3000');
});