const html = require('choo/html')
const menu = require('../components/menu')
const slideControl = require('../components/slide-controls')
const slide = require('../components/slide')

module.exports = (state, prev, send) => html`<main>${slide(state.rd.slides[state.params.id])}</main>`
