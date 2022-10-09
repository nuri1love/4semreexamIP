export const state = () => ({
    things: [],
    next: null,
    prev: null
  })
  
  export const mutations = {
    setThings(state, things) {
      state.things = things
    },
    setNext(state, next) {
      state.next = next
    },
    setPrevious(state, prev) {
      state.prev = prev
    },
  }
  
  export const actions = {
    async fetch({commit}) {
      const things = await this.$axios.$get('/api/thing/?limit=2')
      commit('setThings', things.results);
      commit('setNext', things.next)
      commit('setPrevious', things.previous);
    },
    async getWithXp({commit}) {
      const things = await this.$axios.$get('/api/thing/filters?title=Меч')
      console.log(things)
      commit('setThings', things.results)
      commit('setNext', things.next);
      commit('setPrevious', things.previous);
    },
    async fetchAll({commit}) {
      const things = await this.$axios.$get('/api/thing/')
      commit('setThings', things.results)
      commit('setNext', things.next);
      commit('setPrevious', things.previous);
    },
    sortByNames({commit}, things) {
      const sortedVacancies = [...things].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      commit('setThings', sortedVacancies);
    },
    async fetchNext({commit}, nextLink) {
      const things = await this.$axios.$get('/api/' + nextLink.split('/api/')[1]); 
      commit('setThings', things.results);
      commit('setNext', things.next);
      commit('setPrevious', things.previous);
    },
    async fetchPrev({commit}, prevLink) {
      const things = await this.$axios.$get('/api/' + prevLink.split('/api/')[1]); 
      commit('setThings', things.results);
      commit('setNext', things.next);
      commit('setPrevious', things.previous);
    },
  }
  
  export const getters = {
    things: s => {
      console.log('got data')
      return s.things
    },
    next: s => s.next,
    prev: s => s.prev
  }
  