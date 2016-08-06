const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')
const menu = require('../components/menu')

module.exports = (state, prev, send) => html`
  <main onload=${() => send('rd:init')} class="full-height">
    <section class="page-container" ondragover=${dragHandler} ondragleave=${dragOutHandler} ondrop=${(e) => dropHandler(e, send)}>
      <h1>Razzle Dazzle</h1>
      <h2>
        Welcome! Just drag a markdown file onto the page &
        I will generate your slides. If you want to make them
        razzle dazzle drag some images in.
      </h2>


      ${menu(state)}
    </section>
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
  send('rd:handleDroppedFiles', files)
}
