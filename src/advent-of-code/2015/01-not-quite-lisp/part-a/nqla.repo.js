const nqlaForLoop = require('./nqla-for-loop')
const nqlaReduce = require('./nqla-reduce')
const nqlaRecursive = require('./nqla-recursive')
const nqlaTail = require('./nqla-recursive-tail')

const solutions = [
  nqlaForLoop,
  nqlaReduce,
  nqlaRecursive,
  nqlaTail
]

module.exports = solutions
