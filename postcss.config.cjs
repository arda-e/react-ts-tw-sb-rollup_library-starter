/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested')
  ],
  map: true, // Enable sourc
}

module.exports = config