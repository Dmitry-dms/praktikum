<template>
  <div class="exp__system">
    <my-dialog v-model:show="showDialog"> 
      <log-form :results="results" :info="info"/>
    </my-dialog>
    <div class="name">
      <h3>{{ system.Name }}</h3>
      <my-input v-model:value="Conditions" />
      <my-button @click="sendInputs()"> Отправить</my-button>
      <my-button v-if="$store.getters.getAdmin === true" @click="updateSystem()"> Сохранить</my-button>
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
import MyDialog from "../components/UI/MyDialog.vue";
import LogForm from "../components/LogForm.vue";
import axios from "axios";
import {ip} from "../store/index.js"
export default {
  components: { EsList, MyButton,MyDialog,LogForm },
  data() {
    return {
      showDialog: true,
      system: {},
      Conditions: "",
      results: [],
      info: ""
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
  mounted(){
    this.sendInputs();
  },

  methods: {
    sendInputs() {
      let log = "Pass,Position,Input,Result\n0,0,рано встать\n1,1,рано встать,завести будильник\n"
      let s = log.split("\n")
     // console.log(s)
      let items = []
      for (let i = 1; i < s.length-1; i++) {
        const element = s[i];
        let element2 = element.split(",")
        if (element2[3] === undefined) {
          element2[3] = ''
        }
        items.push({"Pass":element2[0], "Position": element2[1], "Input":element2[2], "Result": element2[3]})
      }
      console.log(items);
      this.results = items;
      this.info = "kffff"
      // axios.get(`http://${ip}/api/systems/${this.system.Id}/search?input=${this.Conditions}`)
      //   .then((res) => {
      //     console.log(res.data);
      //     
      //     this.info = res.data.ResultText;
      //     //TODO: вывести результат не только в консоль!!!!!!
      //   });
      console.log(this.resulsts);
    },
    updateSystem() {
      let sys = this.system;
      console.log(sys);
      axios.patch(`http://${ip}/api/systems`, sys);
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
