<script>
import { Book, ArrowForward,BookOutline } from "@vicons/ionicons5";
// import { useThemeVars } from "naive-ui";
// import { changeColor } from "seemly";
import { defineComponent } from "vue";
export default defineComponent({
    components:{
        ArrowForward,
        Book,
        BookOutline
    }
});
</script>

<template>
   <div class="xizmatlar">
        <div class="xizmat_right">
            <h2>XIZMATLAR</h2>
        </div>
        <div class="xizmat_middle">
            &nbsp; &nbsp; Salom ☺. Biz bu yerda saytimiz mualliflari, ya'ni yaratuvchilari Eldas Programming Teamning 
            xizmatlari haqida ma'lumot bermoqchimiz. Ushbu jamoa saytlarning frontend hamda backend 
            qismlarini yaratish bilan shug'ullanadi. Jamoa haqida to'liqroq ma'lumotga ega bo'lmoqchimisiz? 
            Marhamat, rasmiy saytga tashrif buyuring
        </div>
        <div class="xizmat_left">
             <div class="list">
                <div class="list_item">
                     <p><n-icon class="icons"><Book /></n-icon></p>
                     <p>Matematika</p>
                    <div>
                        Biz saytning ko'rinishini yaratish jarayonida 
                        Frontend Developmentdan foydalanamiz
                    </div>
                </div>
                <div class="list_item">
                    <p><n-icon class="icons"><BookOutline /></n-icon></p>
                     <p>English tili</p>
                    <div>
                        Biz saytning ko'rinishini yaratish jarayonida 
                        Frontend Developmentdan foydalanamiz
                    </div>
                </div>
                <div class="list_item">
                    <p><n-icon class="icons"><Book /></n-icon></p>
                     <p>Rus tili</p>
                    <div>
                        Biz saytning ko'rinishini yaratish jarayonida 
                        Frontend Developmentdan foydalanamiz
                    </div>
                </div>
                <div class="list_item">
                    <p><n-icon class="icons"><BookOutline /></n-icon></p>
                     <p>Ona tili</p>
                    <div>
                        Biz saytning ko'rinishini yaratish jarayonida 
                        Frontend Developmentdan foydalanamiz
                    </div>
                </div>
             </div>
        </div>
   </div>
</template>
<style scoped>

</style>
