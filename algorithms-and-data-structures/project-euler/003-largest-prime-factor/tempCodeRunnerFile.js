const isPrime = (num) => {
  if (num < 3) {
    return num === 2
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false
  }

  for (let divisor = 5; divisor < num; divisor += 2) {
    if (num % divisor === 0) {
      return false
    }
  }

  return true
}

const largestPrimeFactor = (num) => {
  let largest

  for (let divisor = 2; divisor <= num; divisor++) {
    if (num % divisor === 0 && isPrime(divisor)) {
      largest = divisor
    }
  }

  return largest
}

console.log(largestPrimeFactor(600851475143))
