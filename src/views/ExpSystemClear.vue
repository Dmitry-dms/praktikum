<template>
  <div class="exp__system">
    <div class="name">
      <h3>Введите название:</h3>
      <my-input
        class="head__input"
        style="width: 50%"
        v-model:value="this.system.Name"
      />
      <my-button class="add__btn" @click="addSystem">Save</my-button>
    </div>
    <div class="head">
      <h3 style="margin-left: 50px">Условия</h3>
      <h3 style="margin-right: 100px">Результат</h3>
    </div>
    <div class="divider">
      <hr class="solid" />
    </div>
    <es-list @addRow="addRow" @delete="deleteRow" :rows="system.Rules" />
  </div>
</template>

<script>
import EsList from "../components/ESList.vue";
export default {
  components: { EsList },
  data() {
    return {
      system: {
        Id: "",
        Name: "",
        Rules: [
          {
            Id: this.uuidv4(),
            Position: 1,
            Condition: "",
            Result: "",
          },
        ],
      },
    };
  },
  methods: {
    addRow(event) {
      let newObj = {
        Id: event.Id,
        Position: event.Position,
        Condition: event.Condition,
        Result: event.Result,
      };
      this.system.Rules.push(newObj);
    },
    uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    },
    addSystem() {
      this.system.Id = this.uuidv4();
      this.$store.commit("addSystem", this.system);
      this.$router.push("/");
    },
    deleteRow(event) {
      if (this.system.Rules.length !== 1) {
        let ch = false;
        this.system.Rules = this.system.Rules.filter((p) => {
          if (p.Id !== event.Id) {
            if (ch === true) {
              p.Position = p.Position - 1;
            }
            return p.Id !== event.Id;
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
