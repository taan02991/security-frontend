import {
  CommentState,
  CommentGetters,
  CommentMutations,
  CommentActions
} from '@/types/comment'

import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree
} from 'vuex'

import axios from 'axios'

const state: CommentState = {
  a: 'asd'
}

const getters: GetterTree<CommentState, any> = {
}

const mutations: MutationTree<CommentState> = {
}

const actions: ActionTree<CommentState, any> = {

  [CommentActions.createComment]: async ({ commit }, payload) => {
    try {
      await axios.post('/comment', payload)
    } catch (err) {
      console.log(err)
    }
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
