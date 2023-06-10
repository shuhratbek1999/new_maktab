<script>
// import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
import { defineComponent } from "vue";
export default defineComponent({
   
});
</script>

<template>
   <div class="question">
        <div class="question_left">
             <div class="title1">
                Ushbu platforma haqidagi barcha savollaringizga javoblar
             </div>
             <div class="title2">
                Salom. Bu qismda biz ushbu platformani yaratish jarayonida 
                bizga berilayotgan eng yaxshi savollaringizga javob olasiz degan umiddaman. Unda ketdik →
             </div>
             <div class="question_list">
                <n-collapse default-expanded-names="1" accordion arrow-placement="right">
                    <n-collapse-item class="collapse" title="eng avvalo, ushbu platformani yaratishdan maqsad" name="1">
                    <div>Shuni aytib o'tishimiz kerakki, birinchi ushbu platformani yaratishimizdan asosiy maqsad hozirgi axborot texnologiyalari davrida barchaga to'g'ri ma'lumotlarni yetkazish</div>
                    </n-collapse-item>
                    <n-collapse-item class="collapse" title="02 Umuman ushbu platformaning bizga qanday yordami tegadi" name="2">
                    <div>Hozirda bilamizki butun dunyoda onlayn ta'limga alohida e'tibor qaratilmoqda. Shu kabi O'zbekistonda ham. Endi bu platforma orqali siz bemalol o'zingiz yoki oila a'zolaringiz uchun bizning maktabimizning eng yetakchi vakillari tomonidan tuzilgan darslarni ko'rgan holda ta'lim olishingiz mumkin bo'ladi.</div>
                    </n-collapse-item>
                    <n-collapse-item class="collapse" title="ushbu platformani yaratuvchilari kimlar?" name="2">
                    <div>
                        Ushbu platforma maktabimizning tashabbuskor informatika o'qituvchisi Niyozov Sardor boshchiligidagi va uning o'quvchilari bilan birgalikda tuzgan "Eldas" Dasturlash Jamoasi tomonidan yaratilgan va hozirgi kunda ushbu platformani yanada rivojlantirish ustida ishlar olib borilmoqda
                    </div>
                    </n-collapse-item>
            </n-collapse>
             </div>
        </div>
        <div class="question_right">
            <img src="../../public/rasm/room.jpeg" alt="">
        </div>
   </div>
</template>
<style scoped>

</style>
