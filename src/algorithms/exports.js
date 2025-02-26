const { fun: primesUpTo } =
  require('./math/primes-up-to/primes-up-to-sieve')

const { fun: primesOfLength } =
  require('./math/primes-of-length/primes-of-length-naive')

module.exports = {
  primesUpTo,
  primesOfLength
}
