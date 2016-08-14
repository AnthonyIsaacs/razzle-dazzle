const html = require('choo/html')
const slide = require('./slide')

module.exports = (state, send) => html`
  <div class="row">
    ${state.rd.slides.map((slideContent) => {
      return html`
        <div class="col s12 m12 l6 slide-grid">
          ${slide(slideContent)}
        </div>`
    })}
  </div>`
