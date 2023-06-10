<script setup>
import { useMessage } from "naive-ui";
 import HeaderItem from '../components/HeaderItem.vue';
 import Carousel from '../components/Carousel.vue';
 import {ChevronForward} from '@vicons/ionicons5';
 import Boglanish from '../components/boglanish.vue';
 import Footer from '../components/Footer.vue';
 import Info from '../components/Info.vue';
 import {ref} from 'vue';
 import {useRouter} from 'vue-router';
 const message = useMessage();
 const router = useRouter();
const Home = () => {
    router.push('/')
}
</script>
<template>
    <div class="olimpiada">
        <HeaderItem/>
        <Carousel/>
        <div class="oquv">
            <div class="oquv_list">
                <div class="img"><img src="../../public/rasm/olim1.jpg" width="400" alt=""></div>
                <div class="text">
                    <div class="title">Xalqaro olimpiada tayyorlov kursi</div>
                    Muhammad al Xorazmiy nomidagi ixtisoslashtirilgan maktab matematika, informatika, ingliz tili va 
                fizika fanlarini chuqurlashtirib o’qitishga mo’ljallangan bo’lib, o’quvchilar 4 ta asosiy fanlardan 
                chuqur bilim oladilar. Bu o’quv tizimi o’quvchilarda AT, matematika, fizika fanlaridan o’z istedodlarini 
                va qobiliyatlarini maksimal darajada oshirish imkonini beradi.
                </div>
            </div>
            <div class="oquv_list">
                <div class="img"><img src="../../public/rasm/olim2.jpg" width="400" alt=""></div>
                <div class="text">
                <div class="title">Mastery of Mathematics</div>
                    Muhammad al Xorazmiy nomidagi ixtisoslashtirilgan maktab matematika, informatika, ingliz tili va 
                fizika fanlarini chuqurlashtirib o’qitishga mo’ljallangan bo’lib, o’quvchilar 4 ta asosiy fanlardan 
                chuqur bilim oladilar. Bu o’quv tizimi o’quvchilarda AT, matematika, fizika fanlaridan o’z istedodlarini 
                va qobiliyatlarini maksimal darajada oshirish imkonini beradi.
                </div>
            </div>
            <div class="oquv_list">
                <div class="img"><img src="../../public/rasm/olim3.jpg" width="400" alt=""></div>
                <div class="text">
                   <div class="title">Masofaviy Matematika 2023</div>
                    Muhammad al Xorazmiy nomidagi ixtisoslashtirilgan maktab matematika, informatika, ingliz tili va 
                fizika fanlarini chuqurlashtirib o’qitishga mo’ljallangan bo’lib, o’quvchilar 4 ta asosiy fanlardan 
                chuqur bilim oladilar. Bu o’quv tizimi o’quvchilarda AT, matematika, fizika fanlaridan o’z istedodlarini 
                va qobiliyatlarini maksimal darajada oshirish imkonini beradi.
                </div>
            </div>
            <div class="oquv_list">
                <div class="img"><img src="../../public/rasm/room.jpg" width="400" alt=""></div>
                <div class="text">
                   <div class="title">Masofaviy Matematika 2023</div>
                    Muhammad al Xorazmiy nomidagi ixtisoslashtirilgan maktab matematika, informatika, ingliz tili va 
                fizika fanlarini chuqurlashtirib o’qitishga mo’ljallangan bo’lib, o’quvchilar 4 ta asosiy fanlardan 
                chuqur bilim oladilar. Bu o’quv tizimi o’quvchilarda AT, matematika, fizika fanlaridan o’z istedodlarini 
                va qobiliyatlarini maksimal darajada oshirish imkonini beradi.
                </div>
            </div>
        </div>
        <Boglanish/>
        <Footer/>
        <Info/>
    </div>
</template>
<style scoped>
.oquv{
    width: 100%;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
}
.oquv .oquv_list{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0px;
}
.oquv .oquv_list .text{
    width: 700px;
    font-size: 20px;
    font-family: sans-serif;
}
.oquv .oquv_list .text .title{
    font-weight: 600;
    font-size: 24px;
}
</style>