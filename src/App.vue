
<template>
  <div class="link-container">
    <router-link to="/hello">Hello</router-link>|
    <router-link to="/world">World</router-link>
  </div>

  <div class="view-container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
