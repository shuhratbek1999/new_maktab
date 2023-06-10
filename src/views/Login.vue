<script setup>
import { useMessage } from "naive-ui";
import { GlassesOutline, Glasses,LogoFacebook,LogoInstagram,LogoTwitter } from "@vicons/ionicons5";
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router"
const router = useRouter();
const login = ref({
    name: "",
    password: ""
})
const message = useMessage();
const Login = () =>{
    axios.post("user/login", login.value).then(res => {
        if(res.data.data){
            console.log(res.data.data);
           message.success("siz muvafaqiyatli o'tdingiz")
           localStorage.setItem('token', res.data.data.token)
           localStorage.setItem('user', res.data.data)
           setTimeout(() => {
              router.push('/')
           }, 1000);
        }
        else{
            message.error(res.data.message)
        }
    })
}
GlassesOutline,
Glasses
</script>
<template>
    <div class="login">
        <div class="login_page">
            <div class="login_header">Login</div>
            <div class="login_content">
                <n-space vertical>
                    <n-gradient-text
                        :gradient="{
                        from: 'rgb(85, 85, 85)',
                        to: 'rgb(170, 170, 170)'
                        }"
                    >
                        Name
                    </n-gradient-text>
                    <n-input
                    v-model:value="login.name"
                    placeholder="name kiriting"
                    />
                    <n-gradient-text
                        :gradient="{
                        from: 'rgb(85, 85, 85)',
                        to: 'rgb(170, 170, 170)'
                        }"
                    >
                        Parolingiz
                    </n-gradient-text>
                    <n-input
                        type="password"
                        show-password-on="mousedown"
                        placeholder="Password"
                        :maxlength="9"
                        v-model:value="login.password"
                        />
                        <template #password-visible-icon>
                            <n-icon :size="16" :component="GlassesOutline" />
                        </template>
                        <template #password-invisible-icon>
                            <n-icon :size="16" :component="Glasses" />
                        </template>
                        <n-button @click="Login" style="width: 300px; margin: 10px 0px" type="primary" ghost>
                            Login
                        </n-button>
                </n-space>
                <ul>
                    <li><n-icon size="30" color="green"><LogoFacebook /></n-icon></li>
                    <li><n-icon size="30" color="green"><LogoInstagram/></n-icon></li>
                    <li><n-icon size="30" color="green"><LogoTwitter/></n-icon></li>
              </ul>
            </div>
            <div class="login_footer">
                Or Sing Up Using <br/>
                SIGN UP
            </div>
        </div>
    </div>
</template>
<style scoped>
.login{
    width: 100%;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.login .login_page{
    padding: 20px 30px;
    border-radius: 5px;
    background-color: rgb(219, 220, 221);
    box-shadow: 0px 0px 5px black;
}
.login .login_page ul{
    display: flex;
    list-style: none;
    justify-content: center;
}
.login .login_page ul li{
    margin: 20px 10px;
}
.login .login_page ul li:nth-child(1){
    margin: 20px 0px !important;
}
.login_footer{
    text-align: center;
}
.login_page .login_header{
    text-align: center;
    font-size: 20px;
    font-weight: 600;
}
</style>