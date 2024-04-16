<script lang="ts" setup>
import { ref } from 'vue'
import Menu from '../../components/menu.vue';
import Navbar from '../../components/navbar.vue';
import Footer from '../../components/footer.vue';

const detektivs = ref([
    {
        id: 1,
        img: '/images/legenda-o-belom-kote.jpg',
        name: 'Легенда о белом коте',
        sub: 'Da Li Si Shao Qing',
        manufacturer: 'Китай, 2024',
        genre: 'Детектив, Исторический, Комедия'
    },
    {
        id: 2,
        img: '/top-images/orden-cvetov.jpg',
        name: 'Орден цветов',
        sub: 'Nan Xun',
        manufacturer: 'Китай, 2024',
        genre: 'Детектив, Драма, Исторический'
    },
    {
        id: 3,
        img: '/images/chudesnyj-mir.jpg',
        name: 'Чудесный мир',
        sub: 'Wonderful World',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Детектив, Драма, Мелодрама'
    },
    {
        id: 4,
        img: '/images/pojmat-na-goryachem.jpg',
        name: 'Поймать на горячем',
        sub: 'Myeoksal Hanbeon Jabhibsida',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Детектив, Драма, Мелодрама'
    },
    {
        id: 5,
        img: '/images/scenarij-pobedy.jpg',
        name: 'Сценарий победы',
        sub: 'Shouri no Houteishiki',
        manufacturer: 'Япония, 2023',
        genre: 'Детектив'
    }
])
</script>


<template>
        <Navbar/>
    <section class="white">
        <div class="container">
            <div class="white-block">
                <Menu />
                <div class="head ps-5">
                    <h1 class="title"><span class="red-letter">Д</span>орамы детективы смотреть онлайн</h1>
                </div>

                <div class="row pt-5 ps-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in detektivs">
                            <RouterLink to="/doramas/1" class="img-link">
                                <img :src="dorama.img" :alt="dorama.name" class="block-img">
                            </RouterLink>
                            <div class="block-content ms-3">
                                <RouterLink to="" class="block-content__title mb-2">{{ dorama.name }}</RouterLink>
                                <p class="block-content__sub mb-4">{{ dorama.sub }}</p>
                                <p class="block-content__manufacturer mb-2">{{ dorama.manufacturer }}</p>
                                <p class="block-content__genre">{{ dorama.genre }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</template>