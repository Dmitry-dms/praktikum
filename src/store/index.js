import { createStore } from 'vuex'
import axios from "axios";

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
      async function makeGetRequest() {
        let payload = { system };

        let res = await axios.post("http://localhost:4000/api/systems", payload);

        let data = res.data;
        console.log(data);
      }

      makeGetRequest();
      state.systems.push(system)
    },
    deleteSystem(state, system) {
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
