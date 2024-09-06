import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Icon from '@zi-shu/components/icon'
const plugins = [Icon]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))
app.mount('#app')
