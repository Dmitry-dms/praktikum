
<template>
  <transition-group name="rows-list">
    <es-row
      v-for="row in rows"
      :key="row.id"
      :row="row"
      @update="$emit('update', row)"
      @delete="$emit('delete', row)"
    />
  </transition-group>

  <my-button class="add__btn" @click="addRow">ADD</my-button>
  <!-- <my-button class="save__btn" @click="addSystem">Save</my-button> -->
</template>

<script>
import MyButton from "./UI/MyButton.vue";
import EsRow from "./ESRow.vue";
export default {
  components: { MyButton, EsRow },
  data() {
    return {};
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addRow() {
      let newObj = {
        id: new Date().getTime(),
        pos: this.rows.length + 1,
        condition: "",
        result: "",
      };
      this.$emit("addRow", newObj);
    },
    addSystem() {
      this.$emit("addSystem", true);
    },
  },
};
</script>

<style scoped>
.save__btn {
}
.add__btn {
  display: flex;
  margin-left: auto;
  margin-top: 20px;
}
.rows-list-item {
  display: inline-block;
  margin-right: 10px;
}
.rows-list-enter-active,
.rows-list-leave-active {
  transition: all 0.4s ease;
}
.rows-list-enter-from,
.rows-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.rows-list-move {
  transition: transform 0.4s ease;
}
</style>