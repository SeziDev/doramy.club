<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from 'vue';
import Menu from '../../components/menu.vue';
import Navbar from '../../components/navbar.vue';
import Footer from '../../components/footer.vue';


const topAll = ref([
    {
        id: 1,
        img: '/top-images/magazin-dlya-ubi.jpg',
        name: 'Магазин для убийц',
        sub: 'A Shop for Killers',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Драма'
    },
    {
        id: 2,
        img: '/top-images/i-dzhe-skoro-umryosh.jpg',
        name: 'И Джэ, скоро умрёшь',
        sub: 'Yijae, Got Jookseummida',
        manufacturer: 'Южная Корея, 2023',
        genre: 'Драма, Фэнтези'
    },
    {
        id: 3,
        img: '/top-images/ty-moyo-sokrovishhe.jpg',
        name: 'Ты — моё сокровище',
        sub: 'Naegen Neomu Sojunghan Neo',
        manufacturer: 'Южная Корея, 2021',
        genre: 'Драма, Мелодрама'
    },
    {
        id: 4,
        img: '/top-images/mercayushhij-arbuz.jpg',
        name: 'Мерцающий арбуз',
        sub: 'Banjjakyineun Watermelon',
        manufacturer: 'Южная Корея, 2023',
        genre: 'Мелодрама, Музыка, Фантастика'
    },
    {
        id: 5,
        img: '/top-images/legenda-o-chzhen-xuan.jpg',
        name: 'Легенда о Чжэнь Хуань',
        sub: 'Hou Gong Zhen Huan Zhuan',
        manufacturer: 'Китай, 2012',
        genre: 'Драма, Исторический, Мелодрама'
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
                    <h1 class="title"><span class="red-letter">Т</span>оп лучших дорам</h1>
                </div>

                <div class="top__btn mt-5 ps-5">
                    <button class="top-button" @click="router.push('/top')">Весь топ</button>
                    <button class="top-button" @click="router.push('/top-month')">Топ месяца</button>
                    <button class="top-button" @click="router.push('/top-year')">Топ года</button>
                </div>

                <div class="row pt-5 ps-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in topAll">
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