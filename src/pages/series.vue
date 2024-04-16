<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import Menu from '../components/menu.vue';
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';


const series = ref([
    {
        id: 1,
        img: '/images/100-atletov-2.jpg',
        name: '100 атлетов 2',
        sub: 'Physical 100 Season 2',
        manufacturer: 'Южная Корея, 2024',
        genre: 'Ток-шоу',
        serie: 'Сериал:    9 серий'
    },
    {
        id: 2,
        img: '/images/istoriya-xua-chzhi.jpg',
        name: 'История Хуа Чжи',
        sub: 'Xi Hua Zhi',
        manufacturer: 'Китай, 2024',
        genre: 'Исторический, Мелодрама',
        serie: 'Сериал:    40 серий'
    },
    {
        id: 3,
        img: '/images/ya-mogu-lyubit-tebya.jpg',
        name: 'Я могу полюбить тебя',
        sub: 'Dui ni bu zhi s xi huan',
        manufacturer: 'Китай, 2023',
        genre: 'Драма, Комедия, Мелодрама',
        serie: 'Сериал:    24 серий'
    },
    {
        id: 4,
        img: '/images/princessa-po-obmenu.jpg',
        name: 'Принцесса по обмену',
        sub: 'Princess Exchange Life',
        manufacturer: 'Китай, 2023',
        genre: 'Мелодрама, Комедия, Приключения',
        serie: 'Сериал:    26 серий'
    },
    {
        id: 5,
        img: '/images/ugadaj-kto-ya.jpg',
        name: 'Угадай, кто я',
        sub: 'Bai Tuo! Qing Bie He Wo Zuo Peng You',
        manufacturer: 'Китай, 2024',
        genre: 'Комедия, Мелодрама, Триллер',
        serie: 'Сериал:    24 серий'
    }
]);
</script>


<template>
    <Navbar />
    <section class="white">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="white-block mb-5">
                        <Menu />
                        <div class="head ps-5">
                            <h1 class="title"><span class="red-letter">С</span>ериалы дорамы смотреть онлайн</h1>
                        </div>

                        <div class="row pt-5  ps-5">
                            <div class="col">
                                <div class="block mb-5 d-flex align-items-start" v-for="dorama in series">
                                    <RouterLink to="/doramas/1" class="img-link">
                                        <img :src="dorama.img" :alt="dorama.name" class="block-img">
                                    </RouterLink>
                                    <div class="block-content ms-3">
                                        <RouterLink to="" class="block-content__title mb-2">{{ dorama.name }}
                                        </RouterLink>
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
            </div>
        </div>
    </section>
    <Footer />
</template>
