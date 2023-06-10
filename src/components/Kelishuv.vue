<script>
import { Book, ArrowForward,BookOutline,CheckmarkSharp,CloseSharp } from "@vicons/ionicons5";
// import { useThemeVars } from "naive-ui";
// import { changeColor } from "seemly";
import { defineComponent } from "vue";
export default defineComponent({
    components:{
        ArrowForward,
        Book,
        BookOutline,
        CheckmarkSharp,
        CloseSharp
    }
});
</script>

<template>
   <div class="kelishuv">
        <div class="kelishuv_right">
            <h2>KELISHUV</h2>
        </div>
        <div class="kelishuv_middle">
            &nbsp; &nbsp; Salom. Ushbu platforma sizga ma'qulmi? Sizda ham shunday sayt bo'lishini xohlarmidingiz? Unda shoshiling. Hoziroq quyidagi berib o'tilgan planlardan birini tanlang hamda 
            o'z saytingizga ega bo'ling. Shoshiling, har daqiqa ga'nimat ekanini unutmang!!!
        </div>
        <div class="kelishuv_left">
             <div class="list">
                <div class="list_item">
                    <n-card>
                        <template #header-extra>
                        </template>
                        Boshlang'ich
                        <template #footer>
                            <p style="font-size: 25px">$8</p>
                            bir marta
                        </template>
                        <template #action>
                          <ul>
                            <li><n-icon size="20" color="green"><CheckmarkSharp /></n-icon>  Matematika boshlang'ich</li>
                            <li><n-icon size="20" color="green"><CheckmarkSharp /></n-icon>  Fizika boshlang'ich</li>
                            <li class="close"><n-icon size="20" color="grey"><CloseSharp /></n-icon>  English level</li>
                            <li class="close"><n-icon size="20" color="grey"><CloseSharp /></n-icon>  Matematika Oliy</li>
                            <li><n-icon size="20" color="green"><CheckmarkSharp /></n-icon>  Biologiya</li>
                          </ul>
                          <div class="list_btn">
                            <n-button secondary  strong round>
                             Boshlash
                          </n-button>
                          </div>
                        </template>
                    </n-card>
                </div>
                <div class="list_item">
                    <n-card>
                        <template #header-extra>
                        </template>
                        Yuqori
                        <template #footer>
                            <p style="font-size: 25px">$15</p>
                            bir marta
                        </template>
                        <template #action>
                          <ul>
                            <li><n-icon size="20" color="green"><CheckmarkSharp /></n-icon>  Matematika boshlang'ich</li>
                            <li><n-icon size="20" color="green"><CheckmarkSharp /></n-icon>  Fizika boshlang'ich</li>
                            <li class="close"><n-icon size="20" color="grey"><CloseSharp /></n-icon>  English level</li>
                            <li class="close"><n-icon size="20" color="grey"><CloseSharp /></n-icon>  Matematika Oliy</li>
                            <li><n-icon size="20" color="green"><CheckmarkSharp /></n-icon>  Biologiya</li>
                          </ul>
                          <div class="list_btn">
                            <n-button type="primary" strong round>
                             Boshlash
                          </n-button>
                          </div>
                        </template>
                    </n-card>
                </div>
                <div class="list_item">
                    <n-card>
                        <template #header-extra>
                        </template>
                        MegaSuper
                        <template #footer>
                            <p style="font-size: 25px">$25</p>
                            bir marta
                        </template>
                        <template #action>
                          <ul>
                            <li class="close"><n-icon size="20" color="grey"><CloseSharp /></n-icon>  Matematika boshlang'ich</li>
                            <li class="close"><n-icon size="20" color="grey"><CloseSharp /></n-icon>  Fizika boshlang'ich</li>
                            <li ><n-icon size="20" color="green"><CheckmarkSharp /></n-icon>  English level</li>
                            <li><n-icon size="20" color="green"><CheckmarkSharp /></n-icon>  Matematika Oliy</li>
                            <li><n-icon size="20" color="green"><CheckmarkSharp /></n-icon>  Biologiya</li>
                          </ul>
                          <div class="list_btn">
                            <n-button type="success"  strong round>
                             Boshlash
                          </n-button>
                          </div>
                        </template>
                    </n-card>
                </div>
             </div>
        </div>
   </div>
</template>
<style scoped>

</style>
