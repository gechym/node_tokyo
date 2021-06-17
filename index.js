require('dotenv').config();

const path = require('path');

const express = require('express')
// const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const router = require('./routers/index.js');
const routerApi = require('./api/routers/index.js');
const sessionMiddleware = require('./middlewares/session');
// var csurf = require('csurf');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
// app.use(csurf({ cookie: true }));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.set('view engine', 'pug');
app.set('views', './view');

app.get('/',(req, res) => {
  console.log();
  res.render('index',{
      name : 'Hi chào bạn ^_^',
  });
});

routerApi(app);
router(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
