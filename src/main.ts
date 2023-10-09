import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const dark_nord: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#2E3440',
    surface: '#3B4252',
    primary: '#81a1c1',
    accent: '#bf616a',
    secondary: '#88c0d0',
    error: '#bf616a',
    info: '#5e81ac',
    success: '#a3be8c',
    warning: '#ebcb8b',
  },
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark_nord',
    themes: {
      dark_nord,
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
