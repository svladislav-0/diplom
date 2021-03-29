import {request} from './api.service'

const getCategory = (id) => request ({ url: `category/${id}`, method: 'get'})
const getCategorys = () => request ({ url: 'category', method: 'get' })

export{
    getCategory,
    getCategorys
}