import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppIcon from './components/ui/AppIcon.vue'
import './styles/main.css'

const app = createApp(App)
app.component('AppIcon', AppIcon)
app.use(router).mount('#app')
