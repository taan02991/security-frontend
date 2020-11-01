<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-text>
            <div class="text-h3">Sign up</div>
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
                type="password"
                placeholder="Password"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="password2"
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                outlined
              ></v-text-field>
            </v-form>
          </v-card-text>
          <div class="d-flex justify-center my-2">
            <v-container fluid>
              <v-btn
                x-large
                color="primary"
                block
                :disabled="password!==password2 || !username"
                @click=submit()
                >Sign up</v-btn
              >
            </v-container>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import { Action, namespace } from 'vuex-class'
import { AuthActions, SignUpCredentials } from '../types/auth'
const authModule = namespace('auth')

@Component
export default class SignUp extends Vue {
  @authModule.Action(AuthActions.signUp) private signUp!: (
    credential: SignUpCredentials
  ) => void;

  private username = '';
  private password = '';
  private password2 = '';

  submit () {
    this.signUp({
      username: this.username,
      password: this.password
    })
  }
}
</script>
