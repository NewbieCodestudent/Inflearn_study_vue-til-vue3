import { createStore } from "vuex"
import { getAuthFromCookie, getUserFromCookie, saveAuthToCookie, saveUserToCookie } from '@/utils/cookies'
import { loginUser } from '@/api/auth'

export default createStore({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state){
      return state.username !== ''
    },
  },
  mutations: {
    setUsername(state, username){
      state.username = username
    },
    clearUsername(state){
      state.username = ''
    },
    setToken(state, token){
      state.token = token
    },
    clearToken(state){
      state.token = ''
    },
  },
  actions: {
    async LOGIN(context, userData){
      const { data } = await loginUser(userData)
      console.log(data.user.username)
      context.commit('setUsername', data.user.username)
      console.log(data.token)
      context.commit('setToken', data.token)
      saveAuthToCookie(data.token)
      saveUserToCookie(data.user.username)
      return data
    },
  },
  modules: {},
})
