const productList = require('./productList')
const products = (req, res) => {
  res.json(productList())
}

module.exports = products