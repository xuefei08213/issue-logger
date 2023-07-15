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
  width: 800px;
  height: 800px;
}
</style>
