import {
  AuthState,
  LoginCredentials,
  SignUpCredentials,
  AuthActions,
  AuthMutations,
  AuthGetters
} from '@/types/auth'
import { User, UserActions } from '@/types/user'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import router from '../../router'
import axios from 'axios'

const state: AuthState = {
  token: null
}

const getters: GetterTree<AuthState, any> = {
  [AuthGetters.isLogin]: state => !!state.token
}

const mutations: MutationTree<AuthState> = {
  [AuthMutations.setToken]: (state, payload: string) => {
    state.token = payload
  }
}

const actions: ActionTree<AuthState, any> = {
  [AuthActions.login]: async (
    { commit, dispatch },
    payload: LoginCredentials
  ) => {
    try {
      const response = await axios.post('/auth/login', payload)
      commit(AuthMutations.setToken, response.data)
      await dispatch(AuthActions.setAxiosHeader)
      router.push({ name: 'Home' })
    } catch (error) {
      console.log(error)
    }
  },
  [AuthActions.signUp]: async (
    { commit, dispatch },
    payload: SignUpCredentials
  ) => {
    try {
      const response = await axios.post<string>('/auth/register', payload)
      commit(AuthMutations.setToken, response.data)
      await dispatch(AuthActions.setAxiosHeader)
      router.push({ name: 'Home' })
    } catch (error) {
      console.log(error)
    }
  },
  [AuthActions.logout]: async ({ commit }) => {
    commit(AuthMutations.setToken, null)
    router.push({ name: 'Login' })
  },
  [AuthActions.VerifyToken]: async ({ state, commit, dispatch }) => {
    try {
      if (state.token) {
        await dispatch(AuthActions.setAxiosHeader)
        await dispatch('user/' + UserActions.fetchUser, {}, { root: true })
      } else {
        await dispatch(AuthActions.logout)
      }
    } catch (e) {
      await dispatch(AuthActions.logout)
    }
  },
  [AuthActions.setAxiosHeader]: ({ state }) => {
    if (state.token) {
      axios.defaults.headers.common.Authorization = `Bearer ${state.token}`
    }
  }
}

const AuthModule: Module<AuthState, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default AuthModule
