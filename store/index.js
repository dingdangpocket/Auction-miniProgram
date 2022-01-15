import Vue from 'vue'
import Vuex from 'vuex'
import userStore from "./storeModules/userStore.js"
import homeStore from "./storeModules/homeStore.js"
import searchStore from "./storeModules/searchStore.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
	  userStore,
	  searchStore,
	  homeStore
  }
})
