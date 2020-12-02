import * as actionTypes from '../actions/actionTypes'
import update from '../utility'

const initialState = {
    error: null,
    loading: false,
    userId: null,
    tokenId: null
}
const authState = (state, action) => {
    return update(state, {
        loading: true
    })
}

const authSuccess = (state, action) => {
    return update(state, {
        ...action,
        loading: false,
        userId: action.userId,
        tokenId: action.tokenId,
        error: null
    })
}

const authFailed = (state, action) => {
    return update(state, {
        loading: false,
        error: action.error
    })
}

const clearError = (state, action) => {
    return update(state, {
        ...action,
        error: null
    })
}

const authLogOut = (state, action) => {
    return update(state, {
        ...action,
        loading: false,
        userId: null,
        tokenId: null,
        error: null
    })
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authState(state, action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAILED: return authFailed(state, action)
        case actionTypes.AUTH_LOGOUT: return authLogOut(state, action)
        case actionTypes.AUTH_CLEAR_ERROR: return clearError(state, action)
        default: return state

    }
}

export default auth
