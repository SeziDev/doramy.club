<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
    <section class="white">
        <div class="container">
            <h1 class="login-title">Doramy.club</h1>
            <div class=" login-block">
                <p class="login-sub">Зарегистрироваться на сайте</p>
                <p class="login-desc">Логин отображается при добавлении комментариев, поэтому не нужно вводить в качестве логина свой номер телефона!</p>
                <div class="mt-4">
                    <label for="basic-url" class="form-label label">Логин <span class="login-span">(минимум 3 символа англ. Без точек)</span></label>
                    <input type="text" class="form-control login" id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4">
                </div>
                <div class="mt-4">
                    <label for="basic-url" class="form-label label">E-mail <span class="login-span">(нужен для подтверждения)</span></label>
                    <input type="text" class="form-control login" id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4">
                </div>
                <div class="mt-4">
                    <label for="basic-url" class="form-label label">Пароль <span class="login-span">(минимум 6 символов)</span></label>
                    <input type="text" class="form-control login" id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4">
                </div>
                <div class="mt-4">
                    <label for="basic-url" class="form-label label">Подтвердить пароль</label>
                    <input type="text" class="form-control login" id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4">
                </div>
                <div class="mt-4">
                    <button class="btn login-btn">Регистрация</button>
                </div>
                <div class="mt-4">
                    <button class="log-btn" @click="router.push('/login/auth')">Войти</button>
                    <button class="log-btn ms-5">Забыли пароль?</button>
                </div>
            </div>
        </div>

    </section>
</template>