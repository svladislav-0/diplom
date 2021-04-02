const genericCrud = require ('./genericCrud')
const {product} = require ('../model')

module.exports = { 
    ...genericCrud(product)
}