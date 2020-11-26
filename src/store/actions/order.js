import * as orderActions from './actionTypes'
import axios from '../../axios'

export const orderBurgerStart = (id, orderData) => {
    return {
        type: orderActions.BURGER_ORDER_START,
        orderId: id,
        orderData: orderData,
    }
}

export const orderBurgerFailed = (error) => {
    return {
        type: orderActions.BURGER_ORDER_FAILED,
        error: error
    }
}
export const orderBurgerSuccess = () => {
    return {
        type: orderActions.BURGER_ORDER_SUCCESS
    }
}

export const orderRedirect = () => {
    return {
        type: orderActions.ORDER_REDIRECT
    }
}

export const initBurgerStart = (token, data) => {

    return dispatch => {
        dispatch(orderBurgerSuccess())
        axios
            .post("/orders.json?auth=" + token, data)
            .then(response => {
                dispatch(orderBurgerStart(response.data.name, data))
            })
            .catch(error => {
                dispatch(orderBurgerFailed(error))
            });
    }
}

export const fetchedOrderStart = () => {

    return {
        type: orderActions.FETCHED_ORDERS_START
    }

}

export const fetchedOrdersFailed = err => {
    return {
        type: orderActions.FETCHED_ORDERS_FAILED,
        err: err
    }
}

export const fetchedOrderDelete = (id) => {
    return {
        type: orderActions.FETCHED_ORDERS_DELETE,
        id: id
    }
}

export const deleteAllOrders = () => {
    return {
        type: orderActions.DELELTE_ALL_ORDERS
    }
}

export const fetchedOrderSuccess = (order) => {
    return {
        type: orderActions.FETCHED_ORDERS_SUCCESS,
        order
    }
}

export const fetchedOrdersInit = (token, userId) => {
    return dispatch => {
        dispatch(fetchedOrderStart())
        axios.get('/orders.json?auth=' + token)
            .then(res => {
                const fetchedOrders = []
                for (let key in res.data) {
                    if(res.data[key].userId === userId){
                        fetchedOrders.push({
                            ...res.data[key],
                            id: key,
                        })

                    }
                }
               
                dispatch(fetchedOrderSuccess(fetchedOrders))
            })
            .catch(err => {
                dispatch(fetchedOrdersFailed(err))
            })
    }

}