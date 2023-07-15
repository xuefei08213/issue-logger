<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import IssueLogger from '@/components/IssueLogger.vue';

export default {
  name: 'HomeView',
  components: {
    IssueLogger,
  },
};
</script>
