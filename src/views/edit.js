const html = require('choo/html')
const header = require('../components/site-header')
const menu = require('../components/menu')
const slideGrid = require('../components/slide-grid')

module.exports = (state, prev, send) => {
  return html`
    <main class="row">
      ${header()}
      <div class="col s6">
        <h4>${state.rd.name}</h4>
        <textarea oninput=${(e) => send('rd:editorUpdate', {content: e.target.value})} class="edit-area" autofocus="true">
          ${state.rd.content}
        </textarea>
      </div>
      <div class="col s6">
        ${slideGrid(state, send)}
      </div>
      ${menu('edit')}
      <button onclick=${() => send('rd:exportFile')}>Export</button>
    </main>`
}
