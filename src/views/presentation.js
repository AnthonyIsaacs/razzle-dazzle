const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')
const marked = require('marked')

const processSlides = (content) => {
  return content ? content.split('---') : ''
}

module.exports = (state, prev, send) => {
  let slides = state.rd.defaultFile ?
    slideGrid(processSlides(state.rd.defaultFile.content), state.rd.slideFocus) :
    slideGrid(processSlides(state.rd.defaultFile.content), state.rd.slideFocus)

  let content = html`<div></div>`
  content.innerHTML = slides

  return html`
  <main>
    ${header()}
    <h1>Presentation</h1>
    ${content}
    ${footer()}
  </main>
`}

const slideGrid = (slides, index) => {
  let htmlSlides = slides.map((slide, i) => {
    if (index === i) {
      return `<div>${index} - ${i} - ${marked(slide)}</div>`
    } else {
      return `<div>${index} - ${i} - ${marked(slide)}</div>`
    }
  })
  return htmlSlides.join('')
}
