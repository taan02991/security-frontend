<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Edit Comment</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field
              v-model="comment.title"
              label="Title"
              outlined
              required
            ></v-text-field>
            </v-row>
            <v-row>
              <v-textarea
                v-model="comment.content"
                label="Content"
                outlined
                required
                rows=4
              ></v-textarea>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="setDialog(false)"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="submit"
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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
export default class CommentEditDialog extends Vue {
  @commentModule.State('dialog') private dialog!: boolean
  @commentModule.State('comment') private comment!: boolean
  @commentModule.Action(CommentActions.editComment) private editComment!: Function
  @commentModule.Action(CommentActions.setDialog) private setDialog!: Function
  @postModule.Action(PostActions.fetchPost) private fetchPost!: Function

  async submit () {
    await this.editComment()
    await this.fetchPost(this.$route.params.id)
    this.setDialog(false)
  }
}
</script>
