/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { donorInformation as donorInformationActionType } from '../actions'
import InitialState from '../constants/InitialState'

function donorInformation(state = InitialState.donorInformation, action) {
  switch (action.type) {
    case donorInformationActionType.SET_DONOR_INFORMATION:
      return (state = action.data)
    default:
      return state
  }
}

export default donorInformation
