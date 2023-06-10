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
                <h1>O’qituvchilar</h1>
                <div class="line">-</div>
                <p><span @click="Home">Home</span> > O’qituvchilar</p>
            </div>
            <div class="middle">
                <div class="middle_left">
                    <h3 style="font-size: 20px; font-weight: bold">Termiz shahar 16-maktab o’qituvchilari</h3>
                    <div class="list">
                        <div class="img">
                        <img src="../../public/rasm/person.jpg" alt="" width="280">
                        </div>
                        <div class="info">
                            Shaymatova Umida Yuldoshevna
                            Boshlang’ich sinf o’qituvchisi <br/>

                            Toifasi: 1- toifa <br/>

                            Telefon: +998 93 637 71 57 <br/>

                            Email: info@16maktab.uz <br/>

                            Ish tajribasi: 15 yil+
                        </div>
                    </div>
                    <div class="list">
                        <div class="img">
                        <img src="../../public/rasm/person.jpg" alt="" width="280">
                        </div>
                        <div class="info">
                            Jalilova Nodira Muzaffarovna
                            Boshlang’ich sinf o’qituvchisi <br/>

                            Toifasi: 1-toifa <br/>

                            Telefon: +99899123-45-67 <br/>

                            Email: info@16maktab.uz <br/>

                            Ish tajribasi: 18 yil+
                        </div>
                    </div>
                    <div class="list">
                        <div class="img">
                        <img src="../../public/rasm/person.jpg" alt="" width="280">
                        </div>
                        <div class="info">
                            Jo’raqulova Gulbaxor Sattorovna
                            Boshlang’ich sinf o’qituvchisi <br/>

                            Toifasi: 1- toifa <br/>

                            Telefon: +998 91 588 82 46 <br/>

                            Email: info@16maktab.uz <br/>

                            Ish tajribasi: 20 yil+
                        </div>
                    </div>
                    <div class="list">
                        <div class="img">
                        <img src="../../public/rasm/person.jpg" alt="" width="280">
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
                        <img src="../../public/rasm/person.jpg" alt="" width="280">
                        </div>
                        <div class="info">
                            Navro’zova Lobar Safarmaxmatovna
                            Rus tili o’qituvchisi <br/>

                            Toifasi: Oliy toifa <br/>

                            Telefon: +998 90 245 95 15 <br/>

                            Email: info@16maktab.uz <br/>

                            Ish tajribasi: 19 yil+
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