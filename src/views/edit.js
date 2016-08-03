const html = require('choo/html')
const menu = require('../components/menu')
const slideGrid = require('../components/slide-grid')

module.exports = (state, prev, send) => {
  let content = state.rd.mainFile.content ?
    state.rd.mainFile.content :
    state.rd.defaultFile.content

  return html`
    <main class="row">
      <div class="col s6">
        <textarea oninput=${(e) => send('rd:editorUpdate', e.target.value)} class="edit-area" autofocus="true">
          ${content}
        </textarea>
      </div>
      <div class="col s6">
        ${slideGrid(state, prev, send)}
      </div>
      ${menu()}
    </main>`
}
