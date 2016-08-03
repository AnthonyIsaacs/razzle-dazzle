const html = require('choo/html')

module.exports = (state, prev, send) => html`
  <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
    <a href="/edit" class="btn-floating btn-large blue"><i class="material-icons">mode_edit</i></a>
    <a href="/presentation/2" class="btn-floating btn-large blue"><i class="material-icons">play_arrow</i></a>
  </div>
`
