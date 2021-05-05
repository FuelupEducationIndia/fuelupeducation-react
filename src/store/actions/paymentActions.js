const payment = {
  SET_PAYMENT_TYPE: 'SET_PAYMENT_TYPE',
  MASTERCARD_VIZA_AMERICANEXPRESS: 'MASTERCARD_VIZA_AMERICANEXPRESS',
  SET_CREDIT_CARD_VALUES: 'SET_CREDIT_CARD_VALUES',

  setPaymentType: data => ({
    type: payment.SET_PAYMENT_TYPE,
    data,
  }),
  setMastercardVizaAmericanexpress: data => ({
    type: payment.MASTERCARD_VIZA_AMERICANEXPRESS,
    data,
  }),
  setCreditCardValues: data => ({
    type: payment.SET_CREDIT_CARD_VALUES,
    data,
  }),
}
export default payment
