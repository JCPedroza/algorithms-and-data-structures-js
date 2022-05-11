const { algorithm: primesUpTo } =
  require('./math/primes-up-to/primes-up-to-sieve')

const { algorithm: primesOfLength } =
  require('./math/primes-of-length/primes-of-length-naive')

module.exports = {
  primesUpTo,
  primesOfLength
}
