<template>
  <router-view />
</template>


<script>

import Home from "@/views/Home.vue";
export default {
  components: { Home },
};
</script>

<style>
#app {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
</style>