const html = require('choo/html')

module.exports = (state, prev, send) => html`
  <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
    <a href="/edit" class="btn-floating yellow"><i class="material-icons">skip_previous</i></a>
    <a href="/presentation" class="btn-floating yellow"><i class="material-icons">skip_next</i></a>
  </div>
`
