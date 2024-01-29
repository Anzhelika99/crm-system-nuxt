export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
      '@nuxt/image',
      '@nuxtjs/tailwindcss',
      'shadcn-nuxt'
  ],
    shadcn: {
        prefix: 'Ui',
        componentDir: './components/ui'
    }
})
