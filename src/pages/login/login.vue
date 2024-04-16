<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>



<template>
    <section class="white">
        <div class="container">
            <h1 class="login-title">Doramy.club</h1>
            <div class=" login-block">
                <div class="mt-4">
                    <label for="basic-url" class="form-label label">Логин или Email</label>
                    <input type="text" class="form-control login" id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4">
                </div>
                <div class="mt-4">
                    <label for="basic-url" class="form-label label">Пароль</label>
                    <input type="text" class="form-control login" id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4">
                </div>
                <div class="form-check d-flex align-items-center mt-4" >
                    <input class="form-check-input me-2" type="checkbox" style="cursor: pointer;" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault" style="color: rgb(85, 85, 85); cursor: pointer; font-size: 15px;">
                        Запомнить меня
                    </label>
                </div>
                <div class="mt-4">
                    <button class="btn login-btn">Войти</button>
                </div>
                <div class="mt-4">
                    <button class="log-btn" @click="router.push('/login/register')">Регистрация</button>
                    <button class="log-btn ms-5">Забыли пароль?</button>
                </div>
            </div>
        </div>
    </section>
</template>