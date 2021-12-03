<template>
  <div v-if="$store.getters.getAuth === false"   class="auth">
    <auth/>
  </div>
  <div v-else class="home">
    <div class="hello" v-if="$store.getters.getSystems.length === 0">
      <h1>Не найдено ни одной экспертной системы, создайте новую</h1>
      <my-button @click="$router.push('/exp-add-new')" class="hello__btn">Создать</my-button>
    </div>

    <systems v-else @addSystem="addSystem" @deleteSystem="deleteSystem" :systems="$store.getters.getSystems"/>
  </div>
</template>

<script>

// @ is an alias to /src

import MyButton from "../components/UI/MyButton.vue";
import Auth from './Auth.vue';
import Systems from './Systems.vue';

export default {
  name: "Home",
  components: {
    MyButton,
    Systems,
    Auth,
  },
  data() {
    return {
      //systems: this.$store.getters.getSystems,
    };
  },
  methods: {
   deleteSystem(event) {
      console.log(event);
      this.systems = this.systems.filter((p) => {
        return p.id !== event.id;
      });
    },
    addSystem(event) {
     
      this.systems.push(event)
    },
  },
};
</script>

<style scoped>

.home {
  margin: 0 auto;
  align-content: center;
  align-items: center;
}
.hello {
  margin: 50vh auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
h1 {
  margin: 0;
}
.hello__btn {
  margin-left: 40px;
}
</style>
