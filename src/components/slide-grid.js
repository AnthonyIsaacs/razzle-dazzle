const html = require('choo/html')
const marked = require('marked')

const processSlides = (content) => {
  return content ? content.split('---') : ''
}

module.exports = (state, prev, send) => {
  let slides = state.rd.mainFile.content ?
    slideGrid(processSlides(state.rd.mainFile.content)) :
    slideGrid(processSlides(state.rd.defaultFile.content))
  console.log(slides)

  let content = html`<div></div>`
  content.innerHTML = slides

  return html`
    <div class="row">
      ${content}
    </div>
  `
}

const slideGrid = (slides) => {
  let htmlSlides = slides.map((slide) => {
    return `
        <div class="col s12 m12 l6">
          <div class="card">${marked(slide)}</div>
        </div>
      `
  })
  return htmlSlides.join('')
}
