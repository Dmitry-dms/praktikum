
<template>
  <transition-group name="systems-list">
    <systems-row
      v-for="system in systems"
      :key="system.id"
      :system="system"
      @updateSystem="$emit('updateSystem', system)"
      @deleteSystem="$emit('deleteSystem', system)"
    />
  </transition-group>


</template>

<script>
import SystemsRow from './SystemsRow.vue';
import MyButton from './UI/MyButton.vue';
export default {
  components: { MyButton, SystemsRow },
  data() {
    return {
     
    };
  },
  props: {
   systems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // addsystem() {
    //   let newObj = {
    //     id : (new Date()).getTime(),
    //     pos: this.systems.length + 1,
    //     condition: "",
    //     result: "",
    //   };

    //   this.$emit("addsystem", newObj);
    // },
  },
};
</script>

<style scoped>
.add__btn{
  display: flex;
  margin-left: auto;
  margin-top: 20px;
}
.systems-list-item {
  display: inline-block;
  margin-right: 10px;
}
.systems-list-enter-active,
.systems-list-leave-active {
  transition: all 0.4s ease;
}
.systems-list-enter-from,
.systems-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.systems-list-move {
  transition: transform 0.4s ease;
}
</style>