const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')

module.exports = (state, prev, send) => {
  let content = state.rd.mainFile.content ?
    state.rd.mainFile.content :
    state.rd.defaultFile.content

  return html`
  <main>
    ${header()}
    <h1>edit</h1>
    ${state.rd.mainFile.name}
    <textarea oninput=${(e) => send('rd:editorUpdate', e.target.value)} rows="40" cols="50" autofocus="true">
      ${content}
    </textarea>
    ${footer()}
  </main>
`
}
