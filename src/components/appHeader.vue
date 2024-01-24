<script >
export default {
    data() {
        return {
            headerMenu: [
                {
                    label: 'Caracters',
                    link: '#',
                    active: false,
                },
                {
                    label: 'Comics',
                    link: '#',
                    active: true,
                },
                {
                    label: 'Movies',
                    link: '#',
                    active: false,
                },
                {
                    label: 'Tv',
                    link: '#',
                    active: false,
                },
                {
                    label: 'Games',
                    link: '#',
                    active: false,
                },
                {
                    label: 'Collectibles',
                    link: '#',
                    active: false,
                },
                {
                    label: 'Videos',
                    link: '#',
                    active: false,
                },
                {
                    label: 'News',
                    link: '#',
                    active: false,
                },
                {
                    label: 'Shop',
                    link: '#',
                    active: false,
                },
            ]

        }
    },
    methods:{
        

    },
}

</script>

<template>
    <header>
        <div class="top-header">

        </div>
        <div class="bottom-header">
            <div class="logo">
                <img src="../../public/img/dc-logo.png" alt="">

            </div>
            <ul class="link">
                <li @click="menu.active = true" :class="{
                    'active':menu.active
                }" v-for="(menu, i) in headerMenu">
                    <a :href="menu.link">{{ menu.label }}</a>

                </li>

            </ul>

        </div>
   </header>
  
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/reset" as *;

</style>