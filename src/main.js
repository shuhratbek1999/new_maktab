import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
// import App from './App.vue'
import router from './router'
import naivue from 'naive-ui'
import Provider from './components/Provider.vue';
let BASE_URL = "http://194.113.153.92:3013/api/v1/admin-app/";
const Bearer = "Bearer ";
axios.interceptors.request.use(
    function (config) {
      config.headers["Authorization"] = Bearer + localStorage.getItem("token");
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  // axios.interceptors.response.use(
  //   function (response) {
  //     if(response.data.error) {
  //       if(response.data.error_code == 401) {
  //         router.push("/login");
  //       }
  //       if(response.data.error_code == 400){
  //         if(response.data.errors){
  //           error_store.error_text = response.data.errors[0].msg;
  //         }
  //       }
  //       else{
  //         error_store.error_text = response.data.message;
  //       }
  //     }
  //     return response.data;
  //   },
  //   function (error) {
  //     // console.log(error);
  //     if (error.code === "ERR_NETWORK") {
  //       // return Promise.reject('Internetga ulanishda xatolik!');
  //       error_store.error_text = "Internetga ulanishda xatolik!";
  //     } else 
  //     if (error.response.data.error_code == 401) {
  //       error_store.error_text = error.response.data.message;
  //       router.push("/login");
  //     }
  //     return Promise.reject(error);
  //   }
  // );
  axios.defaults.baseURL = BASE_URL;
const app = createApp(Provider)
app.provide('BASE_URL', BASE_URL)
app.use(createPinia())
app.use(router)
app.use(naivue)
app.mount('#app')
