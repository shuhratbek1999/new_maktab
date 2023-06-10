<script setup>
import { useMessage } from "naive-ui";
 import HeaderItem from '../components/HeaderItem.vue';
 import Carousel from '../components/Carousel.vue';
 import Boglanish from '../components/boglanish.vue';
 import Footer from '../components/Footer.vue';
 import Info from '../components/Info.vue';
 import News from '../components/news.vue';
 import NewsList from '../components/newsList.vue';
 import Gallery from '../components/Gallery.vue';
 import {ref} from 'vue';
 import {useRouter} from 'vue-router';
 import {ChatbubbleEllipsesOutline} from '@vicons/ionicons5'
 const router = useRouter();
const Home = () => {
    router.push('/')
}
</script>
<template>
    <div class="new">
        <HeaderItem/>
        <Carousel/>
        <div class="newwwwss">
            <div class="yangilik">
                <div class="titles">Yangiliklar</div>
                <div class="img"><img src="../../public/rasm/new.jpg" width="400" alt=""></div>
                <div class="list">
                    <News>
                      <div class="newwwws">
                        <div class="title">Muallif:20-maktab - 28/05/2023</div>
                        <div class="name">
                          MUSTAQIL YURT ERTASIMIZ, ISTIQLOLNING ERKASIMIZ!
                        </div>
                        <div class="line"></div>
                        <div class="text">
                          1-iyun “Xalqaro bolalarni himoya qilish kuni” munosabati bilan Uchquduq tumani MMTB ga qarashli 
                          18-umumiy o‘rta ta’lim maktabida bolajonlarni  bayram bilan tabriklash, ularga xushkayfiyat 
                          bag’ishlash maqsad...   
                         </div>
                        <div class="foter">
                            <div class="btn">
                                <n-button type="error">
                                BATAFSIL...
                                </n-button>
                            </div>
                            <div class="btn">
                                <n-button type="tertiary">
                                <n-icon><ChatbubbleEllipsesOutline /></n-icon>  FIKR QOLDIRISH
                                </n-button>
                            </div>
                        </div>
                    </div>
                    </News>
                </div>
            </div>
            <div class="yangilik">
                <div class="titless">Tadbir haqida</div>
                <div class="img"><img src="../../public/rasm/school5.jpg" width="400" height="300" alt=""></div>
                <div class="list">
                    <News>
                      <div class="newwwws">
                        <div class="title">Muallif:18-maktab - 28/05/2023</div>
                        <div class="name">
                          Farg'ona betakror zamin
                        </div>
                        <div class="line"></div>
                        <div class="text">
                          Rishton tumani — Farg'ona viloyatidagi tuman. 1982 yil 25- martda tashkil etilgan. 
                          Shimoldan Qozogʻiston Respublikasi, gʻarbdan Qoraqalpogʻiston Respublikasi,
                        </div>
                        <div class="foter">
                            <div class="btn">
                                <n-button type="error">
                                BATAFSIL...
                                </n-button>
                            </div>
                            <div class="btn">
                                <n-button type="tertiary">
                                <n-icon><ChatbubbleEllipsesOutline /></n-icon>  FIKR QOLDIRISH
                                </n-button>
                            </div>
                        </div>
                    </div>
                    </News>
                </div>
            </div>
            <div class="new_list">
                <NewsList>
                    <div class="list">
                        <div><img src="../../public/rasm/school7.jpg" width="90px" height="90px" alt="yangiliklar"></div>
                        <div class="text">
                            <div class="name">
                                Tadbirdan lavhalarni tomosha qiling
                            </div>
                            <div class="title">Muallif:20-maktab - 28/05/2023</div>
                        </div>
                    </div>
                </NewsList>
                <NewsList />
                <NewsList />
                <NewsList />
            </div>
        </div>
        <div class="songi_news">
           <div class="headers">
              So'ngi yangiliklar
           </div>
           <div class="songi_list">
            <div class="list">
                    <News>
                      <div class="newwwws">
                        <div class="title">Muallif:20-maktab - 28/05/2023</div>
                        <div class="name">
                          Konstitutsiya – baxtimiz qomusimiz
                        </div>
                        <div class="line"></div>
                        <div class="text">
                          Oltiariq tumani 20-maktab boshlang`ich sinf o`qituvchisi Shamsiyeva Marg`uba Shavqiddinovnaning 8-dekabr O`zbekiston Respublikasi 
                          Konstitutsiyasining qabul qilingan kuniga bag`ishlab tayyorlangan tadbir ishlanmasi. “ Konstitutsiya...
                         </div>
                        <div class="foter">
                            <div class="btn">
                                <n-button type="error">
                                BATAFSIL...
                                </n-button>
                            </div>
                            <div class="btn">
                                <n-button type="tertiary">
                                <n-icon><ChatbubbleEllipsesOutline /></n-icon>  FIKR QOLDIRISH
                                </n-button>
                            </div>
                        </div>
                    </div>
                    </News>
                    <News>
                      <div class="newwwws">
                        <div class="title">Muallif:18-maktab - 28/05/2023</div>
                        <div class="name">
                          Informatika fanidan dars ishlanma
                        </div>
                        <div class="line"></div>
                        <div class="text">
                          Uchquduq tuman 18-sonli maktabning informatika fani o’qituvchisi Xoliqova Dilafro’zning “7×7 
                          bellashuv” slayd dars ishlanmasi Mavzu:Amaliy mashg’ulot . 7×7  bellashuv dars Darsning maqsadi: A)Ta’limiy:kommunikativ kompet..
                         </div>
                        <div class="foter">
                            <div class="btn">
                                <n-button type="error">
                                BATAFSIL...
                                </n-button>
                            </div>
                            <div class="btn">
                                <n-button type="tertiary">
                                <n-icon><ChatbubbleEllipsesOutline /></n-icon>  FIKR QOLDIRISH
                                </n-button>
                            </div>
                        </div>
                    </div>
                    </News>
                </div>
           </div>
        </div>
        <Gallery />
        <Boglanish/>
        <Info/>
        <Footer/>
    </div>
</template>
<style scoped>
.headers{
  border-bottom: 4px solid goldenrod;
  font-weight: 600;
}
.songi_news{
  width: 950px;
  padding: 20px 20px;

}
.titles{
  border-bottom: 4px solid red;
  margin: 15px 0px;
  font-size: 20px;
  font-weight: 600;
}
.titless{
  border-bottom: 4px solid rgb(231, 141, 23);
  margin: 15px 0px;
  font-size: 20px;
  font-weight: 600;
}
.new{
    margin: 20px 0px;
    width: 100%;
}
.list{
  display: flex;
  flex-wrap: wrap;
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
.newwwws{
    width: 450px;
    padding: 10px;
}
.newwwws .n-icon{
    font-size: 20px;
    margin-right: 5px;
}
.newwwws .line{
    width: 440px;
    border: 1px solid rgb(204, 202, 202);
    padding: -10px !important;
}
.newwwws .text{
    margin: 20px 0px;
}
.newwwws .foter{
    display: flex;
    justify-content: space-between;
}
.newwwws .title{
    font-size: 11px;
}
.newwwws .name{
    font-size: 20px;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
}
.newwwwss{
  display: flex;
  justify-content: space-around;
}
</style>