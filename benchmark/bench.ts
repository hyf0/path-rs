import path from 'path'

import b from 'benny'

import * as pathRs from '../index'

async function run() {
  const test_case = 'foo/..bar/./baz'
  await b.suite(
    'normalize()',
    b.add('Native', () => {
      pathRs.normalize(test_case)
    }),

    b.add('JavaScript', () => {
      path.normalize(test_case)
    }),

    b.cycle(),
    b.complete(),
  )

  await b.suite(
    'relaive()',
    b.add('Native', () => {
      pathRs.relative('foo/test', '123')
    }),

    b.add('JavaScript', () => {
      path.relative('foo/test', '123')
    }),

    b.cycle(),
    b.complete(),
  )
}

run().catch((e) => {
  console.error(e)
})
