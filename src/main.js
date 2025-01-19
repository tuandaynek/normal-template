const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const hostname = 'https://normal-template-alpha.vercel.app/';
// const port = 100;

//morgan (http logger)
app.use(morgan("combined"));

//handlebars (template engine)
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
  res.render('products');
});

app.listen(hostname, () => {
  console.log(`Server running at ${hostname}:/`);
});
