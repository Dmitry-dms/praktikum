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
import * as http from "http";
export default {
  components: { MyInput, MyButton },
  data() {
    return {
      login: "",
      password: "",
    };
  },
  mounted() {
    http.get("http://localhost:4000/api/subjects" | {"Access-Control-Allow-Origin": "*",}, (res) => {
        console.log(res.content);  
      }).on("error", (e) => {
        console.error(`Got error: ${e.message}`);
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