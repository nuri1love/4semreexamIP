export const state = () => ({
    thingsCount: 0,
    orders: {},
    partners: {}
  })
  
  export const mutations = {
    setThingsCount(state, thingsCount) {
      state.thingsCount = thingsCount
    },
    setOrders(state, orders) {
      state.orders = orders
    },
    setPartners(state, partners) {
      state.partners = partners
    }
  }
  
  export const actions = {
    async nuxtServerInit({dispatch, commit}) {
      const orders = await this.$axios.$get('/api/thing/');
      commit('setThingsCount', orders.count || 0);
      commit('setOrders', orders);
      console.log('nuxtServerInit');
    },
    async refresh({commit}) {
      const orders = await this.$axios.$get('/api/thing/')
      commit('setOrders', orders)
    }
  }
  
  export const getters = {
    thingsCount: s => s.thingsCount,
    clients: s => s.clients,
    partners: s => s.partners
  }
  