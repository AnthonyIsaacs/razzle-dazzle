const html = require('choo/html')

module.exports = (currentSlide) => {

  return html`
  <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
    <a href="/presentation/${parseInt(currentSlide) - 1}" class="btn-floating green"><i class="material-icons">skip_previous</i></a>
    <a href="/edit" class="btn-floating blue"><i class="material-icons">mode_edit</i></a>
    <a href="/presentation/${parseInt(currentSlide) + 1}" class="btn-floating green"><i class="material-icons">skip_next</i></a>
  </div>
`
}
