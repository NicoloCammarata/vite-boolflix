<script >
import appSingleProduct from './appSingleProduct.vue';
import { store } from '../sotre.js';

export default {
    data() {
        return {
          store
               
            
            
        }
    },
    components: {
        appSingleProduct

    },
    
    
}
</script>

<template>
    <main class="bg-dark-subtle">
        <div class=" barra-ricerca">
            <div class="container">
                <input v-model="store.searchText" type="text">
                <button @click="$emit('searchFilm')" >search</button>

            </div>
        </div>
        <div class="container-xl bg-dark-subtle ">
            <div class="row">
                
                <h2 class="ms-4">Film</h2>
                <ul class=" col" v-for="(film, i) in store.films">
                          

                    <appSingleProduct 
                    :title="film.title"
                    :ogTitle="film.original_title"
                    :lingua="film.original_language"
                    :vote="film.vote_average"
                    :poster="film.poster_path"
                    /> 
                                    
                    
                    
                </ul>
        
            
            
        
                <h2 class="ms-4">Serie</h2>
                <ul class=" col" v-for="(serie, i) in store.series">
                    <appSingleProduct 
                    :title="serie.name"
                    :ogTitle="serie.original_name"
                    :lingua="serie.original_language"
                    :vote="serie.vote_average"
                    :poster="serie.poster_path"
                    />
            
                


                </ul>

            </div>

        </div>
        
        
    </main>
    
  
</template>

<style lang="scss" scoped>
.barra-ricerca{
    height: 80px;
    background-color: gray;
    display: flex;
    align-items: center;
}



</style>