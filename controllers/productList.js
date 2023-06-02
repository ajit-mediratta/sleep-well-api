const data = [
  {
    "id": 1,
    "title": "CPAP Machine",
    "price": 850,
    "description": "CPAP machines work to keep the airway clear by delivering enough pressurized air to prevent it from collapsing.",
    "category": "electronics",
    "image": "http://localhost:3001/images/1_cpapMachine.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "BiPAP machines",
    "price": 1500,
    "description": "BiPAP machines work by sending a stream of pressurized air from the device into the upper airway through an attached hose and mask.",
    "category": "electronics",
    "image": "http://localhost:3001/images/2_bipapMachines.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "DreamWisp Nasal CPAP Mask",
    "price": 95,
    "description": "The DreamWisp has a hollow frame that can divert air to an open tube if the other side of your body closes off as you sleep, which can happen to side sleepers.",
    "category": "accessories",
    "image": "http://localhost:3001/images/3_dreamWispNasalMask.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Wisp Cushion",
    "price": 29,
    "description": "This is the replacement silicone cushion for the Respironics Wisp Nasal CPAP mask. There are different sizes for you to choose from.",
    "category": "accessories",
    "image": "http://localhost:3001/images/4_wispCushion.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  }
]
const productList = (id) => {
  if (id) { 
    const productById = data.filter(product => product.id == id)
    return productById.length ? productById[0] : {} 
  }
  return data

} 

module.exports = productList