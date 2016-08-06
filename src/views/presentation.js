const html = require('choo/html')
const menu = require('../components/menu')
const slideControl = require('../components/slide-controls')
const slide = require('../components/slide')

module.exports = (state, prev, send) => {
  let currentSlide = state.params.id || 0

  return html`
  <main>
    ${slide(state.rd.slides[currentSlide])}
    ${slideControl(currentSlide)}
  </main>
`}
