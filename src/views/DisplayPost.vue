<template>
  <v-container fluid style='width:50%'>
      <h1>{{post.title}}</h1>
      <p>{{post.author.username}}</p>
      <p>{{post.content}}</p>
      <small>Created: {{post.createdAt}}</small>
      <br>
      <small>Updated: {{post.updatedAt}}</small>
      <br>
      <v-divider class="my-2"></v-divider>
      <v-list
      one-line
        >
        <v-list-item v-for="comment in comments" :key='comment.id'>
            <v-list-item-content>
            <v-list-item-title>{{comment.title}}</v-list-item-title>
            <small>
                {{comment.content}}
            </small>
            <v-list-item-subtitle>By: {{comment.author.username}} Created: {{comment.createdAt}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        </v-list>
        <v-divider class="my-2"></v-divider>
        <comment-input :id='post.id'></comment-input>

  </v-container>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'
import { Action, namespace } from 'vuex-class'
import CommentInput from '@/components/CommentInput.vue'
import { PostState, PostActions, PostForm, Post } from '@/types/post'
import { Comment } from '@/types/comment'
const postModule = namespace('post')

@Component({
  components: {
    CommentInput
  }
})
export default class DisplayPost extends Vue {
  @postModule.Action(PostActions.fetchPost) private fetchPost!: (
    id: string
  ) => Post;

  @postModule.State('post') private post!: Post
  @postModule.State('comments') private comments!: Comment[]

  mounted () {
    this.fetchPost(this.$route.params.id)
  }
}
</script>
