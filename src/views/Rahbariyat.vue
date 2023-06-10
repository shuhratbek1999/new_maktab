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
 import {useRouter} from 'vue-router'
 const message = useMessage();
 const router = useRouter();
const value = ref(addDays(Date.now(), 1).valueOf())
const handleUpdateValue = (_, { year, month, date }) =>{
        message.success(`${year}-${month}-${date}`);
      }
const isDateDisabled = (timestamp) =>{
        if (isYesterday(timestamp)) {
          return true;
        }
        return false;
      }
const Home = () => {
    router.push('/')
}
</script>
<template>
    <div class="rahbariyat">
        <HeaderItem/>
        <Carousel/>
        <div class="rahbariyat_menu">
            <div class="top">
                <h1>Raxbariyat</h1>
                <div class="line">-</div>
                <p><span @click="Home">Home</span> > Raxbariyat</p>
            </div>
            <div class="middle">
                <div class="middle_left">
                    <div class="list">
                        <div class="img">
                        <img src="../../public/rasm/person.jpg" alt="" width="280">
                        </div>
                        <div class="info">
                            Ibragimov Anvar Ro’ziboyevich
                            Maktab Direktori <br/>

                            Telefon: +99893 585 23 25 <br/>

                            Email: info@16maktab.uz <br/>

                            Qabul kunlari: Chor 15:00 — 17:00
                        </div>
                    </div>
                    <div class="list">
                        <div class="img">
                        <img src="../../public/rasm/school5.jpg" alt="" width="280">
                        </div>
                        <div class="info">
                            Babayeva Gulchehra Tashpulatovna
                            O’quv ishlar bo’yicha derektor o’rinbosari <br/>

                            Telefon: +99893 585 23 25 <br/>

                            Email: info@16maktab.uz <br/>

                            Qabul kunlari: Chor 15:00 — 17:00
                        </div>
                    </div>
                    <div class="list">
                        <div class="img">
                        <img src="../../public/rasm/teacher.jpg" alt="" width="280">
                        </div>
                        <div class="info">
                            Abdulazimova Gulnora Qudratovna
                            O’quv tarbiyaviy ishlar bo’yicha derektor o’rinbasari <br/>

                            Telefon: +99893 585 23 25 <br/>

                            Email: info@16maktab.uz <br/>

                            Qabul kunlari: Chor 15:00 — 17:00
                        </div>
                    </div>
                    <div class="list">
                        <div class="img">
                        <img src="../../public/rasm/teacher1.jpg" alt="" width="280">
                        </div>
                        <div class="info">
                            Saipova Zulfiya Xodjanazarovna
                            Ma’naviy marifiy ishlar bo’yicha derektor o’rinbasari <br/>

                            Telefon: +99893-899-30-74 <br/>

                            Email: info@16maktab.uz <br/>

                            Qabul kunlari: Chor 15:00 — 17:00
                        </div>
                    </div>
                    <div class="list">
                        <div class="img">
                        <img src="../../public/rasm/teacher2.jpg" alt="" width="280">
                        </div>
                        <div class="info">
                            Choriyev Murod Yomg’irovich
                            Ma’naviy marifiy ishlar bo’yicha derektor o’rinbasari <br/>

                            Telefon: +99897 227-78-39 <br/>

                            Email: info@16maktab.uz <br/>

                            Qabul kunlari: Chor 15:00 — 17:00
                        </div>
                    </div>
                </div>
                <div class="middle_right">
                    <div class="news">
                        <div class="title">So’nggi Yangiliklar</div>
                        <ul>
                            <li>«Ikki xorijiy til va bir kasb hunar o’rgatish » dasturi bo’yicha o’tkazilgan o’quv seminar
                                <br/> <span>  31 мая, 2023</span>
                            </li>
                            <li>«Ikki xorijiy til va bir kasb hunar o’rgatish » dasturi bo’yicha o’tkazilgan o’quv seminar
                                <br/> <span>  31 мая, 2023</span>
                            </li>
                            <li>«Ikki xorijiy til va bir kasb hunar o’rgatish » dasturi bo’yicha o’tkazilgan o’quv seminar
                                <br/> <span>  31 мая, 2023</span>
                            </li>
                            <li>«Ikki xorijiy til va bir kasb hunar o’rgatish » dasturi bo’yicha o’tkazilgan o’quv seminar
                                <br/> <span>  31 мая, 2023</span>
                            </li>
                            <li>«Ikki xorijiy til va bir kasb hunar o’rgatish » dasturi bo’yicha o’tkazilgan o’quv seminar
                                <br/> <span>  31 мая, 2023</span>
                            </li>
                            <li>«Ikki xorijiy til va bir kasb hunar o’rgatish » dasturi bo’yicha o’tkazilgan o’quv seminar
                                <br/> <span>  31 мая, 2023</span>
                            </li>
                            <li>«Ikki xorijiy til va bir kasb hunar o’rgatish » dasturi bo’yicha o’tkazilgan o’quv seminar
                                <br/> <span>  31 мая, 2023</span>
                            </li>
                        </ul>
                    </div>
                    <div class="kalendar">
                        <n-calendar
                            v-model:value="value"
                            #="{ year, month, date }"
                            :is-date-disabled="isDateDisabled"
                            @update:value="handleUpdateValue"
                        >
                            {{ year }}-{{ month }}-{{ date }}
                        </n-calendar>
                    </div>
                </div>
            </div>
        </div>
        <Boglanish/>
        <Footer/>
        <Info/>
    </div>
</template>