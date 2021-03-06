import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility'
const initialState = {
    orders: [],
    loading: false
}

const purchaseInit = (state, aciton) => {
    return updatedObject(state, { purchased: true });
}

const purchaseBurgerStart = (state, action) => {
    return updatedObject(state, { loading: true });
}

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updatedObject(action.orderData, { id: action.orderId });
    return updatedObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder)
    });
}

const purchaseBurgerFail = (state, action) => {
    return updatedObject(state, { loading: false });
}


const fetchOrdersStart = (state, action) => {
    return updatedObject(state, { loading: true })
}

const fetchOrdersSuccess = (state, action) => {
    return updatedObject(state, {
        orders: action.orders,
        loading: false
    });
}

const fetchOrderFail = (state, action) => {
    return updatedObject(state, { loading: false });
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrderFail(state, action);
        default: return state;
    }
}

export default reducer;