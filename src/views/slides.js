const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')
const marked = require('marked')

const processSlides = (content) => {
  return content ? content.split('---') : ''
}

module.exports = (state, prev, send) => {
  let slides = state.rd.defaultFile ?
               slideGrid(processSlides(state.rd.defaultFile.content)) :
               slideGrid(processSlides(state.rd.defaultFile.content))

  let content = html`<div></div>`
  content.innerHTML = slides

  return html`
  <main>
    ${header()}
    <h1>slides</h1>
    ${ content }
    ${footer()}
  </main>
`}

const slideGrid = (slides) => {
  let htmlSlides = slides.map((slide) => {
    return `<div class="col-md-3">${marked(slide)}</div>`
  })
  return htmlSlides.join('')
}
