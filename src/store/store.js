import { createStore } from 'vuex'
import product from './modules/product';
import * as getters from './getters/index'
import * as mutations from './mutations/index'
import * as actions from './actions/index'

export const store = createStore({
    state: {
        purchase: 0.00,
        sale: 0.00,
        balance: 0.00
    },
    getters,
    mutations,
    actions,
    modules: {
        product
    }
})