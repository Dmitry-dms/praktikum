<template>
  <div class="exp__system">
    <div class="name">
      <h3>{{ system.Name }}</h3>
      <my-input v-model:value="this.Conditions"/>
      <my-button @click="sendInputs()"> Отправить</my-button>
      <my-button @click="updateSystem()"> Сохранить</my-button>
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
import MyButton from "../components/UI/MyButton.vue";
import axios from "axios";
export default {
  components: { EsList, MyButton },
  data() {
    return {
      system: {},
      Conditions: "",
    };
  },
  beforeMount() {
    let s = this.$store.getters.getSystems;
    let id = this.$route.params.id;
    s.forEach((element) => {
      if (element.Id === id) {
        this.system = element;
      }
    });
  },

  methods: {
    sendInputs() {
      axios.get(`http://88.85.198.5:4000/api/systems/${this.system.Id}/search?input=${this.Conditions}`).then((res) => {
      console.log(res.data);
      alert(res.data.ResultText)
      //TODO: вывести результат не только в консоль!!!!!!
    });
    },
    updateSystem() {
      let sys = this.system;
       console.log(sys);
      async function makeGetRequest() {


        let res = await axios.patch("http://88.85.198.5:4000/api/systems", sys);

        let data = res.data;
       
      }

      makeGetRequest();
    },
    addRow(event) {
      
      let newObj = {
        Id: event.Id,
        Position: event.Position,
        Condition: event.Condition,
        Result: event.Result,
      };
      this.system.Rules.push(newObj);
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
.name {
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.head {
  display: flex;
  justify-content: space-between;
}

hr.solid {
  border-top: 3px solid #bbb;
}
</style>
