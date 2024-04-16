<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
const years = ref([
    {
        id: 1,
        year: '2024',
    },
    {
        id: 2,
        year: '2023',
    },
    {
        id: 3,
        year: '2022',
    },
    {
        id: 4,
        year: '2021',
    },
    {
        id: 5,
        year: '2020',
    },
    {
        id: 6,
        year: '2019',
    },
    {
        id: 7,
        year: '2018',
    },
    {
        id: 8,
        year: '2017',
    },
    {
        id: 9,
        year: '2016',
    },
    {
        id: 10,
        year: '2015',
    }
]);

const genres = ref([
    {
        id: 1,
        path: '/detektiv',
        genre: 'Детектив',
    },
    {
        id: 2,
        path: '/comedy',
        genre: 'Комедия',
    },
    {
        id: 3,
        path: '/fantasy',
        genre: 'Фэнтези',
    },
    {
        id: 4,
        path: '/drama',
        genre: 'Драма',
    },
    {
        id: 5,
        path: '/triller',
        genre: 'Триллер',
    },
    {
        id: 6,
        path: '/melodrama',
        genre: 'Мелодрама',
    },
    {
        id: 7,
        path: '/boevik',
        genre: 'Боевик',
    },
    {
        id: 8,
        path: '/uzhasy',
        genre: 'Ужасы',
    },
    {
        id: 9,
        path: '/history',
        genre: 'Исторический',
    },
    {
        id: 10,
        path: '/sport',
        genre: 'Спорт',
    }
]);


</script>
<template>
    <header class="header pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="block">
                        <nav class="menu pt-5">
                            <ul class="menu__list">
                                <li class="me-5">
                                    <RouterLink to="/" class="menu__link">Главная</RouterLink>
                                </li>
                                <li class="me-5">
                                    <RouterLink to="/films" class="menu__link">Фильмы</RouterLink>
                                </li>
                                <li class="me-5">
                                    <RouterLink to="/series" class="menu__link">Сериалы</RouterLink>
                                </li>
                                <li class="me-5">
                                    <a href="" class="menu__link down">Жанры</a>
                                    <ul class="sub-menu__list">
                                        <li class="mb-4" v-for="genre in genres">
                                            <RouterLink :to="genre.path" class="sub-menu__link">{{ genre.genre }}
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="me-5">
                                    <a href="" class="menu__link down">Года</a>
                                    <ul class="sub-menu__list">
                                        <li class="mb-4" v-for="year in years">
                                            <RouterLink to="" class="sub-menu__link">{{ year.year }}</RouterLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="me-5">
                                    <RouterLink to="/top" class="menu__link">ТОП</RouterLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <!-- <div class="col">
                    <div class="white-box">
                        <RouterLink class="voi" to="/login/auth">Войти</RouterLink>
                        <RouterLink class="voi" to="/login/register">Регистрация</RouterLink>
                    </div>
                    <div class="white-box">
                        <p class="box-title"><span class="red-letter">Д</span>орамы:</p>
                        <div class="">
                            <li>
                                <RouterLink to="/films" class="box-link">Корейские</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/films" class="box-link">Китайские</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/films" class="box-link">Японские</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/films" class="box-link">Тайские</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/films" class="box-link">Тайваньские</RouterLink>
                            </li>
                        </div>
                    </div>
                </div> -->
            </div>
            <!-- <div class="col">
                    <div class="white-box">
                        <RouterLink class="voi" to="/login/auth">Войти</RouterLink>
                        <RouterLink class="voi" to="/login/register">Регистрация</RouterLink>
                    </div>
                    <div class="white-box">
                        <p class="box-title"><span class="red-letter">Д</span>орамы:</p>
                        <div class="">
                            <li>
                                <RouterLink to="/films" class="box-link">Корейские</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/films" class="box-link">Китайские</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/films" class="box-link">Японские</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/films" class="box-link">Тайские</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/films" class="box-link">Тайваньские</RouterLink>
                            </li>
                        </div>
                    </div>
                </div> -->
        </div>
    </header>
</template>