const html = require('choo/html')
const header = require('../components/site-header')
const menu = require('../components/menu')
const slideGrid = require('../components/slide-grid')

module.exports = (state, prev, send) => {
  return html`
    <main class="row">

      <div class="col s6">
        <div class="card">
          <div class="card-image">
            <textarea oninput=${(e) => send('rd:editorUpdate', {content: e.target.value})} class="edit-area" autofocus="true">
          ${state.rd.content}
        </textarea>
          </div>
          <div class="card-action">
            <a href="#">${state.rd.name}</a>
          </div>
        </div>
      </div>


      <div class="col s6">
        ${slideGrid(state, send)}
      </div>
      ${menu('edit')}
      <button onclick=${() => send('rd:exportFile')}>Export</button>
    </main>`
}
