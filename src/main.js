import { createApp } from 'vue'


import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './assets/main.css'
import Unicon from 'vue-unicons'
import { uniShoppingCart, uniSearch } from 'vue-unicons/dist/icons'


const icons =[uniShoppingCart, uniSearch]
const vuetify = createVuetify({
    components,
    directives,
  })

Unicon.add(icons)

const app = createApp(App)

app.use(createPinia())
app.use(Unicon)
app.use(router)
app.use(vuetify)
app.mount('#app')
