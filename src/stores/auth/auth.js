import { defineStore } from 'pinia';
import { api } from 'boot/axios'
import { LocalStorage, SessionStorage } from 'quasar'
import { useLocalStorage } from "@vueuse/core"

export const userAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: null,
        is_login: useLocalStorage('is_login', false),
        refreshTokenTimeout: null
    }),
    getters: {
      getUser: (state) => state.user,
      isAuth: (state) => { return state.is_login}
    
    },  
    actions: {
        async login(username, password) {
            let payload = {username: username, password: password}
            this.user = await api.post('/dj-rest-auth/login/', payload);
            if(this.user) {
                this.is_login = true
            }
            // let value = LocalStorage.getItem(key)
            this.startRefreshTokenTimer();
        },
        async logout() {
            await api.post('/dj-rest-auth/logout/')
            
            this.stopRefreshTokenTimer();
            LocalStorage.set('is_login', false)
            
        },
        async refreshToken() {
            this.user = await api.post('dj-rest-auth/token/refresh/')
            this.startRefreshTokenTimer();
        },
        startRefreshTokenTimer() {
            // parse json object from base64 encoded jwt token
            // const jwtBase64 = this.user.jwtToken.split('.')[1];
            const jwtBase64 = this.user.data.refresh_token.split('.')[1];
            const jwtToken = JSON.parse(atob(jwtBase64));
    
            // set a timeout to refresh the token a minute before it expires
            const expires = new Date(jwtToken.exp * 10000);
            const timeout = expires.getTime() - Date.now() - (60 * 10000);
            this.refreshTokenTimeout = setTimeout(this.refreshToken, timeout);
        },    
        stopRefreshTokenTimer() {
            clearTimeout(this.refreshTokenTimeout);
        }
    }
})