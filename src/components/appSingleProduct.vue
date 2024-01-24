<script >
export default {
    data() {
        return 
            
    },
    props: {
        series: Object

    },
}
</script>

<template>
    <div class="poster">
        
        <div>
            <img :src="series.thumb" alt="">
            <h3>{{ series.series }}]</h3>
        </div>
        

    </div>
    
  
</template>

<style lang="scss" scoped>
.poster{
    width: calc((100% / 6) - 20px);
    height: 150px;
    margin-top: 35px;
    div{
        width: 100%;
        height: 90%;
        img{
        height: 100%;
        display: block;
        
        }
    }
    
    
}

</style>