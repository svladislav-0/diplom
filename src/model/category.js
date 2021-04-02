const {model, Schema} = require ('mongoose')

const schema = new Schema ({
    name:{
        type: String,
        default: ''
    },
    product:[
    {
        type: Schema.Types.ObjectId,
        ref: 'product'
    }
    ]
})

module.exports = model('category', schema)