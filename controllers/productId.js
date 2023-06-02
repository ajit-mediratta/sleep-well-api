const productList = require('./productList')
const productId = (req, res) => {
  const { params: { id }} = req
  res.json(productList(id))
}

module.exports = productId