import {
  UserState,
  UserGetters,
  UserMutations,
  UserActions
  , User
} from '@/types/user'

import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree
} from 'vuex'

import axios from 'axios'
import { AuthActions } from '@/types/auth'

const state: UserState = {
  user: null
}

const getters: GetterTree<UserState, any> = {
}

const mutations: MutationTree<UserState> = {
  [UserMutations.setUser]: (state: UserState, user: User) => {
    state.user = user
  }
}

const actions: ActionTree<UserState, any> = {
  [UserActions.fetchUser]: async ({ commit, dispatch }) => {
    try {
      const { data } = await axios.get('/user/me')
      commit(UserMutations.setUser, data)
    } catch {
      await dispatch('auth/' + AuthActions.logout, {}, { root: true })
    }
  }
}

const UserModule: Module<UserState, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default UserModule
