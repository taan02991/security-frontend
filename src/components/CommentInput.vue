<template>
  <div
    class="pa-3"
  >
    <v-text-field
      v-model="title"
      label="Title"
      outlined
      required
      dense
    ></v-text-field>
    <v-textarea
      v-model="content"
      label="Content"
      outlined
      required
      rows=3
      dense
    ></v-textarea>
    <div class="d-flex">
        <v-btn
        class="ml-auto"
        color="primary"
        :disabled="!content || !title"
        @click="submit"
        >
        Comment
        </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'
import { Action, namespace } from 'vuex-class'
import { CommentActions, CommentForm } from '@/types/comment'
import { PostActions } from '@/types/post'
const commentModule = namespace('comment')
const postModule = namespace('post')

@Component
export default class CommentInput extends Vue {
  private title = '';
  private content = '';
  @Prop(Number) readonly id!: string
  @commentModule.Action(CommentActions.createComment) private createComment!: (
    payload: CommentForm
  ) => void;

  @postModule.Action(PostActions.fetchPost) private fetchPost!: (
    id: string
  ) => void;

  async submit () {
    await this.createComment({ title: this.title, content: this.content, postId: this.id })
    await this.fetchPost(this.id)
    this.title = ''
    this.content = ''
  }
}
</script>
