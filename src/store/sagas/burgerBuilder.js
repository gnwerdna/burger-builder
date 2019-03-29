import { put } from 'redux-saga/effects'
import axios from '../../axios-orders'
import * as actions from '../actions/index'
export function* initIngredientSaga() {
    try {
        const response = yield axios.get(
            'https://my-burger-project-c7a98.firebaseio.com/ingredients.json'
        );
        yield put(actions.setIngredients(response.data));
    } catch (err) {
        yield put(actions.fetchIngredientsFailed());
    }
}