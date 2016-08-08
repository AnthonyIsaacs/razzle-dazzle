const html = require('choo/html')

module.exports = (mode) => html`
  <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
    ${ (mode === 'edit') ?
      html`<a href="/presentation" class="btn-floating btn-large blue"><i class="material-icons">play_arrow</i></a>` :
      html`<a href="/edit" class="btn-floating btn-large blue"><i class="material-icons">mode_edit</i></a>`
    }
  </div>
`
