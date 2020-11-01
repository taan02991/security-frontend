<template>
  <v-container>
  <v-card
    class="pa-3"
  >
    <v-text-field
      v-model="title"
      label="Title"
      outlined
      required
    ></v-text-field>
    <v-textarea
      v-model="content"
      label="Content"
      outlined
      required
      rows=10
    ></v-textarea>
    <div class="d-flex">
        <v-btn
        class="ml-auto"
        color="primary"
        :disabled="!content || !title"
        @click="submit"
        >
        Post
        </v-btn>
    </div>
  </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import { Action, namespace } from 'vuex-class'
import { PostActions, PostForm } from '@/types/post'
const postModule = namespace('post')

@Component
export default class Login extends Vue {
  private title = '';
  private content = '';
  @postModule.Action(PostActions.createPost) private createPost!: (
    payload: PostForm
  ) => void;

  submit () {
    this.createPost({ title: this.title, content: this.content })
  }
}
</script>
