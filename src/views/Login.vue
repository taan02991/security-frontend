<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
        <v-card-text>
            <div class="text-h3">Login</div>
          </v-card-text>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="username"
                label="Username"
                placeholder="Username"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                placeholder="Password"
                type="password"
                outlined
              ></v-text-field>
            </v-form>
            <v-btn
              @click="submit"
              class="my-2"
              x-large
              color="success"
              dark
              block
              >Login</v-btn
            >
            <v-btn
              @click="$router.push('/sign-up')"
              x-large
              color="primary"
              dark
              block
              >Sign up</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import { Action, namespace } from 'vuex-class'
import { AuthActions, LoginCredentials } from '../types/auth'
const authModule = namespace('auth')

@Component
export default class Login extends Vue {
  private username = '';
  private password = '';
  @authModule.Action(AuthActions.login) private login!: (
    credential: LoginCredentials
  ) => void;

  submit () {
    this.login({
      username: this.username,
      password: this.password
    })
  }
}
</script>
