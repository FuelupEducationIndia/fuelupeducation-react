/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { activeTab as activeTabActionType } from '../actions'
import InitialState from '../constants/InitialState'

function activeTab(state = InitialState.activeTab, action) {
  switch (action.type) {
    case activeTabActionType.SET_ACTIVE_TAB:
      return (state = action.data)
    default:
      return state
  }
}

export default activeTab
