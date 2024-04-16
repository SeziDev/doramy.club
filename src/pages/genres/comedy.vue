<script lang="ts" setup>
import { ref } from 'vue'
import Menu from '../../components/menu.vue';
import Navbar from '../../components/navbar.vue';
import Footer from '../../components/footer.vue';

const comedy = ref([
    {
        id: 1,
        img: '/images/ty-samaya-prekrasnaya-v-etom-mire.jpg',
        name: 'Ты самая прекрасная в этом мире',
        sub: 'Shi Jie Shang Zui Dong Ting De Ni',
        manufacturer: 'Китай, 2021',
        genre: 'Комедия, Мелодрама'
    },
    {
        id: 2,
        img: '/images/legenda-o-belom-kote.jpg',
        name: 'Легенда о белом коте',
        sub: 'Da Li Si Shao Qing',
        manufacturer: 'Китай, 2024',
        genre: 'Детектив, Исторический, Комедия'
    },
    {
        id: 3,
        img: '/images/trudno-obresti.jpg',
        name: 'Трудно обрести',
        sub: 'Nan Xun',
        manufacturer: 'Китай, 2024',
        genre: 'Драма, Комедия, Мелодрама'
    },
    {
        id: 4,
        img: '/images/svadba-nevozmozhna.jpg',
        name: 'Свадьба невозможна',
        sub: 'Waeding impaseobeul',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Комедия, Мелодрама'
    },
    {
        id: 5,
        img: '/images/krasotka-novichok.jpg',
        name: 'Красотка-новичок',
        sub: 'SBeauty Newbie',
        manufacturer: 'Таиланд, 2024',
        genre: 'Драма, Комедия, Мелодрама'
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
                    <h1 class="title"><span class="red-letter">Д</span>орамы комедии фильмы смотреть онлайн</h1>
                </div>
                <div class="row pt-5 ps-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in comedy">
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