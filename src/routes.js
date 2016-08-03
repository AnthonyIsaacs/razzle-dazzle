module.exports = route => [
  route('/', require('./views/home')),
  route('/edit', require('./views/edit')),
  route('/presentation', require('./views/presentation'), [
    route('/:id', require('./views/presentation'))
  ])
]
