<script lang="ts" setup>
import { ref } from 'vue'
import Menu from '../../components/menu.vue';
import Navbar from '../../components/navbar.vue';
import Footer from '../../components/footer.vue';

const dramas = ref([
    {
        id: 1,
        img: '/images/vojna-very.jpg',
        name: 'Война веры',
        sub: 'Chang Feng Po Lang',
        manufacturer: 'Китай, 2024',
        genre: 'Драма, Исторический',
        serie: 'Сериал:    40 серий'
    },
    {
        id: 2,
        img: '/images/nichego-krome-lyubvi.jpg',
        name: 'Ничего, кроме любви',
        sub: 'Ai Qing Er Yi',
        manufacturer: 'Китай, 2023',
        genre: 'Драма, Мелодрама, Спорт',
        serie: 'Сериал:    40 серий'
    },
    {
        id: 3,
        img: '/images/rasstatsyia-naveki.jpg',
        name: 'Расстаться навеки',
        sub: 'Wan Wan Ru Meng Xiao',
        manufacturer: 'Китай, 2024',
        genre: 'Драма, Мелодрама',
        serie: 'Сериал:    28 серий'
    },
    {
        id: 4,
        img: '/top-images/orden-cvetov.jpg',
        name: 'Орден цветов',
        sub: 'Nan Xun',
        manufacturer: 'Китай, 2024',
        genre: 'Детектив, Драма, Исторический',
        serie: 'Сериал:    32 серий'
    },
    {
        id: 5,
        img: '/images/trudno-obresti.jpg',
        name: 'Трудно обрести',
        sub: 'Nan Xun',
        manufacturer: 'Китай, 2024',
        genre: 'Драма, Комедия, Мелодрама',
        serie: 'Сериал:    28 серий'
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
                    <h1 class="title"><span class="red-letter">Д</span>орамы драмы фильмы смотреть онлайн</h1>
                </div>

                <div class="row pt-5 ps-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in dramas">
                            <RouterLink to="/doramas/1" class="img-link">
                                <img :src="dorama.img" :alt="dorama.name" class="block-img">
                            </RouterLink>
                            <div class="block-content ms-3">
                                <RouterLink to="" class="block-content__title mb-2">{{ dorama.name }}</RouterLink>
                                <p class="block-content__sub mb-4">{{ dorama.sub }}</p>
                                <p class="block-content__manufacturer mb-2">{{ dorama.manufacturer }}</p>
                                <p class="block-content__genre">{{ dorama.genre }}</p>
                                <p class="block-content__genre mt-4" style="color:black;">{{ dorama.serie }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <Footer/>
</template>