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
import Component from 'vue-class-component'
import { AuthActions, AuthGetters } from './types/auth'
import { Action, Getter, namespace } from 'vuex-class'
const authModule = namespace('auth')

@Component({
  components: {
    NavBar
  }
})
export default class App extends Vue {
  @authModule.Getter(AuthGetters.isLogin) private isLogin!: () => boolean;
  @authModule.Action(AuthActions.VerifyToken) private verifyToken!: () => void;
  beforeMount () {
    this.verifyToken()
  }
}
</script>
