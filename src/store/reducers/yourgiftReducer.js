/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { yourGift as yourGiftActionType } from '../actions'
import InitialState from '../constants/InitialState'

function yourGift(state = InitialState.yourGift, action) {
  switch (action.type) {
    case yourGiftActionType.SET_DONATION_TYPE:
      if (
        action.data === 'oneTimeDonation' ||
        action.data === 'monthlyDonation'
      ) {
        state = {
          ...state,
          typeOfDonation: action.data,
          amount: 25,
          customAmount: '',
        }
      } else if (
        action.data === 25 ||
        action.data === 50 ||
        action.data === 75
      ) {
        state = {
          ...state,
          amount: action.data,
          customAmount: '',
        }
      } else {
        state = {
          typeOfDonation: '',
          amount: '',
          customAmount: action.data,
        }
      }

    // eslint-disable-next-line no-fallthrough
    default:
      return state
  }
}

export default yourGift
