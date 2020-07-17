const Koa = require('koa');
//const express=require ('express')
const parser = require('koa-parser')
const bodyParser = require('body-parser')
const port = 3000
const app = new Koa();
//const app = express();
const router = require('./routes');
const db = require('./models');
const serve = require('koa-static');
const path = require('path');
app.use(bodyparser());
app.use(bodyParser.json())

db.sequelize.sync().then(() => {
  console.log('Successfully synchronized')
}).error(err => console.log(err));

app.context.db = db;

app
  .use(router.routes())
  .use(router.allowedMethods());

  //app.use(express.static(path.join(__dirname, 'public')));
   app.use(serve(__dirname + '/public'));

app.listen(port)
console.error(`listening on port ${port}`)
