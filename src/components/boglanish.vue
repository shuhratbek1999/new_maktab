<script>
import { LocationSharp,PhonePortraitOutline,MaleFemale } from "@vicons/ionicons5";
import { defineComponent, ref } from "vue";
export default defineComponent({
   components:{
      LocationSharp,
      PhonePortraitOutline,
      MaleFemale
   },
   setup(){
      return{
         value: ref(null),
         value1: ref(null),
         value2: ref(null),
      }
   }
});
</script>

<template>
   <div class="boglanish">
            <div class="title1">
                BOG'LANISH
             </div>         
             <div class="title2">
                Assalomu alaykum. Agarda sizda sayt bo'yicha biror bir taklif yoki fikr bo'lsa bizga yozishingiz mumkin 
                yoki quyidagi manzilga tashrif buyurish orqali bizni topasiz. 
                Har qanday savol va takliflaringizni o'rganib chiqamiz va sizga javob xabarini yetkazamiz
             </div>
             <div class="boglanish_list">
                 <div class="list1">
                    <ul class="lists">
                     <li class="list_item">
                        <p class="icons"><n-icon size="30" color="green"><LocationSharp /></n-icon></p>
                        <p><span>Manzil:</span> <br/>
                          10, Al - Xorazmiy, Kitob, Qashqadaryo
                         </p>
                     </li>
                     <li class="list_item">
                        <p class="icons"><n-icon size="30" color="green"><MaleFemale /></n-icon></p>
                        <p><span>Email:</span> <br/>
                           shavkat.toshpulotov@gmail.com
                         </p>
                     </li>
                     <li class="list_item">
                        <p class="icons"><n-icon size="30" color="green"><PhonePortraitOutline /></n-icon></p>
                        <p><span>Telefon:</span> <br/>
                            +998 99 069 56 21
                         </p>
                     </li>
                     <li class="list_item"></li>
                    </ul>
                 </div>
                 <div class="list2">
                     <div class="input">
                        <div>
                           <p><label>Ismingiz</label></p>
                           <n-input v-model:value="value" type="text" placeholder="ismingizni kiriting" />
                        </div>
                        <div>
                           <p><label>Elektron pochta</label></p>
                            <n-input v-model:value="value1" type="email" placeholder="Email pochta" />
                        </div>
                     </div>
                     <div class="inputs">
                       <p> <label>Mavzu</label></p>
                        <n-input v-model:value="value2" type="text" placeholder="Mavzu Yozing" />
                     </div>
                     <div class="inputs">
                        <p><label>Xabar</label></p>
                        <n-input
                           placeholder="Xabar yozing"
                           type="textarea"
                           size="small"
                           :autosize="{
                           minRows: 3,
                           maxRows: 5
                           }"
                        />`
                     </div>
                     <div><n-button type="success">Xabarni jo'natish</n-button></div>
                 </div>
             </div>
   </div>
</template>
<style scoped>

</style>
