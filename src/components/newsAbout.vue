<script>
import {defineComponent} from 'vue'
import axios from 'axios'
export default defineComponent({
    data(){
        return{
            newss: [],
            number: 0
        }
    },
    methods:{
        data(){
            let self = this
            axios({
                method: 'get',
                url: 'news/one' + self.number
            }).then(res => {
                self.newss = res.data.data;
            })
        }
    },
    mounted(){
        this.data()
    }
})
</script>
<template>
    <div class="news_about">
         
    </div>
</template>