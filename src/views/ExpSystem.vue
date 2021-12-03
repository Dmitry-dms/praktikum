<template>
  <div class="exp__system">
    <div class="name">
      <h3>{{ system.name }}</h3>
     
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
import MyButton from '../components/UI/MyButton.vue';
export default {
  components: { EsList, MyButton },
  data() {
    return {
      system: {},
      conditions: ""
    };
  },
  beforeMount() {
    let s = this.$store.getters.getSystems;
    let id = Number(this.$route.params.id);
    s.forEach((element) => { 
      if (element.id === id) {
        this.system = element;
      }
    });
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
.name {
  justify-content: center;
}
.head {
  display: flex;
  justify-content: space-between;
}

hr.solid {
  border-top: 3px solid #bbb;
}
</style>
