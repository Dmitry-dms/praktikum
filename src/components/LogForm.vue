<template>
  <!-- убираем стандартное действие браузера по умолчанию-->
  <form @submit.prevent>
    <h4>{{ info }}</h4>
    <div class="div">
      <SimpleTable :rows="resulsts" />
    </div>
  </form>
</template>

<script>
import { SimpleTable } from "simple-table-vue";
export default {
  components: [SimpleTable],
  props: {
    results: { Array },
    info: { String },
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      // генерируем событие для изменения массива постов
      this.$emit("create", this.post);
      this.post = {};
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
</style>