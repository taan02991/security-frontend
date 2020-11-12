<template>
  <v-container>
  <div
    class="pa-3"
  >
    <v-text-field
      v-model="post.title"
      label="Title"
      outlined
      required
    ></v-text-field>
    <v-textarea
      v-model="post.content"
      label="Content"
      outlined
      required
      rows=10
    ></v-textarea>
    <div class="d-flex">
        <v-btn
        class="ml-auto"
        color="primary"
        :disabled="!post.content || !post.title"
        @click="submit"
        >
        Update
        </v-btn>
    </div>
  </div>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import { Action, namespace } from 'vuex-class'
import { PostActions, PostForm, Post } from '@/types/post'
import { User } from '@/types/user'
const postModule = namespace('post')
const commentModule = namespace('comment')
const userModule = namespace('user')

@Component
export default class EditPost extends Vue {
  @postModule.State('post') private post!: Post
  @userModule.State('user') private user!: User
  @postModule.Action(PostActions.fetchPost) private fetchPost!: (
    id: string
  ) => void;

  @postModule.Action(PostActions.editPost) private editPost!: (
    id: string
  ) => void;

  submit () {
    this.editPost(this.$route.params.id)
  }

  async beforeMount () {
    this.fetchPost(this.$route.params.id)
    if (!this.post || (this.post.author._id !== this.user._id && this.user.role !== 'admin')) {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
