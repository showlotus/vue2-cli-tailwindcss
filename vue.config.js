module.exports = {
  publicPath: './',
  outputDir: 'website',
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
  },
}
