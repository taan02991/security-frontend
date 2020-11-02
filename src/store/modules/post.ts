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
  post: null,
  comments: [],
  posts: []
}

const getters: GetterTree<PostState, any> = {
}

const mutations: MutationTree<PostState> = {
  [PostMutations.setPosts]: (state: PostState, data) => {
    state.posts = data
  },
  [PostMutations.setPost]: (state: PostState, data) => {
    state.post = data
    state.comments = data.comments
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
  [PostActions.fetchPost]: async ({ commit }, id) => {
    try {
      const { data } = await axios.get('/post/' + id + '?comments=true')
      commit(PostMutations.setPost, data)
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
  },
  [PostActions.deletePost]: async ({ commit }, id) => {
    try {
      await axios.delete('/post/' + id)
      router.push({ name: 'Home' })
    } catch (err) {
      console.log(err)
    }
  },
  [PostActions.editPost]: async ({ commit, state }, id) => {
    try {
      await axios.put('/post/' + id, state.post)
      router.push('/post/' + id)
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
