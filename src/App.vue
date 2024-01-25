<script >

import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import appFooter from './components/appFooter.vue';
import axios from 'axios';
import { store } from './sotre.js'



export default {
    data() {
        return {
            store
        }
    },
    methods:{
        foundFilm(){
            let queryString = ''
            if(store.searchText.length > 0){
                queryString += store.searchText
                axios
                    .get('https://api.themoviedb.org/3/search/movie?api_key=131abdcb5fd33f160abcf1426cd3a650&query=' + queryString )
                    .then((response) => {
                        console.log(response.data.results);
                        this.store.films = response.data.results
                        console.log('film', this.store.films)
                    
                    })
                    .finally(() => {
                        console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
                    });
                
            }
            else{
                axios
                    .get(this.store.url  )
                    .then((response) => {
                        console.log(response.data.results);
                        this.store.films = response.data.results
                        console.log('film', this.store.films)
                    
                    })
                

            }
            
            
            
        }


    },
    components: {
        appHeader,
        appMain,
        appFooter,
        axios,
        

    },
    
  
}
</script>

<template>
  
  <appHeader />

  <appMain 
  @searchFilm="foundFilm()"/>

  <appFooter />
  
</template>

<style lang="scss" >
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";

</style>
