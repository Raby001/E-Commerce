import { createApp, h, provide } from 'vue'

import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apollo/client'
import { createPinia } from 'pinia'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(createPinia())
app.mount('#app')