import * as actionTypes from '../actions/actionTypes'
import update from '../utility'


const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    selectedCity: null,
    selectedArea: null,
    areas: null
}

const INGREDIENT_PRICES = {
    salad: 0.8,
    bacon: 1.7,
    cheese: 2.3,
    meat: 1
};


const addIngredient = (state, action) => {
    return update(state, {
        ...action,
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    })
}

const selectedCity = (state, action) => {
    return update(state, {
        ...action,
        selectedCity: action.cityName
    })
}
const selectedArea = (state, action) => {
    let area;
    if (action.areaName) {
        area = action.areaName
    }
    else {
        area = null
    }
    return update(state, {
        ...action,
        selectedArea: area
    })
}

const clearedSelectedCity = (state, action) => {
    return update(state, {
        ...action,
        selectedCity: null
    })
}
const addedAreas = (state, action) => {
    return update(state, {
        ...action,
        areas: action.payload
    })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECTED_CITY: return selectedCity(state, action)
        case actionTypes.SELECTED_AREA: return selectedArea(state, action)
        case actionTypes.CLEARED_SELECTED_CITY: return clearedSelectedCity(state, action)
        case actionTypes.ADDED_AREAS: return addedAreas(state, action)



        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],

            }
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                error: false,
                totalPrice: 4
            }
        case actionTypes.LOAD_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }
}

export default reducer