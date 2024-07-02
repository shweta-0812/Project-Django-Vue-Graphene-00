import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router' // Vue Router
import vuetify from './plugins/vuetify' // Vuetify setup
import { useApollo } from './plugins/apollo'

// import { loadFonts } from './plugins/webfontloader' // Loading web fonts
// Optional: Load any plugins or setup tasks
// loadFonts()


// Create the Vue application instance
const app = createApp({
    setup() {
        useApollo()
    },
    render: () => h(App),
})

// Use plugins or setup tasks here (e.g., Vue Router, Vuetify)
app.use(router) // Use the router
app.use(vuetify)

// Mount the application to the #app element in public/index.html
app.mount('#app')