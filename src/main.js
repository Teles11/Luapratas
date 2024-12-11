import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importar o roteador
import './assets/main.css' // Importando o CSS com o Tailwind


const app = createApp(App);

// Usar o roteador na aplicação
app.use(router);

app.mount('#app');
