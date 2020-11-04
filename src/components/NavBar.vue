<template>
    <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-btn icon @click="$router.push({name: 'Home'})">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title @>Security Blog</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="mr-1" @click="$router.push({name: 'CreatePost'})">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-btn icon @click="SignOutButtonHandler">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import { Action, namespace } from 'vuex-class'
import { AuthActions } from '../types/auth'
const authModule = namespace('auth')

@Component
export default class Login extends Vue {
  private username = '';
  private password = '';
  @authModule.Action(AuthActions.logout) private logout!: () => void;

  SignOutButtonHandler () {
    this.logout()
  }
}
</script>
