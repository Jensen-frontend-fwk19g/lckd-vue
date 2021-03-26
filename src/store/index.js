import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './../router'
import CryptoJS from 'crypto-js';

Vue.use(Vuex)

const API = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    plainView: Object,
    passwords: []
  },
  mutations: {
    setTokenAndKey(state, tokenAndKey){
      state.token = tokenAndKey.token;
      state.userkey = tokenAndKey.userkey;
    },
    setLckd(state, passwords){
      state.passwords = passwords;
    },
    setPlainView(state, plainView){
      state.plainView = plainView;
    }
  },
  actions: {
    async login(ctx, cred) {

      let resp = await axios.post(`${API}/auth/login`, {
        username: cred.username,
        password: cred.password
      });

      // Session Storage
      sessionStorage.setItem('lckdToken', resp.data.token);
      sessionStorage.setItem('lckdUserkey', resp.data.userkey);

      // Route to /passwords
      router.push('/passwords')

    },
    async getLckd({ commit }){

      let resp = await axios.get(`${API}/lckd`, {
        headers: {
          'authorization': `Bearer ${sessionStorage.getItem('lckdToken')}`
        }
      });

      commit('setLckd', resp.data)

    },
    async viewPassword({ commit }, lckd){
      
      // decrypt with userkey
      const password = CryptoJS.AES.decrypt(lckd.password, sessionStorage.getItem('lckdUserkey')).toString(CryptoJS.enc.Utf8)

      // put in plainview
      commit('setPlainView', {
        id: lckd.id,
        domain: lckd.domain,
        username: lckd.username,
        password: password
      });
    },
    async newLckd(ctx, newLckd){

      let resp = await axios.post(`${API}/lckd`, newLckd, {
        headers: {
          'authorization': `Bearer ${sessionStorage.getItem('lckdToken')}`
        }
      });

      console.log(resp) // error handle

      // sync with db
      ctx.dispatch('getLckd')

      // route
      router.push('/passwords')

    }
  },
  modules: {
  }
})
