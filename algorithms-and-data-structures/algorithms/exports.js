const { algorithm: primesUpTo } =
  require('./collections/primes-up-to/primes-up-to-sieve')

const { algorithm: primesOfLength } =
  require('./collections/primes-of-length/primes-of-length-naive')

module.exports = {
  primesUpTo,
  primesOfLength
}
