const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const router = require('./routers/index.js');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'pug');
app.set('views', './view');

 
app.get('/', (req, res) => {
  res.render('index',{
      name : `Lê Hoàng Khôi :)`,
  });
});

router(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
