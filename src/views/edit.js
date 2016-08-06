const html = require('choo/html')
const menu = require('../components/menu')
const slideGrid = require('../components/slide-grid')

module.exports = (state, prev, send) => {
  return html`
    <main class="row">
      <div class="col s6">
        <textarea oninput=${(e) => send('rd:editorUpdate', {content: e.target.value})} class="edit-area" autofocus="true">
          ${state.rd.content}
        </textarea>
      </div>
      <div class="col s6">
        ${slideGrid(state, send)}
      </div>
      ${menu('edit')}
    </main>`
}
