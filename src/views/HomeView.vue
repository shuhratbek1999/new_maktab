<script setup>
 import HeaderItem from '../components/HeaderItem.vue';
 import Carousel from '../components/Carousel.vue';
 import Questions from '../components/Questions.vue';
 import {ChevronForward} from '@vicons/ionicons5';
 import Yutuqlar from '../components/Yutuqlar.vue';
 import Xizmatlar from '../components/Xizmatlar.vue';
 import Kelishuv from '../components/Kelishuv.vue';
 import Boglanish from '../components/boglanish.vue';
 import Footer from '../components/Footer.vue';
 import Info from '../components/Info.vue';
 import {useRouter} from 'vue-router';
 import {useMessage} from 'naive-ui'
 const router = useRouter();
 const message = useMessage();
 const koproq = () => {
  message.success("maktab haqida malumot")
  router.push('/about')
 }
</script>

<template>
  <main>
    <HeaderItem />
    <Carousel/>
    <div class="haqimizda">
        <div class="title">HAQIMIZDA</div>
        <div class="content">
           <div class="left">
               <p>
                &nbsp; &nbsp;  Assalomu alaykum. Avvalambor siz bilan g'oyibona ko'rishib turganimizdan baxtlimiz. 
                  Bizning saytimizga XUSH KELIBSIZ! Quyidagi bo'limda bizning maktabimiz haqida qiziqarli 
                  va ajoyib ma'lumotlarga ega bo'lasiz degan umiddamiz!
               </p>
               <ul class="content-list">
                <li>Bizning maktabimiz Qashqadaryo viloyati Kitob tumanida joylashgan</li>
                <li>Eng qizig'i, bizning maktabimiz tumanimizda eng kuchlisidir</li>
                <li>Mutaxassislarimizning 60% ini yoshlar tashkil qiladi</li>
               </ul>
            </div>
           <div class="right">
              <div class="titles">
                &nbsp; &nbsp;  Bizning maktabimiz Kitob tumanida barcha shart-sharoitlar bilan ta'minlangan kamdan kam 
                  maktablardan biri hisoblanadi. Maktabimiz o'quvchilari har yili tuman va viloyat miqyosida 
                  bo'lib o'tadigan sport va fan olimpiadalarida eng yaxshi natijalarni egallashadi. 
                  Maktabimizda tumanimizdagi eng yaxshi dasturchilar bor. Ular haqida bilishni xohlaysizmi? "Ko'proq →" tugmasini bosing
              </div>
                <n-popover trigger="hover">
                <template #trigger>
                  <n-button @click="koproq" class="btn" type="success">
                    Ko'proq <n-icon><ChevronForward /></n-icon>
                  </n-button>
                </template>
                <span>Ko'proq malumot olish uchun ustimga bosing</span>
              </n-popover>
           </div>
        </div>
    </div>
   <Questions />
   <Yutuqlar />
   <Xizmatlar />
   <Kelishuv />
   <Boglanish />
   <Info />
   <Footer/>
  </main>
</template>
