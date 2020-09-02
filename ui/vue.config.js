module.exports = {
  transpileDependencies: ['vuetify'],
  lintOnSave: false,

  devServer: {
    proxy: {
      '^/(api)/': {
        target: process.env.SERVER ? process.env.SERVER : 'localhost:3000',
        changeOrigin: true,
      },
    },
  },
};
