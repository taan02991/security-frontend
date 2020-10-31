<template>
  <v-app>
    <v-main class="bg">
      <nav-bar></nav-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default Vue.extend({
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  })
})
</script>
