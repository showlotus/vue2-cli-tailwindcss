module.exports = {
  publicPath: './',
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
  },
}
