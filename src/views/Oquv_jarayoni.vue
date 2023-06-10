<script setup>
import { useMessage } from "naive-ui";
 import HeaderItem from '../components/HeaderItem.vue';
 import Carousel from '../components/Carousel.vue';
 import {ChevronForward} from '@vicons/ionicons5';
 import Boglanish from '../components/boglanish.vue';
 import Footer from '../components/Footer.vue';
 import Info from '../components/Info.vue';
 import { isYesterday, addDays } from "date-fns/esm";
 import {ref} from 'vue';
 import {useRouter} from 'vue-router';
 const message = useMessage();
 const router = useRouter();
const Home = () => {
    router.push('/')
}
</script>
<template>
    <div class="jarayoni">
        <HeaderItem/>
        <Carousel/>
        <div class="oquv">
            <div class="oquv_tili">
                Muhammad al Xorazmiy nomidagi ixtisoslashtirilgan maktab matematika, informatika, ingliz tili va 
                fizika fanlarini chuqurlashtirib o’qitishga mo’ljallangan bo’lib, o’quvchilar 4 ta asosiy fanlardan 
                chuqur bilim oladilar. Bu o’quv tizimi o’quvchilarda AT, matematika, fizika fanlaridan o’z istedodlarini 
                va qobiliyatlarini maksimal darajada oshirish imkonini beradi.
            </div>
            <div class="images">
                <div class="img"><img src="../../public/rasm/room.jpg" width="400" alt=""></div>
                <div class="img"><img src="../../public/rasm/room1.jpg" width="400" alt=""></div>
                <div class="img"><img src="../../public/rasm/room2.jpg" width="400" alt=""></div>
            </div>
        </div>
        <Boglanish/>
        <Info/>
        <Footer/>
    </div>
</template>
<style scoped>
.oquv{
    width: 100%;
    padding: 20px 40px;
}
.oquv_tili{
    font-weight: 500;
    font-family: sans-serif;
    font-size: 18px;
    margin: 10px 0px;
}
.oquv .images{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 10px 0px;
}
</style>