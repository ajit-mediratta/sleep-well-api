const productList = require('./productList')
const categoryProducts = (req, res) => {
  const { params: { categoryName }} = req
  const products = productList().filter(product => product.category === categoryName)
  res.json(products)
}

module.exports = categoryProducts