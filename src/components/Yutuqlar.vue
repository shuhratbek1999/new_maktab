<script>
// import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
import { useThemeVars } from "naive-ui";
import { changeColor } from "seemly";
import { defineComponent } from "vue";
export default defineComponent({
    setup() {
    return {
      changeColor,
      themeVars: useThemeVars()
    };
  }
});
</script>

<template>
   <div class="yutuqlar">
        <div class="yutuq_right">
            <img src="../../public/rasm/school5.jpg" width="300" alt="">
        </div>
        <div class="yutuq_left">
             <div class="title1">
                O'quvchilarimiz yutuqlari foizlar hisobida
             </div>
             <div class="title2">
                Saytimizning bu qismida sizlarga o'quvchilarimiz yutuqlari 
                haqida ma'lumot berishni o'zimizga joiz deb bildik. Qani Ketdik  →
             </div>
             <div class="yutuq_list">
                <ul>
                    <li>
                        <n-gradient-text type="info">
                            Matematika
                        </n-gradient-text>
                        <n-progress
                            type="line"
                            :percentage="60"
                            :indicator-placement="'outside'"
                            processing
                        />
                   </li>
                   <li>
                    <n-gradient-text type="danger">
                            Jismoniy tarbiya
                        </n-gradient-text>
                        <n-progress
                            type="line"
                            :percentage="80"
                            :indicator-placement="'outside'"
                            processing
                            :color="themeVars.successColor"
                        />
                   </li>
                   <li>
                       <n-gradient-text type="warning">
                            English
                        </n-gradient-text>
                        <n-progress
                            type="line"
                            :percentage="20"
                            :indicator-placement="'outside'"
                            :color="themeVars.errorColor"
                            processing
                        />
                   </li>
                   <li>
                       <n-gradient-text type="info">
                            Rustili
                        </n-gradient-text>
                        <n-progress
                            type="line"
                            :percentage="30"
                            :indicator-placement="'outside'"
                            processing
                            :color="themeVars.errorColor"
                        />
                   </li>
                </ul>
             </div>
        </div>
   </div>
</template>
<style scoped>

</style>
