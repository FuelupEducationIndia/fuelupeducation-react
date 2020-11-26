import * as actionTypes from './actionTypes'
import axios from '../../axios'
//import { areas } from '../../components/Layout/DeliveringForm/Locations'

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const initIngredients = (ing) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ing
    }
}
export const loadIngFailed = (error) => {
    return {
        type: actionTypes.LOAD_INGREDIENTS_FAILED,
        error: error
    }
}
export const setIngredients = () => {
    return dispatch => {
        axios
            .get("/ingredients.json")
            .then(res => {
                dispatch(initIngredients(res.data))
            })
            .catch(error => {
                dispatch(loadIngFailed(error))
            })
    }
}


export const selectedCity = (cityName) => {

    return{
        type: actionTypes.SELECTED_CITY,
        cityName
    }
}
export const selectedArea = (areaName) => {


    return{
        type: actionTypes.SELECTED_AREA,
        areaName
    }
}

export const clearedSelectedCity = () => {

    return{
        type: actionTypes.CLEARED_SELECTED_CITY
    }
}

export const addAreas = (areas) => {
    const Absu = [
        { value: 'Uloma lodge', label: 'Uloma lodge'},
        { value: 'Upgate', label: 'Upgate'},
        { value: 'Rc', label: 'Rc'},
        { value: 'School Cafe', label: 'School Cafe' },
    ];
    const Uturu = [
        { value: 'Ute', label: 'Ute'},
        { value: 'Iselu', label: 'Iselu'},
        { value: 'Ebem', label: 'Ebem'},
        { value: 'Aru', label: 'Aru' },
    ];
    const Okigwe = [
        { value: 'Okigwe', label: 'Okigwe'},
        { value: 'Owerri road', label: 'Owerri road'},
        { value: 'Olu', label: 'Olu'},
        { value: 'Pego', label: 'Pego' },
    ];
    
    const Isukwuato = [
        { value: 'Noya', label: 'Noya'},
        { value: 'kpuru', label: 'kpuru'},
        { value: 'Adielu', label: 'Adielu'},
        { value: 'Seetu', label: 'Seetu' },
    ];
    const Isuochi = [
        { value: 'Anyi', label: 'Anyi'},
        { value: 'Daalu', label: 'Daalu'},
        { value: 'Iru', label: 'Iru'},
        { value: 'Esaro', label: 'Esaro' },
    ];

    let currentCity;

    switch (areas) {

        case ('Absu'):
            currentCity = Absu
            break;
        case ('Uturu'):
            currentCity = Uturu
            break;
        case ('Okigwe'):
            currentCity = Okigwe
            break;
        case ('Isuochi'):
            currentCity = Isuochi
            break;
        case ('Isukwuato'):
            currentCity = Isukwuato
            break;

        default:
            currentCity = null
            break;
    }
    return{
        type: actionTypes.ADDED_AREAS,
        payload: currentCity
    }
}