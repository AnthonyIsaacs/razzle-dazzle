const html = require('choo/html')

module.exports = (state, prev, send) => html`
  <header class="site-header card color-white">
    <div class="container">
      <a href="/" class="brand">
        <div class="logo">🚋</div>
        <h1>razzle-dazzle</h1>
      </a>
      <nav class="site-navigation">
        <a href="/">Home</a>
        <a href="/new">New</a>
        <a href="/edit">Edit</a>
        <a href="/slides">Slides</a>
        <a href="/presentation">Presentation</a>
      </nav>
    </div>
  </header>
`
