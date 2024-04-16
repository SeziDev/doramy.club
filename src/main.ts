import { createApp } from 'vue'
import App from './App.vue'
import '../public/fonts/roboto/Roboto-Black.ttf'
import '../public/fonts/roboto/Roboto-BlackItalic.ttf'
import '../public/fonts/roboto/Roboto-Bold.ttf'
import '../public/fonts/roboto/Roboto-BoldItalic.ttf'
import '../public/fonts/roboto/Roboto-Italic.ttf'
import '../public/fonts/roboto/Roboto-Light.ttf'
import '../public/fonts/roboto/Roboto-LightItalic.ttf'
import '../public/fonts/roboto/Roboto-Medium.ttf'
import '../public/fonts/roboto/Roboto-MediumItalic.ttf'
import '../public/fonts/roboto/Roboto-Regular.ttf'
import '../public/fonts/roboto/Roboto-Thin.ttf'
import '../public/fonts/roboto/Roboto-ThinItalic.ttf'

import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/styles/main.css'
import router from './router/router.ts'


createApp(App).use(router).mount('#app')