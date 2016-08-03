const html = require('choo/html')

module.exports = (slide) => {
  let content = html`<div class="card"></div>`
  content.innerHTML = html`${slide}`
  return content
}
