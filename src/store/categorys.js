import Vue from 'vue'
import Vuex from 'vuex'

import { getCategory, getCategorys } from '../services/category.service'

const mutations = {
    SET_CATEGORY(state, Category){
        state.Category = Category
    },

    SET_CATEGORYS(state, Categorys){
        state.Categorys = Categorys
    },

    SET_ERROR(state, Error){
        state.Error = Error
    }
}

const actions = {
    async fetchCategory({commit}, id){
        try {
            const category = await getCategory(id)
            commit('SET_CATEGORY', category.data)
        } catch (error) {
            commit('SET_ERROR', error)
        }
    },

    async fetchCategorys({commit}){
        try {
            const categorys = await getCategorys()
            commit('SET_CATEGORYS', categorys.data)
        } catch (error) {
            
        }
    }
}

const getters = {
    Category: ({Category}) => Category,
    Categorys: ({Categorys}) => Categorys,
    Error: ({Error}) => Error
}

const state = () => ({
    Category: {},
    Categorys: [],
    Error: null
})

export default {
    mutations,
    actions,
    getters,
    state
}
