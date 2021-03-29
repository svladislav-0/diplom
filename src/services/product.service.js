import {request} from './api.service'

const getProducts = () => request({ url: 'product', method: 'get' })
const getProduct = (id) => request({ url: `product/${id}`, method: 'get' })

export {
    getProduct,
    getProducts
}