<script >
export default {
  data() {
    return {
        immagini:[
            '../../public/img/footer-facebook.png',
            '../../public/img/footer-periscope.png',
            '../../public/img/footer-pinterest.png',
            '../../public/img/footer-twitter.png',
            '../../public/img/footer-youtube.png'
        ]
    }
  },
  methods:{
    

    },
}
</script>

<template>
    <footer>
        <div class="top-footer">
            <div class="left-side">
                <button>
                    sign-up now!
                </button>

            </div>
            <div class="right-side">
                <h3>follow us</h3>
                <div v-for="(img, i) in immagini">
                    <img  :src="img" alt="">
                </div>

            </div>

        </div>
        <div class="bottom-footer">

        </div>
    </footer>
  
</template>

<style lang="scss" scoped>
footer{
    width: 100%;
    height: 200px;
    .top-footer{
        background-color: rgb(55, 55, 55);
        height: 40%;
        position: relative;
        z-index: 1;
        display: flex;
        .left-side{
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                border: 1px blue solid;
                background-color: rgb(55, 55, 55);
                color: white;
                padding: 7px;
            }
        }
        .right-side{
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            h3{
                color: blue;
            }
            div{
                padding: 0 10px;
            }
        }
        

    }
    .bottom-footer{
        background-color: black;
        height: 60%;
        
        
    }

}

</style>