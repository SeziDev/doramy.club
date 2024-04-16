<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import Menu from '../../components/menu.vue';
import Navbar from '../../components/navbar.vue';
import Footer from '../../components/footer.vue';

const topYear = ref([
    {
        id: 1,
        img: '/images/puteshestvie-s-feniksom.jpg',
        name: 'Путешествие с Фениксом',
        sub: 'Yu Feng Xing',
        manufacturer: 'Китай, 2024',
        genre: 'Мелодрама, Фэнтези'
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
        img: '/images/koroleva-slyez.jpg',
        name: 'Королева слёз',
        sub: 'Noonmului Yeowang',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Драма, Комедия, Мелодрама'
    },
    {
        id: 4,
        img: '/top-images/magazin-dlya-ubi.jpg',
        name: 'Магазин для убийц',
        sub: 'A Shop for Killers',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Драма'
    },
    {
        id: 5,
        img: '/top-images/den-pohishheniya.jpg',
        name: 'День похищения',
        sub: 'Yugoeui Nal',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Драма, Комедия, Триллер'
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
                    <h1 class="title"><span class="red-letter">Т</span>оп дорам года</h1>
                </div>

                <div class="top__btn mt-5 ps-5">
                    <button class="top-button" @click="router.push('/top')">Весь топ</button>
                    <button class="top-button" @click="router.push('/top-month')">Топ месяца</button>
                    <button class="top-button" @click="router.push('/top-year')">Топ года</button>
                </div>

                <div class="row pt-5 ps-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in topYear">
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