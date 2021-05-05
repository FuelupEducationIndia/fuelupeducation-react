/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { payment as paymentActionType } from '../actions'
import InitialState from '../constants/InitialState'

function payment(state = InitialState.payment, action) {
  switch (action.type) {
    case paymentActionType.SET_PAYMENT_TYPE:
      return (state = {
        ...state,
        paymentType: action.data,
      })
    case paymentActionType.MASTERCARD_VIZA_AMERICANEXPRESS:
      return (state = {
        ...state,
        creditCardInfo: {
          ...state.creditCardInfo,
          credit_card_name: action.data,
        },
      })
    case paymentActionType.SET_CREDIT_CARD_VALUES:
      return (state = {
        ...state,
        creditCardInfo: {
          ...state.creditCardInfo,
          cardValues: action.data,
        },
      })
    default:
      return state
  }
}

export default payment
