export default {
  namespaced: true,
  state: {
    loading: false,
  },
  mutations: {
    openLoading(state) {
      state.loading = true
    },
    closeLoading(state) {
      state.loading = false
    },
    
  },
  actions: {
    
  }
}
