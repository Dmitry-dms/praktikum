<template>
  <div class="head">
    <h3 style="margin-left: 50px">Существующие системы</h3>
    <my-button @click="$router.push('/exp-add-new')" class="add__btn">Add</my-button>
  </div>
  <div class="divider">
    <hr class="solid" />
  </div>
  <systems-list @deleteSystem="deleteSystem" :systems="systems" />
</template>

<script>
import SystemsList from "../components/SystemsList.vue";
export default {
  components: { SystemsList },
  methods: {
    addSystem() {
      let newSyst = {
        id: new Date().getTime(),
        name: "",
      };
      this.$emit("addSystem", newSyst);
    },
    deleteSystem(event) {
      this.$emit("deleteSystem", event);
    },
  },
  props: {
    systems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.add__btn {
  padding: 5px;
  margin-top: 20px;
  height: 30px;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

hr.solid {
  border-top: 3px solid #bbb;
}
</style>