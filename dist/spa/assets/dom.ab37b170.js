import{a3 as r}from"./index.91d6c796.js";function u(t){if(t===window)return{top:0,left:0};const{top:n,left:e}=t.getBoundingClientRect();return{top:n,left:e}}function f(t){return t===window?window.innerHeight:t.getBoundingClientRect().height}function c(t,n){const e=t.style;for(const o in n)e[o]=n[o]}function s(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const n=r(t);if(n)return n.$el||n}export{c,s as g,f as h,u as o};