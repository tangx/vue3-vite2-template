<template>
  <h3>World</h3>
  <div>
    <span>BaiduApi :</span>
    <input type="text" :value="appConfig.BaiduApi" />
  </div>
</template>

<script setup lang="ts">
import { appConfig } from '@/apis/appconfig'

// console.log("appConfig::::", appConfig);

</script>

<style scoped>
</style>
