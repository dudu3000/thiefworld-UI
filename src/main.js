import { createApp } from 'vue'
import App from './App.vue'

let application = createApp(App)
application.mount('#app')
application.config.errorHandler = (err) => {
    console.log(err)
}