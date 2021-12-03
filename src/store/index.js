import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth: false,
    isAdmin: false,
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
    },
    getAuth(state) {
      return state.isAuth
    },
    getAdmin(state) {
      return state.isAdmin
    }
  },
  //изменение состояний
  mutations: {
    addSystem(state, system) {
      state.systems.push(system)
    },
    deleteSystem(state, system) {
      state.systems = state.systems.filter(s => s.id !== system.id)
    },
    changeAuth(state) {
      state.isAuth = !state.isAuth
    },
    changeAdmin(state) {
      state.isAdmin = !state.isAdmin
    }
  },
  //получение данных с сервера -> мутация -> изменение state
  actions: {
  },
  modules: {
  }
})
