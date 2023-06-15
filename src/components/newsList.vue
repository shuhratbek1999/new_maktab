<script setup>
import {inject,ref,onMounted} from 'vue'
import {ChatbubbleEllipsesOutline} from '@vicons/ionicons5';
import axios from 'axios'
const BASE_URL = inject('BASE_URL');
const news = ref([])
const data = () =>{
        axios({
            method: 'get',
            url: 'news/all'
        }).then(res => {
            if(res.data.data){
                for(let key of res.data.data){
                    const trimmedTitle = key.text.substring(0, 50);
                    key.text = trimmedTitle;
                    key.image = BASE_URL+ key.image;
                    news.value.push(key);
                    console.log(key)
                }
            }
        })
      }
onMounted(() => {
    data()
})
</script>
<template>
    <div class="newsList">
        <slot>
            <div class="list" v-for="(item,index) in news" :key="index">
                <img :src="item.image" alt="" width="100">
                <div class="img"><img :src="item.image" width="90px" height="90px" alt="yangiliklar"></div>
                <div class="text">
                    <div class="name">
                        {{ item.text.replace(/^(.{50}[^\s]*).*/, "$1") }}
                    </div>
                    <div class="title">{{ item.aftor }} - {{ item.datetime }}</div>
                </div>
          </div>
        </slot>
    </div>
</template>
<style scoped>
.newsList{
    width: 350px;
}
.newsList .list{
    display: flex;
    padding: 20px 0px;
    align-items: center;
    border-bottom: 1px solid rgb(163, 161, 161);
}
.list .img{
    margin-right: 10px;
}
.text .name{
    font-size: 20px;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    cursor: pointer;
}
.text .title{
    font-size: 11px;
}
</style>