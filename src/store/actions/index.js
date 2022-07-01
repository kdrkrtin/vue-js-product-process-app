import { reqAxios } from '@/main';
const initTradeResult = ({ commit }) => {
    reqAxios.get('/trade-result.json')
        .then(res => {
            let purchase = 0, sale = 0;
            if (res.data) {
                purchase = res.data.purchase;
                sale = res.data.sale;
            }
            let setTrade = {
                purchase,
                sale
            }
            commit('updateTradeResult', setTrade)
        });
}
const setTradeResult = ({ commit, state }, tradeResult) => {
    commit('updateTradeResult', tradeResult);
    let tradeData = {
        purchase: state.purchase,
        sale: state.sale
    }
    reqAxios.put('/trade-result.json', tradeData);
}

export { initTradeResult, setTradeResult }