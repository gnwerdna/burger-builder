import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (err) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: err
    }
}

export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.get('/orders.json')
            .then(res => {
                dispatch(purchaseBurgerSuccess(res.data, orderData));
            })
            .catch(err => {
                dispatch(purchaseBurgerFail(err))
            });
    }
}