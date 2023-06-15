<script>
import {defineComponent} from 'vue';
import { useCounterStore } from '../stores/counter'
import axios from 'axios'
import { storeToRefs } from 'pinia';
import HeaderItem from '../components/HeaderItem.vue';
 import Carousel from '../components/Carousel.vue';
 import Boglanish from '../components/boglanish.vue';
 import Footer from '../components/Footer.vue';
 import Info from '../components/Info.vue';
export default defineComponent({
    setup() {
    const counterStore = useCounterStore()
    const {todoList} = storeToRefs(counterStore)
    return { counterStore, todoList }
  },
  components:{HeaderItem,Carousel,Boglanish,Footer, Info},
    data(){
        return{
            newss: [],
            number: 0
        }
    },
    methods:{
        
    },
    mounted(){
        console.log(this.todoList, "counter") 
    }
})
</script>
<template>
    <div class="new">
        <HeaderItem/>
        <Carousel/>
         <div class="news_about" :class="{bosh: todoList.length == 0}">
             <p v-if="todoList.length == 0">Malumot topilmadi!</p>
             <div v-else class="news_list" v-for="(item,index) in todoList" :key="index">
                  <span class="title">Yangilik nomi:  {{ item.name }}</span> <br/>
                 <img :src="item.image" alt="" width="400"> <br/>
                 matn: {{ item.text }}  <br/>
                 vaqt: {{ item.datetime }} <br/>
                 Muallif: {{ item.aftor }}
             </div>
         </div>
        <Boglanish/>
        <Info/>
        <Footer/>
    </div>
</template>
<style scoped>
.bosh{
    width: 800px;
    height: 400px;
    text-align: center;
    line-height: 400px;
    background-color: azure;
    margin: 30px auto;
    border-radius: 5px;
}
.news_list .title{
    font-family: sans-serif;
    font-size: 25px;
    margin: 20px 0px;
}
.news_about{
    width: 800px;
    height: 400px;
    text-align: center;
    background-color: azure;
    margin: 30px auto;
    border-radius: 5px;
}
.bosh p{
    font-size: 25px;
    font-family: sans-serif;
}
.headers{
  border-bottom: 4px solid goldenrod;
  font-weight: 600;
}
.songi_news{
  width: 950px;
  padding: 20px 20px;

}
.titles{
  border-bottom: 4px solid red;
  margin: 15px 0px;
  font-size: 20px;
  font-weight: 600;
}
.titless{
  border-bottom: 4px solid rgb(231, 141, 23);
  margin: 15px 0px;
  font-size: 20px;
  font-weight: 600;
}
.new{
    margin: 20px 0px;
    width: 100%;
}
.list{
  display: flex;
  flex-wrap: wrap;
}
.newwws{
    min-height: 600px;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
}
.newwws .yangilik{
    display: flex;
    flex-direction: column;
}
.newwws .yangilik .title{
    margin: 20px 0px;
    text-align: left;
    border-bottom: 4px solid green;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
}
.newwws .yangilik .list{
    width: 900px;
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0px;
}
.newwwws{
    width: 450px;
    padding: 10px;
}
.newwwws .n-icon{
    font-size: 20px;
    margin-right: 5px;
}
.newwwws .line{
    width: 440px;
    border: 1px solid rgb(204, 202, 202);
    padding: -10px !important;
}
.newwwws .text{
    margin: 20px 0px;
}
.newwwws .foter{
    display: flex;
    justify-content: space-between;
}
.newwwws .title{
    font-size: 11px;
}
.newwwws .name{
    font-size: 20px;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
}
.newwwwss{
  display: flex;
  justify-content: space-around;
}
</style>