
<template>
  <h3>Hello</h3>
  <div>
    <span>AliApi :</span>
    <input type="text" :value="appConfig.AliApi" />
  </div>
</template>

<script setup lang="ts">
import { appConfig } from '@/apis/appconfig'

</script>

<style scoped>
</style>
