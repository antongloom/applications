export default {
	state: {
		tasks: []
  },
  mutations: {
  	newTask(state, payload) {
  		state.tasks.push(payload)
  	}
  },
  actions: {
  	newTask({commit}, payload) {
  		commit('newTask', payload)
  	}
  },
  getters: {
  	tasks(state) {
  		return state.tasks
  	}
  }
}

