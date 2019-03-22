import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';
const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}

const INGREDIENTS_PRICE = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updatedObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName],
        building: true
    }
    return updatedObject(state, updatedState);
}

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngs = updatedObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName],
        building: true
    }
    return updatedObject(state, updatedSt);
}

const setIngredient = (state, action) => {
    return updatedObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            meat: action.ingredients.meat,
            cheese: action.ingredients.cheese
        },
        totalPrice: 4,
        error: false,
        building: false
    });
}

const fetchIngredientsFailed = (state, action) => {
    return updatedObject(state, { error: true });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredient(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
}

export default reducer