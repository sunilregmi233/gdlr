import { defineStore } from 'pinia';
import { api } from 'boot/axios'
import {  SessionStorage } from 'quasar'

export const userAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: null,
        refreshTokenTimeout: null
    }),
    actions: {
        async login(username, password) {
            let payload = {username: username, password: password}
            this.user = await api.post('/dj-rest-auth/login/', payload);
            this.startRefreshTokenTimer();
        },
        logout() {
            api.post('/dj-rest-auth/logout/')
            
            this.stopRefreshTokenTimer();
            this.user = null;
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
            const expires = new Date(jwtToken.exp * 1000);
            const timeout = expires.getTime() - Date.now() - (60 * 1000);
            this.refreshTokenTimeout = setTimeout(this.refreshToken, timeout);
        },    
        stopRefreshTokenTimer() {
            clearTimeout(this.refreshTokenTimeout);
        }
    }
})