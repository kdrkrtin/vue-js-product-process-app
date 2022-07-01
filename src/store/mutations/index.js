export const updateTradeResult = (state, tradeResult) => {
    if (tradeResult.count) {
        state.purchase += parseFloat(tradeResult.purchase) * parseFloat(tradeResult.count);
        state.sale += parseFloat(tradeResult.sale) * parseFloat(tradeResult.count);
    } else {
        state.purchase += parseFloat(tradeResult.purchase);
        state.sale += parseFloat(tradeResult.sale);
    }
    state.balance = parseFloat(state.sale) - parseFloat(state.purchase);
}