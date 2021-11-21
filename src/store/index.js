import { createStore } from 'vuex'

export default createStore({
  state: {
    systems: [
      // {
      //   name: 'test1',
      //   id: new Date().getTime(),
      //   rows: [
      //     {
      //       pos: 0,
      //       condition: '',
      //       result: ''
      //     }
      //   ]
      // }
    ]
  },
  //computed св-ва
  getters: {
    getSystems(state) {
      return state.systems
    }
  },
  //изменение состояний
  mutations: {
    addSystem(state, system) {
      state.systems.push(system)
    },
    deleteSystem(state, system) {
      state.systems = state.systems.filter(s => s.id !== system.id)
    }
  },
  //получение данных с сервера -> мутация -> изменение state
  actions: {
  },
  modules: {
  }
})
