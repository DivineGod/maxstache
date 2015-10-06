const test = require('tape')
const maxstache = require('./')

test('should assert input types', function (t) {
  t.plan(2)
  t.throws(maxstache.bind(null), /string/)
  t.throws(maxstache.bind(null, 'foobar', 'no object'), /object/)
})

test('should replace strings', function (t) {
  t.plan(1)

  const str = 'My name is {{name}}'
  const ctx = { name: 'jjjohnny' }
  const res = maxstache(str, ctx)

  t.equal(res, 'My name is jjjohnny')
})

test('should work even if the string starts with a var', function (t) {
  t.plan(1)

  const str = '{{name}}, my name is'
  const ctx = { name: 'Yoda' }
  const res = maxstache(str, ctx)

  t.equal(res, 'Yoda, my name is')
})

test('should work even if two vars are next to each other', function (t) {
  t.plan(1)

  const str = '{{first}}{{second}}, my name is'
  const ctx = { first: 'Foo', second: 'bar' }
  const res = maxstache(str, ctx)

  t.equal(res, 'Foobar, my name is')
})

test('should work if there is whitespace inside replacement', function (t) {
  t.plan(1)

  const str = '{{ first }}'
  const ctx = { first: 'rofl' }
  const res = maxstache(str, ctx)

  t.equal(res, 'rofl')
})
