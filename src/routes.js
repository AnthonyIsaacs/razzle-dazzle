module.exports = route => [
  route('/', require('./views/home')),
  route('/edit', require('./views/edit')),
  route('/slides', require('./views/slides')),
  route('/presentation', require('./views/presentation'))
]
