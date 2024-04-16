<script lang="ts" setup>
import { ref } from 'vue';
import Menu from '../../components/menu.vue';
import Navbar from '../../components/navbar.vue';
import Footer from '../../components/footer.vue';

const boevik = ref([
    {
        id: 1,
        img: '/images/syogun.jpg',
        name: 'Сёгун',
        sub: 'Shogun',
        manufacturer: 'Япония, 2024',
        genre: 'Боевые, Драма, Исторический',
        serie: 'Сериал: 10 серий',
    },
    {
        id: 2,
        img: '/images/za-tvoim-prikosnoveniem.jpg',
        name: 'За твоим прикосновением',
        sub: 'Hiphage',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Боевик, Комедия, Криминал',
        serie: 'Сериал: 16 серий'
    },
    {
        id: 3,
        img: '/images/oxotniki-s-pustoshi.jpg',
        name: 'Охотники с пустоши',
        sub: 'Hwangya',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Боевые, Драма, Фантастика'
    },
    {
        id: 4,
        img: '/images/tretya-gruppa.jpg',
        name: 'Третья группа',
        sub: 'San Da Dui',
        manufacturer: 'Китай, 2023',
        genre: 'Боевые, Драма, Детектив',
        serie: 'Сериал: 12 серий'
    },
    {
        id: 5,
        img: '/images/istinnyj-grex.jpg',
        name: 'Истинный грех',
        sub: 'Yuan Sheng Zhi Zui',
        manufacturer: 'Китай, 2018',
        genre: 'Боевик, Детектив, Криминал',
        serie: 'Сериал: 24 серий'
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
                    <h1 class="title"><span class="red-letter">Д</span>орамы боевики фильмы смотреть онлайн</h1>
                </div>
                <div class="row pt-5 ps-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in boevik">
                            <RouterLink to="/doramas/1" class="img-link">
                                <img :src="dorama.img" :alt="dorama.name" class="block-img">
                            </RouterLink>
                            <div class="block-content ms-3">
                                <RouterLink :to="`/films/${dorama.id}`" class="block-content__title mb-2">{{ dorama.name
                                    }}</RouterLink>
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