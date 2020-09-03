module.exports = {
  transpileDependencies: ['vuetify'],
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: `@import "~@/scss/_include.scss";`,
      },
    },
  },

  devServer: {
    proxy: {
      '^/api': {
        target: process.env.SERVER ? process.env.SERVER : 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
};
