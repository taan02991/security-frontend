<template>
  <v-container fluid style='width:50%' v-if='post'>
      <h1>{{post.title}}</h1>
      <p>{{post.author.username}}</p>
      <p>{{post.content}}</p>
      <small>Created: {{post.createdAt}}</small>
      <br>
      <small>Updated: {{post.updatedAt}}</small>
      <br>
      <div class="d-flex">
        <v-btn
        class="ml-auto"
        color="success"
        @click="onEditPost"
        >
        EDIT
        </v-btn>
        <v-btn
        class="ml-2"
        color="error"
        @click="onDeletePost"
        >
        DELETE
        </v-btn>
    </div>
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
            <v-btn icon v-if='user.username===comment.author.username || user.role==="moderator"'>
              <v-icon
                color="black"
                dark
              >
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn icon v-if='user.username===comment.author.username || user.role==="moderator"' >
              <v-icon
                color="black"
                dark
                @click="onDeleteComment(comment.id)"
              >
                mdi-delete
              </v-icon>
            </v-btn>
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
import { User } from '@/types/user'
import { Comment, CommentActions } from '@/types/comment'
const postModule = namespace('post')
const commentModule = namespace('comment')
const userModule = namespace('user')

@Component({
  components: {
    CommentInput
  }
})
export default class DisplayPost extends Vue {
  @postModule.Action(PostActions.fetchPost) private fetchPost!: (
    id: string
  ) => Post;

  @postModule.Action(PostActions.deletePost) private deletePost!: (
      id: string
    ) => void;

  @commentModule.Action(CommentActions.deleteComment) private deleteComment!: (
    id: string
  ) => void;

  @postModule.State('post') private post!: Post
  @postModule.State('comments') private comments!: Comment[]
  @userModule.State('user') private user!: User

  mounted () {
    this.fetchPost(this.$route.params.id)
  }

  async onDeleteComment (id: string) {
    await this.deleteComment(id)
    await this.fetchPost(this.$route.params.id)
  }

  async onDeletePost (id: string) {
    await this.deletePost(this.$route.params.id)
  }
}
</script>
