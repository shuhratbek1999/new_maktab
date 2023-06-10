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
                news.value = res.data.data;
                for(let key of res.data.data){
                    self.img = BASE_URL+ "/img/" + key.image;
                    console.log(key, BASE_URL);
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
            <div class="list" v-for="(item,index) in newss" :key="index">
                <div class="img"><img :src="'BASE_URL' + '/item.image'" width="90px" height="90px" alt="yangiliklar"></div>
                <div class="text">
                    <div class="name">
                        Tadbir bo'lib o'tdi {{ item }}
                    </div>
                    <div class="title">Muallif:20-maktab - 28/05/2018</div>
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