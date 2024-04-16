<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import Menu from '../../components/menu.vue';
import Navbar from '../../components/navbar.vue';
import Footer from '../../components/footer.vue';

const router = useRouter();

const topMonth = ref([
    {
        id: 1,
        img: '/images/rasstatsyia-naveki.jpg',
        name: 'Расстаться навеки',
        sub: 'Wan Wan Ru Meng Xiao',
        manufacturer: 'Китай, 2024',
        genre: 'Драма, Мелодрама'
    },
    {
        id: 2,
        img: '/images/legenda-o-belom-kote.jpg',
        name: 'Легенда о белом коте',
        sub: 'Nan Xun',
        manufacturer: 'Китай, 2024',
        genre: 'Детектив, Исторический, Комедия, Приключения'
    },
    {
        id: 3,
        img: '/images/tysyachi-let-lyubvi.jpg',
        name: 'Тысячи лет любви',
        sub: 'Qian Nian Qing Jie',
        manufacturer: 'Китай, 2024',
        genre: 'Исторический, Мелодрама, Фэнтези'
    },
    {
        id: 4,
        img: '/images/chebol-protiv-detektiva.jpg',
        name: 'Чебол против детектива',
        sub: 'Chaebol X Hyeongsa',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Драма, Комедия, Детектив'
    },
    {
        id: 5,
        img: '/images/vo-vremya-snezhnoj-buri.jpg',
        name: 'Во время снежной бури',
        sub: 'Zai Bao Xue Shi Fen',
        manufacturer: 'Китай, 2024',
        genre: 'Мелодрама'
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
                    <h1 class="title"><span class="red-letter">Т</span>оп дорам месяца</h1>
                </div>

                <div class="top__btn mt-5 ps-5">
                    <button class="top-button" @click="router.push('/top')">Весь топ</button>
                    <button class="top-button" @click="router.push('/top-month')">Топ месяца</button>
                    <button class="top-button" @click="router.push('/top-year')">Топ года</button>
                </div>

                <div class="row pt-5 ps-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in topMonth">
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