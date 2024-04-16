<script lang="ts" setup>
import { ref } from 'vue'
import Menu from '../../components/menu.vue';
import Navbar from '../../components/navbar.vue';
import Footer from '../../components/footer.vue';

const fantasy = ref([
    {
        id: 1,
        img: '/images/puteshestvie-s-feniksom.jpg',
        name: 'Путешествие с Фениксом',
        sub: 'Yu Feng Xing',
        manufacturer: 'Китай, 2024',
        genre: 'Мелодрама, Фэнтези',
        serie: 'Сериал:    40 серий'
    },
    {
        id: 2,
        img: '/images/u-gen-plamya-yarosti.jpg',
        name: 'У гэн: Пламя ярости',
        sub: 'Lie Yan Zhi Wu Geng Ji',
        manufacturer: 'Китай, 2024',
        genre: 'Боевые искусства, Драма, Мелодрама',
        serie: 'Сериал:    40 серий'
    },
    {
        id: 3,
        img: '/images/milyj-ne-bojsya-menya.jpg',
        name: 'Милый, не бойся меня',
        sub: 'The Expect Love',
        manufacturer: 'Китай, 2024',
        genre: 'Исторический, Мелодрама, Мистика',
        serie: 'Сериал:    36 серий'
    },
    {
        id: 4,
        img: '/images/dorogoj-povelitel-mediciny.jpg',
        name: 'Дорогой повелитель медицины',
        sub: 'HQin Ai De Yao Wang Da Ren',
        manufacturer: 'Китай, 2020',
        genre: 'ДИсторический, Мелодрама, Фэнтези',
        serie: 'Сериал:    32 серий'
    },
    {
        id: 5,
        img: '/images/v-plenu-lyubvi-2.jpg',
        name: 'В плену любви',
        sub: 'Jian Qing Qing',
        manufacturer: 'Китай, 2024',
        genre: 'Драма, Исторический, Мелодрама',
        serie: 'Сериал:    24 серий'

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
                    <h1 class="title"><span class="red-letter">Д</span>орамы фэнтези фильмы смотреть онлайн</h1>
                </div>

                <div class="row pt-5 ps-5">
                    <div class="col">
                        <div class="block mb-5 d-flex align-items-start" v-for="dorama in fantasy">
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