const express = require('express');
const { Seller } = require('../database/database');

const app = express();

app.use(express.json());

app.get('/sellers', (req, res) => {
  Seller.find({}, (err, results) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(results);
  });
});

app.get('/sellers/:prodId', async (req, res) => {
  const sellers = await Seller.find({});
  let notFound = true;
  sellers.forEach((seller) => {
    seller.products.forEach((product) => {
      if (product.id === Number(req.params.prodId)) {
        notFound = false;
        res.status(200).send(seller);
      }
    });
  });
  if (notFound) {
    res.status(404).send('Not Found');
  }
});

module.exports = app;
