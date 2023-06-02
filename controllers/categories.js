const productList = require('./productList')
const categories = (req, res) => {
  const allCategories = productList().map(product => product.category)
  const categories = Array.from(new Set(allCategories));
  res.json(categories)
}

module.exports = categories