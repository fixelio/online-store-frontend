<template>
  <div class="container">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <back-to-top visibleoffset="500" right="30px" bottom="20px" class="shadow-lg">
      <i class="chevron-up"></i>
    </back-to-top>
  </div>
</template>

<script>

import "bootstrap-icons/font/bootstrap-icons";

export default {
  name: 'App',
}
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
