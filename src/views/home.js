const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')
const menu = require('../components/menu')
const { stopBehavior, dragHandler, dragOutHandler, dropHandler } = require('../libs/dragonDrop')
const { existInLocalStorage } = require('../libs/localStorage')

module.exports = (state, prev, send) => html`
  <main onload=${() => send('rd:init')} class="full-height">
    <section class="page-container" ondragover=${dragHandler} ondragleave=${dragOutHandler} ondrop=${(e) => dropHandler(e, send)}>
      <h2> Welcome! Drag an existing project onto the page</h2>
      <div class="row">

        <div class="col s2 m4 l4">
          <div class="card">
            <div class="card-image">
              <img src="http://materializecss.com/images/sample-1.jpg">
              <span class="card-title">Look Around</span>
            </div>
            <div class="card-action">
              <a href="/tour">Take a tour</a>
            </div>
          </div>
        </div>

        <div class="col s2 m4 l4">
          <div class="card">
            <div class="card-image">
              <img src="http://materializecss.com/images/office.jpg">
              <span class="card-title">New Deck</span>
            </div>
            <div class="card-action">
              <a href="/edit">Create New</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
`
