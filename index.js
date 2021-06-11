require('dotenv').config();

const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const router = require('./routers/index.js');
const middlewares = require('./middlewares/loginUsre');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.set('view engine', 'pug');
app.set('views', './view');

app.get('/', middlewares.loginUser ,(req, res) => {
  console.log();
  res.render('index',{
      name : res.locals._name,
  });
});

router(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
