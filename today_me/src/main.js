import { createApp } from 'vue'
import App from './App.vue'
import { Quasar, SessionStorage, Notify } from 'quasar'
import quasarUserOptions from './quasar-user-options'
createApp(App).use(Quasar, {
    plugins: {
        SessionStorage,
        Notify,
        }
    }
    ,
    quasarUserOptions).mount('#app')
