<script>
import {defineComponent} from 'vue'
import {ChatbubbleEllipsesOutline} from '@vicons/ionicons5';
// import axios from 'axios'
// const BASE_URL = inject('BASE_URL');
export default defineComponent({
   components:{ChatbubbleEllipsesOutline},
   data(){
    return{
        newss: [],
    }
   },
//    methods:{
//       data(){
//         let self = this;
//         axios({
//             method: 'get',
//             url: 'news/all'
//         }).then(res => {
//             if(res.data.data){
//                 self.newss = res.data.data;
//                 console.log(res.data);
//             }
//         })
//       }
//    },
//    mounted(){
//       this.data();
//    }
})
</script>
<template>
    <div class="newsss">
        <slot>
            <div class="newss">
                <div class="title">Muallif:18-maktab - 28/05/2018</div>
                <div class="name">
                    Informatikadan viktorina
                </div>
                <div class="line"></div>
                <div class="text">
                    2018 yilning 18 aprel kuni “Yil o’qituvchisi” ko’rik tanlovining tuman bosqichi o’tkazildi.  “Yil o’qituvchisi” ko’rik tanlovining tuman bosqichida ona tili fani o’qituvc...
                </div>
                <div class="foter">
                    <div class="btn">
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