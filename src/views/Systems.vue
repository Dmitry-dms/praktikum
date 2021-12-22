<template>
  <div class="head">
    <h3 style="margin-left: 50px">Существующие системы</h3>
    <my-button v-if="$store.getters.getAdmin === true" @click="$router.push('/exp-add-new')" class="add__btn"
      >Add</my-button
    >
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
        Id: this.uuidv4(),
        Name: "",
      };
     
      //отправить на сервер
      this.$emit("addSystem", newSyst);
    },
    deleteSystem(event) {
      this.$emit("deleteSystem", event);
    },
    uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
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