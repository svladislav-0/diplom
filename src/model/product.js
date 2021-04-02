const {model, Schema} = require ('mongoose')

const schema = new Schema ({
    name:{
        type: String,
        default: ''
    },
    composition:{
        type: String,
        default: ''
    },
    price:{
        type: Number,
        default: '0'
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'category'
    }
})

module.exports = model('product',schema)