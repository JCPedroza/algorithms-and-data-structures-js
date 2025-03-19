const nqlaForLoop = require('./nqla-loop-for')
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
