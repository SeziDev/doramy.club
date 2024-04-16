<script lang="ts" setup>
import Menu from '../../components/menu.vue';
import { ref } from 'vue';
import Navbar from '../../components/navbar.vue';
import Footer from '../../components/footer.vue';

const triller = ref([
    {
        id: 1,
        img: '/images/ugadaj-kto-ya.jpg',
        name: 'Угадай, кто я',
        sub: 'Bai Tuo! Qing Bie He Wo Zuo Peng You',
        manufacturer: 'Китай, 2024',
        genre: 'Комедия, Мелодрама, Триллер',
        serie: 'Сериал:    24 серий'
    },
    {
        id: 2,
        img: '/images/chudesnyj-mir.jpg',
        name: 'Чудесный мир',
        sub: 'Bai Tuo! Qing Bie He Wo Zuo Peng You',
        manufacturer: 'Китай, 2024',
        genre: 'Драма, Мелодрама, Триллер',
        serie: 'Сериал:    14 серий'
    },
    {
        id: 3,
        img: '/images/pojmat-na-goryachem.jpg',
        name: 'Поймать на горячем',
        sub: 'Myeoksal Hanbeon Jabhibsida',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Детекив, Драма, Триллер',
        serie: 'Сериал:    16 серий'
    },
    {
        id: 4,
        img: '/films/sdelka-s-dyavolom.jpg',
        name: 'Сделка с дьяволом',
        sub: 'The Devil^s Deal',
        manufacturer: 'Южная Корея, 2023',
        genre: 'Криминал, Триллер',
    },
    {
        id: 5,
        img: '/images/oxotniki-s-pustoshi.jpg',
        name: 'Охотники c пустоши',
        sub: 'Hwangya',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Боевые, Драма, Триллер'
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
                    <h1 class="title"><span class="red-letter">Д</span>орамы триллеры фильмы смотреть онлайн</h1>
                </div>
                <div class="row pt-5 ps-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in triller">
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