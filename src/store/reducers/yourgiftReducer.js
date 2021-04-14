/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { yourGift as yourGiftActionType } from '../actions'
import InitialState from '../constants/InitialState'

function yourGift(state = InitialState.yourGift, action) {
  switch (action.type) {
    case yourGiftActionType.SET_DONATION_METHOD:
      return (state = action.data)
    default:
      return state
  }
}

export default yourGift
