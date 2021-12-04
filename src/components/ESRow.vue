<template>
  <div class="row">
    <div class="row__inside">
      <strong class="id"> {{ row.Position }}</strong>
      <div class="inputs">
        <my-input v-model:value="row.Condition" />
        <my-input
          v-model:value="row.Result"
          style="width: 30%; margin-left: 20px"
        />
      </div>
    </div>

    <my-button @click="$emit('delete', row)" class="row__btns"
      >Delete</my-button
    >
    <!-- <div class="row__btns">
        <my-button @click="$emit('remove',row)">Удалить</my-button>
        <my-button @click="$router.push(`/rows/${row.id}`)">Открыть</my-button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
.row__btns {
  padding: 5px;
  margin-top: 15px;
  margin-left: 10px;
}
.row__inside {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
}
.inputs {
  display: flex;
  flex-direction: row;
  width: 100vh;
}
.id {
  margin-right: 10px;
}
</style>