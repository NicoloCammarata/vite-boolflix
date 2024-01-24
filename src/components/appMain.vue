<script >
import appSingleProduct from './appSingleProduct.vue';
import { store } from '../sotre.js';

export default {
    data() {
        return {
          store
               
            
            
        }
    },
    methods:{
        
    },
    components: {
        appSingleProduct

    }
}
</script>

<template>
    <main>
        <div>
            <input v-model="store.searchText" type="text">
            <button @click="$emit('searchFilm')" >search</button>
            <ul v-for="(film, i) in store.films">
                <li >
                    {{ film.title }}
                </li>
                <li >
                    {{ film.original_title }}
                </li>
                <li >
                    {{ film.original_language }}
                </li>
                <li >
                    {{ film.vote_average }}
                </li>


            </ul>
        </div>
    </main>
    
  
</template>

<style lang="scss" scoped>

</style>