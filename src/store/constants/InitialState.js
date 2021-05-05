import { donorInformation } from '../actions'

const InitialState = {
  activeTab: 0,
  yourGift: {
    typeOfDonation: 'oneTimeDonation',
    amount: 25,
    customAmount: null,
  },
  donorInformation: {
    title: {},
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: null,
    ext: '',
    addres: '',
    city: '',
    userCountry: '',
    userRegion: '',
    postalCode: '',
  },
  payment: {
    paymentType: 'creditCard',
    creditCardInfo: {},
  },
}

export default InitialState
