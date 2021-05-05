const yourGift = {
  SET_DONATION_TYPE: 'SET_DONATION_TYPE',

  setDonationType: data => ({
    type: yourGift.SET_DONATION_TYPE,
    data,
  }),
}

export default yourGift
