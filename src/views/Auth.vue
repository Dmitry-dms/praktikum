<template>
  <div class="auth">
    <h1>Авторизация</h1>
    <my-input v-model:value="this.login" />
    <my-input style="margin-top: 15px" v-model:value="this.password" />
    <my-button @click="checkIsAdmin()" style="margin-top: 15px"
      >Войти</my-button
    >
  </div>
</template>

<script>
import {ip} from "../store/index.js"
import MyButton from "../components/UI/MyButton.vue";
import MyInput from "../components/UI/MyInput.vue";
import axios from "axios";
export default {
  components: { MyInput, MyButton },
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    checkIsAdmin(){
      if (this.login === "admin" && this.password === "admin"){
        this.$store.commit('changeAdmin')
        this.$store.commit('changeAuth')
      } else {
        this.$store.commit('changeAuth')
      }
    }
  },
  mounted() {
    axios.get(`http://${ip}/api/systems`).then((res) => {
      console.log(res.data);
      res.data.forEach(element => {
        element.Rules.sort((prev,next)=>prev.Position-next.Position);
      });
      this.$store.commit("addAllSystems", res.data); //ДОБАВИТЬ ВСЕ СИСТЕМЫ
    });
  },
};
</script>

<style>
.auth {
  margin: auto auto;
  flex-direction: column;
  justify-items: baseline;
  display: flex;
}
</style>