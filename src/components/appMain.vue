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
    <main>
        <input v-model="store.searchText" type="text">
        <button @click="$emit('searchFilm')" >search</button>
        <h2>Film</h2>
            
            
        <ul v-for="(film, i) in store.films">
                          

            <appSingleProduct 
            :title="film.title"
            :ogTitle="film.original_title"
            :lingua="film.original_language"
            :vote="film.vote_average"
            :poster="film.poster_path"
            /> 
                


        </ul>
        <h2>Serie</h2>
        <ul v-for="(serie, i) in store.series">
            <appSingleProduct 
            :title="serie.name"
            :ogTitle="serie.original_name"
            :lingua="serie.original_language"
            :vote="serie.vote_average"
            :poster="serie.poster_path"
            />
            
                


        </ul>
        
    </main>
    
  
</template>

<style lang="scss" scoped>
.flag{
    >img{
        height: 50px;
    }
}

.buono{
    background-color: yellow;
}

</style>