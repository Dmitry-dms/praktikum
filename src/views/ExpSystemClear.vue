<template>
  <div class="exp__system">
    <div class="name">
      <h3>Введите название:</h3>
      <my-input class="head__input" style="width: 50%" v-model:value="this.system.name" />
      <my-button class="add__btn" @click="addSystem">Save</my-button>
    </div>
    <div class="head">
      <h3 style="margin-left: 50px">Условия</h3>
      <h3 style="margin-right: 100px">Результат</h3>
    </div>
    <div class="divider">
      <hr class="solid" />
    </div>
    <es-list @addRow="addRow" @delete="deleteRow" :rows="system.rows" />
  </div>
</template>

<script>
import EsList from "../components/ESList.vue";
export default {
  components: { EsList },
  data() {
    return {
      system: {
        id: "",
        name: "",
        rows: [
          {
            id: new Date().getTime(),
            pos: 1,
            condition: "",
            result: "",
          },
        ],
      },
    };
  },
  methods: {
    addRow(event) {
      let newObj = {
        id: event.id,
        pos: event.pos,
        condition: event.condition,
        result: event.result,
      };
      this.system.rows.push(newObj);
    },
    addSystem() {
      this.system.id = new Date().getTime();
      this.$store.commit("addSystem", this.system);
      this.$router.push('/')
    },
    deleteRow(event) {
      if (this.system.rows.length !== 1) {
        let ch = false;
        this.system.rows = this.system.rows.filter((p) => {
          if (p.id !== event.id) {
            if (ch === true) {
              p.pos = p.pos - 1;
            }
            return p.id !== event.id;
          } else {
            ch = true;
            return false;
          }
        });
      }
    },
  },
};
</script>

<style>
.head__input {
  height: 30px;
  margin-left: 40px;
}
.add__btn {
  margin-left: 20px;
  height: 40px;
}
.name {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.head {
  display: flex;
  justify-content: space-between;
}

hr.solid {
  border-top: 3px solid #bbb;
}
</style>
