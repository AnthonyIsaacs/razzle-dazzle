const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')

module.exports = (state, prev, send) => html`
  <main>
    ${header()}
    <h1>edit</h1>
    ${state.rd.mainFile.name}
    ${state.rd.mainFile.content}
    ${footer()}
  </main>
`
