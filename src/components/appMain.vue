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
        valueFilm(voto){
            if(voto > 0.5){
                classlist.add('buono')
            }
            
        }
        
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
                <li>
                    <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" alt="film.title">
                    
                </li>
                <li >
                    {{ film.title }}
                </li>
                <li >
                    {{ film.original_title }}
                </li>
                <li >
                    {{ film.original_language }}
                    
                </li>
                <li class="flag">
                    <img  :src="lenguage(film.original_language)">
                </li>
                <li >
                    {{ film.vote_average }}
                    <i :class="{ 'buono': film.vote_average > 1.500 }" class="fa-regular fa-star" ></i>
                    <i :class="{ 'buono': film.vote_average > 3.500 }" class="fa-regular fa-star"></i>
                    <i :class="{ 'buono': film.vote_average > 5.500 }" class="fa-regular fa-star"></i>
                    <i :class="{ 'buono': film.vote_average > 7.500 }" class="fa-regular fa-star"></i>
                    <i :class="{ 'buono': film.vote_average > 9.500 }" class="fa-regular fa-star"></i>
                </li>

               <hr>


            </ul>
        </div>
        <div>
            <h2>Serie</h2>
            <ul v-for="(serie, i) in store.series">
                <li>
                    <img :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" alt="serie.title">
                    
                </li>
                <li >
                    {{ serie.name }}
                </li>
                <li >
                    {{ serie.original_name }}
                </li>
                <li >
                    {{ serie.original_language }}
                    
                </li>
                <li class="flag">
                    <img  :src="lenguage(serie.original_language)">
                </li>
                <li >
                    {{ serie.vote_average }}
                    <i :class="{ 'buono': serie.vote_average > 1.500 }" class="fa-regular fa-star" ></i>
                    <i :class="{ 'buono': serie.vote_average > 3.500 }" class="fa-regular fa-star"></i>
                    <i :class="{ 'buono': serie.vote_average > 5.500 }" class="fa-regular fa-star"></i>
                    <i :class="{ 'buono': serie.vote_average > 7.500 }" class="fa-regular fa-star"></i>
                    <i :class="{ 'buono': serie.vote_average > 9.500 }" class="fa-regular fa-star"></i>
                </li>

               <hr>


            </ul>
        </div>
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