const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

//set view
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'views/css')));
app.use('/images', express.static(path.join(__dirname, 'views/images')));

const data = fs.readFileSync(path.join(__dirname, '/MOCK_DATA.json'), 'utf-8');
const products = JSON.parse(data);

app.get('/', (req, res) => {
  res.render('index.ejs', {
    title: 'Home page',
    header: 'Home',
  });
});
app.get('/about', (req, res) => {
  res.render('about.ejs', {
    title: 'About us',
  });
});
app.get('/contact-us', (req, res) => {
  res.render('contact.ejs', {
    title: 'Contact us',
  });
});
app.get('/products', (req, res) => {
  res.render('products/products.ejs', {
    title: 'Products 📦📦📦',
    products,
  });
});
app.get('/product/:id', (req, res) => {
  let id = req.params.id;
  products.find((product) => {
    if (product.id == id) {
      return res.render('products/single-product.ejs', {
        title: 'single products 📦📦📦',
        id,
        product,
      });
    }
  });
});

app.listen(4000, () => {
  console.log('App listening on port 4000!');
});
