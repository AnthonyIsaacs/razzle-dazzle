const sf = require('sheetify')
const choo = require('choo')

sf('normalize.css', { global: true })
sf('./styles/material-icons.css', { global: true })
sf('../node_modules/materialize-css/dist/css/materialize.css', { global: true })
sf('./styles/main.css', { global: true })

const app = choo()
if (process.env.NODE_ENV !== 'production') {
  const log = require('choo-log')
  app.use(log())
}

app.model(require('./models/rd'))
app.router(require('./routes'))

const tree = app.start()

document.body.appendChild(tree)
