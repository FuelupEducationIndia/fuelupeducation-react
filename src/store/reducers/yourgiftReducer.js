/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable no-return-assign */
/* eslint-disable prettier/prettier */
import { yourGift as yourGiftActionType } from '../actions'
import InitialState from '../constants/InitialState'

function yourGift(state = InitialState.yourGift, action) {
  switch (action.type) {
    case yourGiftActionType.SET_DONATION_METHOD:
      // eslint-disable-next-line no-param-reassign
      return (state = action.data)
    default:
      return state
  }
}

// eslint-disable-next-line prettier/prettier
export default yourGift
