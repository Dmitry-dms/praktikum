<template>
  <!-- убираем стандартное действие браузера по умолчанию-->
  <form @submit.prevent>
    <h4>{{ info }}</h4>
    <div class="div">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Pass</th>
            <th>Position</th>
            <th>Input</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in this.results" :key="i">
            <th scope="row">{{ row.el1 }}</th>
            <td>{{ row.el2 }}</td>
            <td>{{ row.el3 }}</td>
            <td>{{ row.el4 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>
</template>

<script>
export default {
  components: [],
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
td,
th {
  border: 1px solid red;
  padding: 10px;
}
</style>