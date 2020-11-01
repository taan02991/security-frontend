import {
  PostState,
  PostGetters,
  PostMutations,
  PostActions
  , Post
} from '@/types/post'

import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree
} from 'vuex'

import router from '../../router'
import axios from 'axios'

const state: PostState = {
  posts: []
}

const getters: GetterTree<PostState, any> = {
}

const mutations: MutationTree<PostState> = {
  [PostMutations.setPosts]: (state: PostState, data) => {
    state.posts = data
  }
}

const actions: ActionTree<PostState, any> = {
  [PostActions.fetchAllPosts]: async ({ commit }) => {
    try {
      const { data } = await axios.get('/post')
      commit(PostMutations.setPosts, data)
    } catch (err) {
      console.log(err)
    }
  },
  [PostActions.createPost]: async ({ commit }, payload) => {
    try {
      await axios.post('/post', payload)
      router.push({ name: 'Home' })
    } catch (err) {
      console.log(err)
    }
  }
}

const PostModule: Module<PostState, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default PostModule
