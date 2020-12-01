export default {
  namespaced: true,
  state: {
    loading: false,
  },
  mutations: {
    openLoading(state: any) {
      state.loading = true
    },
    closeLoading(state: any) {
      state.loading = false
    },
    
  },
  actions: {
    
  }
}
