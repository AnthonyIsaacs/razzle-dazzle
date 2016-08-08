const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')
const menu = require('../components/menu')
const { stopBehavior, dragHandler, dragOutHandler, dropHandler } = require('../libs/dragonDrop')
const { existInLocalStorage } = require('../libs/localStorage')

module.exports = (state, prev, send) => html`
  <main onload=${() => send('rd:init')} class="full-height">
    <section class="page-container" ondragover=${dragHandler} ondragleave=${dragOutHandler} ondrop=${(e) => dropHandler(e, send)}>
      <h1>Razzle Dazzle</h1>
      ${ existInLocalStorage('razzleDazzle') ?
            html`<h1>You have something</h1>` :
            html`<h2>
                    Welcome! We have three options: Drag an existing project onto the page,
                    <a href="/edit">create a new project</a>, or <a href="/tour">take a tour</a>.
                  </h2>`
      }
      ${menu(state)}
    </section>
  </main>
`
