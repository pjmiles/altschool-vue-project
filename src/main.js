import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const myGlobalVariables = {
    data(){
        return {
            base_url: "https://api.github.com/users/",
        }
    }
}
app.mixin(myGlobalVariables)
app.use(router).mount('#app')
