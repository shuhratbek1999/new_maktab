<script>
import {defineComponent} from 'vue'
import {ChatbubbleEllipsesOutline} from '@vicons/ionicons5';
import axios from 'axios'
import { useCounterStore } from '../stores/counter'
import {useRouter} from 'vue-router'
// const BASE_URL = inject('BASE_URL');
export default defineComponent({
   components:{ChatbubbleEllipsesOutline},
   setup() {
    const counterStore = useCounterStore();
    const router = useRouter();

    return { counterStore, router }
  },
   data(){
    return{
        news: []
    }
   },
   methods:{
    datas(){
        let self = this;
        axios({
            method: 'get',
            url: 'news/all'
        }).then(res => {
            if(res.data.data){
                console.log(res.data.data)
                self.news = res.data.data;
            }
        })
      },
      Batafsil(id){
        console.log(id)
            axios({
                method: 'get',
                url: 'news/one/' + id
            }).then(res => {
                this.counterStore.newsAdd(res.data.data);
                this.router.push({path: '/news_about'})
            })
      }
   },
   mounted(){
    this.datas()
   }
})
</script>
<template>
    <div class="newsss">
        <slot>
            <div class="newss" v-for="(item,index) in news" :key="index">
                <div class="title">{{ item.aftor }} - {{ item.datetime }}</div>
                <div class="name">
                    {{ item.name }}
                </div>
                <div class="line"></div>
                <div class="text">
                    {{ item.text }}
                </div>
                <div class="foter">
                    <div class="btn" @click="Batafsil(item.id)">
                        <n-button type="error">
                        BATAFSIL...
                        </n-button>
                    </div>
                    <div class="btn">
                        <n-button type="tertiary">
                        <n-icon><ChatbubbleEllipsesOutline /></n-icon>  FIKR QOLDIRISH
                        </n-button>
                    </div>
                </div>
            </div>
        </slot>
    </div>
</template>