import { reqAxios } from "@/main";
import router from "@/router";

const state = {
    products: [],
    alert: {
        alertActive: false,
        updatedText: ''
    }
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getAlert(state) {
        return state.alert;
    }
    // getProduct(state){

    // }
}

const mutations = {
    updateProductList(state, product) {
        state.products.unshift(product);
    },
    setAlert(state) {
        setTimeout(() => {
            state.alert.alertActive = false;
            state.alert.updatedText = '';
        }, 3000);
    }
}

const actions = {
    initApp({ commit, state }) {
        state.products = [];
        reqAxios.get('/products.json')
            .then((res) => {
                console.log(res)
                let data = res.data;
                for (const key in data) {
                    data[key].key = key;
                    commit('updateProductList', data[key]);
                }
            })
    },
    saveProduct({ dispatch, commit, state }, product) {
        reqAxios.post('/products.json', product)
            .then((res) => {
                product.key = res.data.name;
                commit('updateProductList', product);
                let tradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count
                }
                dispatch('setTradeResult', tradeResult);
                setTimeout(() => {
                    state.alert.alertActive = true;
                    state.alert.updatedText = "Ürün alış işlemi başarılı";
                    commit('setAlert')
                }, 1000);
                router.push('/')
            })
    },
    saleProduct({ state, dispatch, commit }, payload) {
        this.product = state.products.filter((item) => {
            return item.key === payload.key
        });
        if (this.product) {
            this.soldCount = this.product[0].count - payload.count;
            reqAxios.patch(`/products/${payload.key}.json`, { count: this.soldCount })
                .then(res => {
                    this.product[0].count = res.data.count;
                    let tradeResult = {
                        purchase: 0,
                        sale: this.product[0].price,
                        count: payload.count
                    }
                    dispatch('setTradeResult', tradeResult);
                    setTimeout(() => {
                        state.alert.alertActive = true;
                        state.alert.updatedText = "Ürün satış işlemi başarılı";
                        commit('setAlert')
                    }, 1000);
                    router.push('/')
                })
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}