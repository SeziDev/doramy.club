<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import Menu from '../components/menu.vue';
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';

const doramas = ref([
    {
        id: 1,
        img: '/images/mech-i-fey.jpg',
        name: 'Меч и Фея',
        sub: 'You Jian Xiao Yao',
        manufacturer: 'Китай, 2024',
        genre: 'Драма, Мелодрама, Фэнтези'
    },
    {
        id: 2,
        img: '/images/trudno-obresti.jpg',
        name: 'Трудно обрести',
        sub: 'Nan Xun',
        manufacturer: 'Китай, 2024',
        genre: 'Драма, Комедия, Мелодрама'
    },
    {
        id: 3,
        img: '/images/cvetushhie-dni.jpg',
        name: 'Цветущие дни',
        sub: 'Sui Sui Qing Lian',
        manufacturer: 'Китай, 2023',
        genre: 'Исторический, Мелодрама'
    },
    {
        id: 4,
        img: '/images/puteshestvie-s-feniksom.jpg',
        name: 'Путешествие с Фениксом',
        sub: 'Yu Feng Xing',
        manufacturer: 'Китай, 2024',
        genre: 'Мелодрама, Фэнтези'
    },
    {
        id: 5,
        img: '/images/nichego-krome-lyubvi.jpg',
        name: 'Ничего, кроме любви',
        sub: 'Ai Qing Er Yi',
        manufacturer: 'Китай, 2023',
        genre: 'Драма, Мелодрама, Спорт'
    }
]);
</script>


<template>
    <Navbar/>
    <section class="white">
        <div class="container">
            <div class="white-block">
                <Menu />
                <div class="head ps-5">
                    <h1 class="title"><span class="red-letter">Д</span>орамы смотреть онлайн</h1>
                    <p class="description mt-3">Добро пожаловать на сайт корейских, китайских, японских и других
                        азиатских <br/>
                        сериалов, а также фильмов, которые известны под общим названием дорамы.</p>
                </div>

                <div class="row pt-5 ps-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in doramas">
                            <RouterLink to="/doramas/1" class="img-link">
                                <img :src="dorama.img" :alt="dorama.name" class="block-img">
                            </RouterLink>
                            <div class="block-content ms-3">
                                <RouterLink to="" class="block-content__title">{{ dorama.name }}</RouterLink>
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
