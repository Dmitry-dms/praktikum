import { createStore } from 'vuex'
import axios from "axios";

export const ip = "88.85.198.5:4000";

export default createStore({
  state: {
    isAuth: false,
    isAdmin: false,
    systems: [
      // {
      //   name: 'test1',
      //   id: "",//uuid
      //   rows: [//Object
      //     {
      //       pos: 0,
      //       condition: "",
      //       result: ""
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
    },
    
  },
  //изменение состояний
  mutations: {
    addSystem(state, system) {
      axios.post(`http://${ip}/api/systems`, system);
     // console.log(data);
      state.systems.push(system)
    },
    deleteSystem(state, system) {
      axios.delete(`http://${ip}/api/systems/${system.Id}`, system);
      state.systems = state.systems.filter(s => s.Id !== system.Id)
    },
    changeAuth(state) {
      state.isAuth = !state.isAuth
    },
    changeAdmin(state) {
      state.isAdmin = !state.isAdmin
    },
    addAllSystems(state, systems) {
      state.systems = systems
    }
  },
  //получение данных с сервера -> мутация -> изменение state
  actions: {
  },
  modules: {
  }
})
