import {
  CommentState,
  CommentGetters,
  CommentMutations,
  CommentActions,
  CommentForm,
  Comment
} from '@/types/comment'

import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree
} from 'vuex'

import axios from 'axios'

const state: CommentState = {
  comment: null,
  dialog: false
}

const getters: GetterTree<CommentState, any> = {
}

const mutations: MutationTree<CommentState> = {
  [CommentMutations.setComment]: (state, comment: Comment) => {
    state.comment = comment
  },
  [CommentMutations.setDialog]: (state, dialog: boolean) => {
    state.dialog = dialog
  }
}

const actions: ActionTree<CommentState, any> = {

  [CommentActions.createComment]: async ({ commit }, payload) => {
    try {
      await axios.post('/comment', payload)
    } catch (err) {
      console.log(err)
    }
  },
  [CommentActions.deleteComment]: async ({ commit }, id) => {
    try {
      await axios.delete('/comment/' + id)
    } catch (err) {
      console.log(err)
    }
  },
  [CommentActions.editComment]: async ({ commit, state }) => {
    if (state.comment == null) return
    try {
      await axios.put('/comment/' + state.comment.id, { title: state.comment.title, content: state.comment.content })
    } catch (err) {
      console.log(err)
    }
  },
  [CommentActions.setComment]: async ({ commit }, comment: Comment) => {
    commit(CommentMutations.setComment, comment)
  },
  [CommentActions.setDialog]: async ({ commit }, dialog: boolean) => {
    commit(CommentMutations.setDialog, dialog)
  }
}

const CommentModule: Module<CommentState, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default CommentModule
