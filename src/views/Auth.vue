<template>
  <div class="auth">
    <h1>Авторизация</h1>
    <my-input v-model:value="this.login" />
    <my-input style="margin-top: 15px" v-model:value="this.password" />
    <my-button @click="$store.commit('changeAuth')" style="margin-top: 15px"
      >Войти</my-button
    >
  </div>
</template>

<script>
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
  mounted() {
    axios.get("http://88.85.198.5:4000/api/systems").then((res) => {
      console.log(res.data);
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