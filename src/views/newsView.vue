<script setup>
import { useMessage } from "naive-ui";
 import HeaderItem from '../components/HeaderItem.vue';
 import Carousel from '../components/Carousel.vue';
 import Boglanish from '../components/boglanish.vue';
 import Footer from '../components/Footer.vue';
 import Info from '../components/Info.vue';
 import News from '../components/news.vue';
 import NewsList from '../components/newsList.vue';
 import axios from 'axios'
 import {onMounted, ref} from 'vue';
 import {useRouter} from 'vue-router';
 const message = useMessage();
 const Newslar = ref({
    name: "",
    image: "",
    aftor: "",
    text: ""
 })
 const fileList = ref([])
 const NewsQoshish = () => {
    console.log(fileList.value[0].file.name, "salom")
    let formData = new FormData();
    formData.append("name", Newslar.value.name);
    formData.append("image", fileList.value.length == 0 ? "" : fileList.value[0].file);
    formData.append("aftor", Newslar.value.aftor);
    formData.append("text", Newslar.value.text);
    console.log(formData)
    axios.post("news/create",formData, {
        headers:{
            "Content-Type": "multipart/form-data",
        }
    }).then(res => {
        if(res.data.data){
            message.success(res.data.message)
            Newslar.value = {
                name: "",
                image: "",
                aftor: "",
                text: ""
            }
        }
    })
 }
//  const user = JSON.parse(localStorage.getItem('user'))
//  onMounted(() => {
//      console.log(user);
//  })
 const router = useRouter();
 const active = ref(false);
    const activate = () => {
      active.value = true;
    };
const Home = () => {
    router.push('/')
}
</script>
<template>
    <div class="new">
        <HeaderItem/>
        <Carousel/>
        <div class="newwws">
            <div class="yangilik">
                <div class="title">Maktab yangiliklari</div>
                <div class="list">
                    <News />
                    <News />
                    <News />
                    <News />
                </div>
            </div>
            <div class="new_list">
                <NewsList />
                <NewsList />
                <NewsList />
                <NewsList />
                <div style="margin: 20px">
                    <n-button @click="activate">
                        yangilik qo'shish
                    </n-button>
                    <n-drawer v-model:show="active" :width="502">
                        <n-drawer-content>
                        <template #header>
                            <div class="titless">Yangilik qo'shish oynasi</div>
                        </template>
                        <div class="content">
                            <div class="input1">
                                <label>yangilik nomi</label>
                                <n-input v-model:value="Newslar.name" type="text" placeholder="yangilik nomi" />
                            </div>
                            <div class="input1" style="display:flex; align-items:center;margin:10px 0px">
                                <label>rasm yuklash</label>
                                <n-upload
                                    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                                    v-model:file-list="fileList"
                                    list-type="image-card"
                                >
                                    Click to Upload
                                </n-upload>
                            </div>
                            <div class="input1">
                                <label>Yangilik muallifi</label>
                                <n-input v-model:value="Newslar.aftor" type="text" placeholder="yangilik yozayotgan inson" />
                            </div>
                            <div class="input1">
                                <label>yangilik matni</label>
                                <n-input
                                    placeholder="Autosizable"
                                    type="textarea"
                                    size="small"
                                    v-model:value="Newslar.text"
                                    :autosize="{
                                        minRows: 3,
                                        maxRows: 10
                                    }"
                                    />
                            </div>
                            <div class="input1" style="display: flex; justify-content:center; margin: 20px 0px">
                                <n-button @click="NewsQoshish" type="success">Saqlash va jo'natish</n-button>
                            </div>
                        </div>
                        <template #footer>
                            <n-button>Footer</n-button>
                        </template>
                        </n-drawer-content>
                    </n-drawer>
                </div>
            </div>
        </div>
        <Boglanish/>
        <Footer/>
        <Info/>
    </div>
</template>
<style scoped>
.titless{
    text-align: center;
}
.new{
    margin: 20px 0px;
    width: 100%;
}
.newwws{
    min-height: 600px;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
}
.newwws .yangilik{
    display: flex;
    flex-direction: column;
}
.newwws .yangilik .title{
    margin: 20px 0px;
    text-align: left;
    border-bottom: 4px solid green;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
}
.newwws .yangilik .list{
    width: 900px;
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0px;
}
</style>