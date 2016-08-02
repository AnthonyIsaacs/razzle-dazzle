const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')

module.exports = (state, prev, send) => html`
  <main>
    ${header()}
    <section class="container color-white well center-text">
      <h1>Drag Area</h1>
      <div ondragover=${dragHandler} ondragleave=${dragOutHandler} ondrop=${(e) => dropHandler(e, send)}>
        Drag Here!
      </div>
    </section>
    ${footer()}
  </main>
`

function stopBehavior(e) {
  event.stopPropagation()
  event.preventDefault()
  return true;
}

function dragHandler(e) {
  stopBehavior(e)
  console.log('dragging over');
}

function dragOutHandler(e) {
  stopBehavior(e)
  console.log('dragging off');
}

function dropHandler(e, send) {
  stopBehavior(e)
  let files = e.target.files || e.dataTransfer.files
  send('rd:filesDrop', files)
}
