const donorInformation = {
  SET_DONOR_INFORMATION: 'SET_DONOR_INFORMATION',

  setDonorInformation: data => ({
    type: donorInformation.SET_DONOR_INFORMATION,
    data,
  }),
}
export default donorInformation
