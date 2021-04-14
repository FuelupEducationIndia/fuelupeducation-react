const yourGift = {
  SET_DONATION_METHOD: 'SET_DONATION_METHOD',

  setDonationMethod: data => ({
    type: yourGift.SET_DONATION_METHOD,
    data,
  }),
}

export default yourGift
