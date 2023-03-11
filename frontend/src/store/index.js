import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Ne state i rujna t dhanat

// Actions i perdorum per me i bo commit mutatations

// Mutatations i perdorum per me update state-in


export default new Vuex.Store({
  state: {
    events: [],
    event: {}
  },
  getters: {
  },
  mutations: {
    GET_EVENTS(state, payload){
      state.events = payload;
    },
    GET_EVENT(state, payload) {
      state.event = payload
    }
  },
  actions: {
    async getEvents({commit}) {
      try{
        const response = await fetch("http://localhost:3000/events");
  
        const data = await response.json();
        commit('GET_EVENTS', data)
      }
      catch(error) {
        console.log(error)
      }
    },

    async getEvent({commit}, id) {
      try{
        const response = await fetch(`http://localhost:3000/events/${id}`);
        const data = await response.json();
  
        commit('GET_EVENT', data)
      }
      catch(error) {
        console.log(error)
      }
    },


  },
  modules: {
  }
})
