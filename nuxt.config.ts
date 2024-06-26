// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt','@nuxt/ui'],
  css: [
    '~/assets/css/index.css'
  ],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: 'http://localhost:1337'
    }
  },
  
});
