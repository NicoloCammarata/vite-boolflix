<script >
import appSingleProduct from './appSingleProduct.vue';

export default {
    data() {
        return {
            mainMenu: [
                {
                    label: 'Digital Cìcomics',
                    link: '../../public/img/buy-comics-digital-comics.png',
                    active: false,
                },
                {
                    label: 'DC merchandaise',
                    link: '../../public/img/buy-comics-merchandise.png',
                    active: true,
                },
                {
                    label: 'Subscription',
                    link: '../../public/img/buy-comics-shop-locator.png',
                    active: false,
                },
                {
                    label: 'Comic shop locator',
                    link: '../../public/img/buy-comics-subscriptions.png',
                    active: false,
                },
                {
                    label: 'DC power visa',
                    link: '../../public/img/buy-dc-power-visa.svg',
                    active: false,
                },
               
            ],
            secondMainMenu: [
                {
                    title:'Dc comics',
                    voci:[
                        'Charatìcters',
                        'Comics',
                        'Movies',
                        'Tv',
                        'Games',
                        'Videos',
                        'News'
                    ]
                
                    
                
                },
                {
                    title:'Shop ',
                    voci:[
                        'Shop Dc',
                        'Shop Dc Collection',
                        

                    ]
                
                    
                
                },
                {
                    title:'Dc ',
                    voci:[
                        'Therms of use',
                        'Comics',
                        'Charatìcters',
                        'Comics',
                        'Movies',
                        'Tv',
                        'Games',
                        'Videos',
                        'News'
                    ]
                
                    
                
                },
                {
                    title:'Sites ',
                    voci:[
                        'Therms of use',
                        'Comics',
                        'Tv',
                        'Games',
                        'Videos',
                        'News'
                    ]
                
                    
                
                },
                   
               
            ],
            films: [
   {
        "thumb": "https://www.coverbrowser.com/image/action-comics/1-1.jpg",
      "price": "$19.99",
      "series": "Action Comics",
      "type": "comic book",
  },
  
  {
      "thumb": "https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/M/1/M1BLLA015ISBN_0.jpg",
      "price": "$3.99",
      "series": "American Vampire 1976",
      "type": "comic book",
  },
  {
      "thumb": "https://media.wired.com/photos/593384dad80dd005b42b2817/master/w_2560%2Cc_limit/Aquaman-16.jpg",
      "price": "$16.99",
      "series": "Aquaman",
      "type": "graphic novel",
  },
  {
      "thumb": "https://d29xot63vimef3.cloudfront.net/image/batgirl/1-1.jpg",
      "price": "$2.99",
      "series": "Batgirl",
      "type": "comic book",
  },
  {
      "thumb": "https://static.posters.cz/image/750/locandine-film-in-plexiglass-batman-prowl-comic-cover-i69653.jpg",
      "price": "$3.99",
      "series": "Batman",
      "type": "comic book",
  },
  {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/50/Batman_Beyond_v.1_1.jpg",
      "price": "$2.99",
      "series": "Batman Beyond",
      "type": "comic book",
  },
  {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/0/0d/Batman_Superman_Vol_1_1.jpg",
      "price": "$3.99",
      "series": "Batman/Superman",
      "type": "comic book",
  },
  {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/cf/Batman_Superman_Annual_Vol_2_1.jpg",
      "price": "$4.99",
      "series": "Batman/Superman Annual",
      "type": "comic book",
  },
  {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/54/Batman_The_Joker_War_Zone_Vol_1_1.jpg",
      "price": "$5.99",
      "series": "Batman: The Joker War Zone",
      "type": "comic book",
  },
  {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/6/64/Batman_Three_Jokers_Collected.jpg",
      "price": "$6.99",
      "series": "Batman: Three Jokers",
      "type": "comic book",
  },
  {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/f/f8/Batman_White_Knight_Presents_Harley_Quinn_Vol_1_1.jpg",
      "price": "$4.99",
      "series": "Batman: White Knight Presents: Harley Quinn",
      "type": "comic book",
  },
  {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/c8/Catwoman_Vol_2_1.jpg",
      "price": "$16.99",
      "series": "Catwoman",
      "type": "graphic novel",
  },

            ]
            
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
        <div class="top-main">
            <appSingleProduct 
            v-for="(film, n) in films"
            :key="n"
            :series="film"/>

        </div>
        <div  class="mid-main">
            <ul>
                <li v-for="(elem, j) in mainMenu">
                    <img :src="elem.link" alt="">
                    <span>{{ elem.label }}</span>

                </li>
            </ul>

        </div>
        <div class="low-main">
            <div class="left-side ">
                
                <div>
                    <ul >
                        <h3 >{{ secondMainMenu[0].title }}</h3>
                        <li v-for="(voce, y) in secondMainMenu[0].voci">
                            {{ secondMainMenu[0].voci[y] }}
                        </li>
                    
                    </ul>
                    <ul >
                    <h3 >{{ secondMainMenu[1].title }}</h3>
                    <li v-for="(voce, y) in secondMainMenu[1].voci">
                        {{ secondMainMenu[1].voci[y] }}
                    </li>

                    </ul>
                
                </div>
                <ul >
                    <h3 >{{ secondMainMenu[2].title }}</h3>
                    <li v-for="(voce, y) in secondMainMenu[2].voci">
                        {{ secondMainMenu[2].voci[y] }}
                    </li>
                    

                </ul>
                <ul>
                    <h3 >{{ secondMainMenu[3].title }}</h3>
                    <li v-for="(voce, y) in secondMainMenu[3].voci">
                        {{ secondMainMenu[3].voci[y] }}
                    </li>

                </ul>

            </div>
            <div class="right-side">
                <img src="../../public/img/dc-logo-bg.png" alt="">

            </div>

        </div>
    </main>
  
</template>

<style lang="scss" scoped>

</style>