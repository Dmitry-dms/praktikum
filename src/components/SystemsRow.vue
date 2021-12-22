<template>
  <div class="system">
    <div class="system__inside" @click="$router.push(`/systems/${system.Id}`)">
      <h3>{{ system.Name }}</h3>
    </div>

    <my-button v-if="$store.getters.getAdmin === true" @click="$store.commit('deleteSystem',system)" class="system__btns">Delete</my-button> 
    <!-- <my-button @click="$emit('deleteSystem', system)" class="system__btns"
      >Delete</my-button
    > -->
    <!-- <div class="system__btns">
        <my-button @click="$emit('remove',system)">Удалить</my-button>
        <my-button @click="$router.push(`/systems/${system.id}`)">Открыть</my-button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    system: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.system {
  display: flex;
  flex-direction: system;
}
.system__btns {
  padding: 5px;
  margin-top: 15px;
  margin-left: 10px;
}
.system__inside {
  margin-top: 15px;
  width: 400px;
  border: 2px solid teal;
  display: flex;
  justify-content: center;
}
h3{
  margin-left: 10px;
}
</style>