"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[363],{8810:function(e){e.exports=gon},63961:function(e,t,c){const n=c(8810).recaptcha.site_key_v3;window.onLoadRecaptchaCallback=()=>{grecaptcha.ready((()=>{grecaptcha.execute(n,{action:"submit"}).then((e=>{document.querySelector(".g-recaptcha-response").value=e}))}))};const o=()=>{const e=document.createElement("script");e.setAttribute("src",`https://www.google.com/recaptcha/api.js?onload=onLoadRecaptchaCallback&render=${n}`),e.setAttribute("async","true"),document.head.appendChild(e)};if("IntersectionObserver"in window){const e=document.querySelector(".g-recaptcha");if(e){const t=e.closest("form"),c=new IntersectionObserver((e=>{e.some((e=>!!e.isIntersecting&&(c.unobserve(t),console.log("load recaptcha3"),o(),!0)))}));c.observe(t)}}else o()}},function(e){t=63961,e(e.s=t);var t}]);