
const debug = process.env.NODE_ENV !== 'production'
const name = 'park_jung_hyo_font_1'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
}