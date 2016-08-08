const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')
const menu = require('../components/menu')
const { stopBehavior, dragHandler, dragOutHandler, dropHandler } = require('../libs/dragonDrop')
const { existInLocalStorage } = require('../libs/localStorage')

module.exports = (state, prev, send) => html`
  <main onload=${() => send('rd:tour')} class="full-height">
    <h1>Start a tour</h1>
  </main>
`
