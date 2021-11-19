<template>
  <div class="exp__system">
    <div class="head">
      <h3 style="margin-left: 50px;">Условия</h3>
      <h3 style="margin-right: 100px;">Результат</h3>
    </div>
    <div class="divider">
      <hr class="solid" />
    </div>
     <!-- <es-list v-if="list.type !== undefined" @addRow="addRow" @delete="deleteRow" :rows="rows" /> -->
    <es-list @addSystem="$emit('addSystem',this.rows)" @addRow="addRow" @delete="deleteRow" :rows="rows" />
  </div>
</template>

<script>
import EsList from '../components/ESList.vue';
export default {
  components: {EsList},
  data() {
    return {
      rows: [
        {
          id: new Date().getTime(),
          pos: 1,
          condition: "",
          result: "",
        },
      ],
    };
  },
  props: {
    list : {
      type: Array,
      required: false
    }
  },
  methods: {
    addRow(event) {
      let newObj = {
        id: event.id,
        pos: event.pos,
        condition: event.condition,
        result: event.result,
      };
      this.rows.push(newObj);
    },
    deleteRow(event) {
      if (this.rows.length !== 1) {
        let ch = false;
        this.rows = this.rows.filter((p) => {
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

.head {
  display: flex;
  justify-content: space-between;
}

hr.solid {
  border-top: 3px solid #bbb;
}
</style>
