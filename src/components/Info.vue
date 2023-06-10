<script>
import { LogoFacebook,LogoInstagram,LogoTwitter,LogoLinkedin,LogoGithub } from "@vicons/ionicons5";
// import { useThemeVars } from "naive-ui";
// import { changeColor } from "seemly";
import { defineComponent } from "vue";
export default defineComponent({
    components:{
        LogoFacebook,
        LogoInstagram,
        LogoTwitter,
        LogoLinkedin,
        LogoGithub
    }
});
</script>

<template>
   <div class="info">
        <div class="info1">
            <div class="title">KITABEDU</div>
            <div class="about">
                10, Al - Xorazmiy <br/>
            Kitob, Qashqadaryo <br/>
            O'zbekiston <br/> <br/>

            Telefon: +998 99 069 56 21 <br/>
            Email: shavkat.toshpulotov@gmail.com
            </div>
        </div>
        <div class="info1">
            <div class="title">Sayt Navigator</div>
            <n-collapse>
                <n-collapse-item size="14" accordion="true" title="Home" name="1">
                <div>good</div>
                </n-collapse-item>
                <n-collapse-item title="Haqimizda" name="2">
                <div>nice</div>
                </n-collapse-item>
                <n-collapse-item title="Hizmatlar" name="3">
                <div>very good</div>
                </n-collapse-item>
                <n-collapse-item title="Ishlarimizdan" name="3">
                <div>very good</div>
                </n-collapse-item>
            </n-collapse>
        </div>
        <div class="info1">
            <div class="title">Xizmatlar</div>
            <n-collapse>
                <n-collapse-item accordion="true" title="Web Frontend" name="1">
                <div>good</div>
                </n-collapse-item>
                <n-collapse-item title="Web Backend" name="2">
                <div>nice</div>
                </n-collapse-item>
                <n-collapse-item title="Web Design" name="3">
                <div>very good</div>
                </n-collapse-item>
                <n-collapse-item title="Site Testing" name="3">
                <div>very good</div>
                </n-collapse-item>
            </n-collapse>
        </div>
        <div class="info1">
            <div class="title">Ijtimoiy Tarmoqlar</div>
            <div class="div">Bizning Ijtimoiy Tarmoqlardagi sahifalarimizga tashrif buyurishni unutmang</div>
            <ul>
                <li><n-icon size="30" color="green"><LogoFacebook /></n-icon></li>
                <li><n-icon size="30" color="green"><LogoInstagram/></n-icon></li>
                <li><n-icon size="30" color="green"><LogoTwitter/></n-icon></li>
                <li><n-icon size="30" color="green"><LogoLinkedin/></n-icon></li>
                <li><n-icon size="30" color="green"><LogoGithub/></n-icon></li>
            </ul>
        </div>
   </div>
</template>
<style scoped>

</style>
