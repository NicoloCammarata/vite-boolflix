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
        lenguage(lingua){
            console.log('lingua' , lingua)
            let queryString = ''
            const flag = [
                'ja',
                'en',
                'it',
                'es'
            ]
            if(flag.includes(lingua)){
                if (flag[0] == lingua) {
                    queryString = 'https://flagicons.lipis.dev/flags/4x3/jp.svg'

                    return queryString;
                
                
                
                }
                else if(flag[1] == lingua){
                    queryString = 'https://flagicons.lipis.dev/flags/4x3/gb.svg'

                    return queryString;
                

                }
                else{
                    queryString = 'https://flagicons.lipis.dev/flags/4x3/' + lingua + '.svg'

                    return queryString;
                
                
                }

            }
            else{
                queryString = 'https://flagicons.lipis.dev/flags/4x3/cy.svg'

                return queryString;

            }
            
            
             
        },
        
    },
    components: {
        appSingleProduct

    }
}
</script>

<template>
    <main>
        <input v-model="store.searchText" type="text">
        <button @click="$emit('searchFilm')" >search</button>
        <div>
            <h2>Film</h2>
            
            
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
                    <img  :src="lenguage(film.original_language)">
                </li>
                <li >
                    {{ film.vote_average }}
                </li>

               <hr>


            </ul>
        </div>
        <div>
            <h2>Serie</h2>
            <ul v-for="(serie, i) in store.series">
                <li >
                    {{ serie.name }}
                </li>
                <li >
                    {{ serie.original_name }}
                </li>
                <li >
                    {{ serie.original_language }}
                    
                </li>
                <li >
                    <img  :src="lenguage(serie.original_language)">
                </li>
                <li >
                    {{ serie.vote_average }}
                </li>

               <hr>


            </ul>
        </div>
    </main>
    
  
</template>

<style lang="scss" scoped>
img{
    height: 50px;
}

</style>