const express = require('express');

const router = express.Router();
const path = `${__dirname  }/views/`;
const app = express();
// first 3 above lines loads express

router.use((req, res, next) => {
  console.log(`'/' + ${req.method}`);
  next();
});

// lines 7-10 define the router middle layer which is executed before any routes (essentially defining them)
router.get('/', (req, res) => {
  res.sendFile(`${path}index.html`);
});

router.get('/about', (req, res) => {
  res.sendFile(`${path}about.html`);
});

router.get('/projects', (req, res) => {
  res.sendFile(`${path}projects.html`);
});

router.get('/art', (req, res) => {
  res.sendFile(`${path}art.html`);
});

router.get('/opinions', (req, res) => {
  res.sendFile(`${path}opinions.html`);
});

router.get('/contact', (req, res) => {
  res.sendFile(`${path}contact.html`);
});

// 14-36 define the routes.

app.use('/', router);

app.use('*', (req, res) => {
  res.sendFile(`${path} + 404.html`);
});

app.listen(8080, () => {
  console.log('listening to your favorite tunes at port 8080');
});

// app.listen sets up the local server.
