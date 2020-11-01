<template>
<v-container fluid style="width:50%">
  <v-list
      three-line
    >
    <v-list-item-group>
      <v-list-item v-for="post in posts" :key='post.id' @click='displayPost(post.id)'>
        <v-list-item-content>
          <v-list-item-title>{{post.author.username}}</v-list-item-title>
          <h2>{{post.title}}</h2>
          <v-list-item-subtitle>{{post.content}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      </v-list-item-group>
    </v-list>
</v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { User } from '@/types/user'
import { Post, PostActions } from '@/types/post'
const userModule = namespace('user')
const postModule = namespace('post')
@Component
export default class Home extends Vue {
  @userModule.State('user') private user!: User;
  @postModule.State('posts') private posts!: Post[];
  @postModule.Action(PostActions.fetchAllPosts) private fetchAllPosts!: () => void;

  displayPost (id: number) {
    this.$router.push('/post/' + id)
  }

  mounted () {
    this.fetchAllPosts()
  }
}
</script>
