<script lang="ts" setup>
import Menu from '../../components/menu.vue';
import { ref } from 'vue';
import Navbar from '../../components/navbar.vue';
import Footer from '../../components/footer.vue';

const sport = ref([
    {
        id: 1,
        img: '/images/nichego-krome-lyubvi.jpg',
        name: 'Ничего, кроме любви',
        sub: 'Ai Qing Er Yi',
        manufacturer: 'Китай, 2023',
        genre: 'Драма, Мелодрама, Спорт',
        serie: 'Сериал:    40 серий'
    },
    {
        id: 2,
        img: '/images/go-v-tvoem-serdce.jpg',
        name: 'Го в твоем сердце',
        sub: 'Go Into Your Heart',
        manufacturer: 'Китай, 2021',
        genre: 'Драма, Комедия, Спорт',
        serie: 'Сериал:    41 серий'
    },
    {
        id: 3,
        img: '/images/doveryaya-my-s-bystree.jpg',
        name: 'Доверяя мысли, мы становимся быстрее',
        sub: 'Ji Su Bei Lun',
        manufacturer: 'Китай, 2023',
        genre: 'Мелодрама, Спорт',
        serie: 'Сериал:    22 серий'
    },
    {
        id: 4,
        img: '/images/mchas-navstreci-zhizni-i-lyubvi.jpg',
        name: 'Мечась навстречу жизни и любви',
        sub: 'Fei Chi Ren Sheng Re Ai Pian',
        manufacturer: 'Китай, 2024',
        genre: 'Драма, Комедия, Спорт',
        serie: 'Сериал:    40 серий'
    },
    {
        id: 5,
        img: '/images/cvety-rascvetadazhe-na-peske.jpg',
        name: 'Цветы расцветают даже на песке',
        sub: 'Moraeedo Kkochi Pinda',
        manufacturer: 'Южная Корея, 2023',
        genre: 'Комедия, Мелодрама, Спорт',
        serie: 'Сериал:    12 серий'
    
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
                    <h1 class="title"><span class="red-letter">Д</span>орамы спортивные фильмы смотреть онлайн</h1>
                </div>
                <div class="row ps-5 pt-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in sport">
                            <RouterLink to="/doramas/1" class="img-link">
                                <img :src="dorama.img" :alt="dorama.name" class="block-img">
                            </RouterLink>
                            <div class="block-content ms-3">
                                <RouterLink :to="`/films/${dorama.id}`" class="block-content__title mb-2">{{ dorama.name
                                    }}</RouterLink>
                                <p class="block-content__sub mb-4">{{ dorama.sub }}</p>
                                <p class="block-content__manufacturer mb-2">{{ dorama.manufacturer }}</p>
                                <p class="block-content__genre">{{ dorama.genre }}</p>
                                <p class="block-content__genre mt-5">{{ dorama.serie }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</template>