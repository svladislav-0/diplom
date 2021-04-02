const genericCrud = require ('./genericCrud')
const {category} = require ('../model')

module.exports = { 
    ...genericCrud(category)
}