/* eslint-disable prettier/prettier */
import { donorInformation } from '../actions'

const InitialState = {
  activeTab: 0,
  yourGift: {
    firstRowButtons: {
      oneTimeDonation: true,
      monthlyDonation: false,
    },
    secondRowButtons: {
      $25: true,
      $50: false,
      $75: false,
    },
    customAmount: '',
  },
  donorInformation: {},
  payment: {},
}

export default InitialState
