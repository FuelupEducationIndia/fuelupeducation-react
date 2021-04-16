/* eslint-disable prettier/prettier */
const activeTab = {
  SET_ACTIVE_TAB: 'SET_ACTIVE_TAB',
  setActiveTab: data => ({
    type: activeTab.SET_ACTIVE_TAB,
    data,
  }),
}

export default activeTab
