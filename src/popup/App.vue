<template>
  <issue-logger />
</template>

<script>
import IssueLogger from '@/components/IssueLogger.vue';

export default {
  name: 'App',
  components: { IssueLogger },
};
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
