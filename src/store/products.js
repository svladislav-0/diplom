import Vue from 'vue'
import Vuex from 'vuex'
import { getProduct, getProducts } from '../services/product.service'

const mutations = {
    SET_PRODUCTS(state, products){
        state.products = products
    },
    SET_PRODUCT(state, product){
        state.product = product
    },

    SET_ERROR(state, error){
        state.error = error
    }
}

const actions = {
    async fetchProducts({ commit }){
        try {
            const products  = await getProducts()
            commit('SET_PRODUCTS', products.data)
        } catch (error) {
            commit('SET_ERROR', error)
        }
    },

    async fetchProduct({ commit }, id){
        try {
            const product = await getProduct(id)
            commit('SET_PRODUCT', product.data)
        } catch (error) {
            
        }
    }
}

const getters = {
    products: ({ products }) => products,
    product: ({ product }) => product,
    error: ({ error }) => error
}

const state = () => ({
    products: [],
    product: {},
    error: null
})

export default {
    mutations,
    actions,
    getters,
    state
}