<script >

export default {
    data() {
        return {
            
            
        }
            
    },
    props: {
        title: String,
        ogTitle: String,
        lingua: String,
        vote: Number,
        poster: String


    },
    methods:{
        lenguage(lingua){
            console.log('lingua' , lingua)
            let queryString = ''
            const flag = [
                'ja',
                'en',
                'it',
                'es',
                'de',
                'ru',
                'fr'
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
    
}
</script>

<template>

  <div>
    <li>
        <img :src="'https://image.tmdb.org/t/p/w342' + poster" alt="film.title">
                    
    </li>
    <li >
        {{ title }}
    </li>                
                    
    <li >
        {{ ogTitle }}
    </li>
    <li >
        {{ lingua }}
                    
    </li>
    <li class="flag">
        <img  :src="lenguage(lingua)">
    </li>                
    <li >
        {{ vote }}
        <i :class="{ 'buono': vote > 1.500 }" class="fa-regular fa-star" ></i>
        <i :class="{ 'buono': vote > 3.500 }" class="fa-regular fa-star"></i>
        <i :class="{ 'buono': vote > 5.500 }" class="fa-regular fa-star"></i>
        <i :class="{ 'buono': vote > 7.500 }" class="fa-regular fa-star"></i>
        <i :class="{ 'buono': vote > 9.500 }" class="fa-regular fa-star"></i>
    </li>      
    
                         

  </div>
  <hr>      

  
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