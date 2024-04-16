<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import Menu from '../../components/menu.vue';
import Navbar from '../../components/navbar.vue';
import Footer from '../../components/footer.vue';

const films = ref([
    {
        id: 1,
        img: '/films/slepoj-mech-2.jpg',
        name: 'Слепой меч 2',
        sub: 'Mu Zhong Wu Ren 2',
        manufacturer: 'Китай, 2024',
        genre: 'Боевые искусства, Драма, Исторический'
    },
    {
        id: 2,
        img: '/films/sdelka-s-dyavolom.jpg',
        name: 'Сделка с дьяволом',
        sub: 'The Devil^s Deal',
        manufacturer: 'Южная Корея, 2023',
        genre: 'Криминал, Триллер',
    },
    {
        id: 3,
        img: '/films/vizhu-slyshu-lyublyu.jpg',
        name: 'Вижу, слышу, люблю',
        sub: 'See Hear Love: Mienakute mo Kikoenakute mo Aishiteru',
        manufacturer: 'Япония, 2023',
        genre: 'Драма, Мелодрама',
    },
    {
        id: 4,
        img: '/films/idealnye-otnosheniya-dlya-chajnikov.jpg',
        name: 'Идеальные отношения для чайников',
        sub: 'Tadashii Koi no Hajimekata',
        manufacturer: 'Япония, 2023',
        genre: 'Мелодрама',
    },
    {
        id: 5,
        img: '/films/prishelec-2.jpg',
        name: 'Пришелец 2',
        sub: 'Tadashii Koi no Hajimekata',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Приключения, Фантастика',
    }
]);

//  let a = {
//     id: 1,
//     img: '/films/slepoj-mech-2.jpg',
//     name: 'Слепой меч 2',
//     sub: 'Mu Zhong Wu Ren 2',
//     manufacturer: 'Китай, 2024',
//     genre: 'Боевые искусства, Драма, Исторический'
// }

// export a

</script>


<template>
        <Navbar/>
    <section class="white">
        <div class="container">
            <div class="white-block mb-5">
                <Menu />
                <div class="head ps-5">
                    <h1 class="title"><span class="red-letter">Ф</span>ильмы дорамы смотреть онлайн</h1>
                </div>
                <div class="row pt-5 ps-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in films">
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
<style></style>