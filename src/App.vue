<script >

import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import appFooter from './components/appFooter.vue';
import axios from 'axios';



export default {
    data() {
        return {
            
        }
    },
    methods:{

    },
    components: {
        appHeader,
        appMain,
        appFooter,
        axios
        

    },
    mounted(){
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=131abdcb5fd33f160abcf1426cd3a650&query=ritorno+al+futuro')
            .then((response) => {
                console.log(response);
                    
            })
    }
  
}
</script>

<template>
  
  <appHeader />

  <appMain />

  <appFooter />
  
</template>

<style lang="scss" >
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";

</style>
