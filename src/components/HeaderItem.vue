<script setup>
import { useMessage } from "naive-ui";
import { useRouter } from "vue-router";
import {ref} from "vue"
    const message = useMessage();
    const router = useRouter();
    const  options = ref(
      [
        {
          label: "Maktab haqida",
          key: "Maktab haqida"
        },
        {
          label: "Rahbariyat",
          key: "Rahbariyat"
        },
        {
          label: "O'qituvchilar",
          key: "O'qituvchilar"
        }
      ]
    )
    const  Jamoa = ref([
      {
            label: "o'quv jarayoni",
            key: 'oquv jarayoni'
        },
        {
            label: 'Olimpiada',
            key: 'Olimpiada haqida'
        }
    ])
    const  Kurslar = ref([
        {
            label: 'Matematika',
            key: 'matimatika'
        },
        {
            label: 'Ingliz tili',
            key: 'ingliz tili kursi'
        },
        {
            label: 'Sport va jismoniy T',
            key: 'Jismoniy tarbiya'
        }
      ])
    const  handleSelect = (key) => {
        message.success(key);
        if(key == 'Rahbariyat'){
           router.push('/rahbariyat')
        }
        else if(key == "O'qituvchilar"){
          router.push('/teacher')
        }else{
          router.push('/about')
        }
      }
      const  handleSelect1 = (key) => {
        message.success(key);
        if(key == 'oquv jarayoni'){
           router.push('/oquv')
        }
        else if(key == "Olimpiada haqida"){
          console.log("salomm");
          router.push({path: '/olimpiada'})
        }
      }
      const  handleSelect2 = (key) => {
        message.success(key);
        if(key == 'Olimpiada haqida'){
           router.push({path: '/olimpiada'})
        }
        else if(key == "O'qituvchilar"){
          router.push('/teacher')
        }
      }
    const Yangilik = () => {
      let news = document.querySelector('.news');
      message.success(news.innerHTML)
      router.push('/news')
    }
    const Asosiy = () => {
      let news = document.querySelector('.asosiy');
      message.success(news.innerHTML)
      router.push('/')
    }
      const  boglanish = () => {
        message.success("manzillarimiz")
        router.push({path: '/boglanish'})
      }
      const  Login = () => {
        message.success("Login oynasiga o'tdingiz")
        router.push({path: '/login'})
      }
</script>

<template>
  <main>
     <div class="header">
        <div class="logo">
          <n-gradient-text
            gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
          >
            20 - sonli Maktab
          </n-gradient-text>
        </div>
        <div class="navbar">
          <ul class="navbar-list">
            <li @click="Asosiy" class="asosiy">Asosiy</li>
            <li @click="Yangilik" class="news">Yangiliklar</li>
            <li class="blog">
                  <n-dropdown
                    trigger="hover"
                    placement="bottom-start"
                    :options="options"
                    @select="handleSelect"
                   >
                    <n-Text>Maktab</n-Text>
                  </n-dropdown>
            </li>
            <li>
                <n-dropdown
                    trigger="hover"
                    placement="bottom-start"
                    :options="Jamoa"
                    @select="handleSelect1"
                   >
                    <n-Text>Tashkiliy ishlar</n-Text>
                  </n-dropdown>
            </li>
            <li>
                <n-dropdown
                    trigger="hover"
                    placement="bottom-start"
                    :options="Kurslar"
                    @select="handleSelect2"
                   >
                    <n-Text>Kurslar</n-Text>
                  </n-dropdown>    
            </li>
            <li @click="boglanish">Bog'lanish</li>
            <li @click="Login">Login</li>
          </ul>
        </div>
     </div>
  </main>
</template>
