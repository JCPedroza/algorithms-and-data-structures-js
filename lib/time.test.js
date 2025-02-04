const assert = require('node:assert/strict')
const { describe, it, test } = require('node:test')
const { pow } = Math

const { timeRepo } = require('./time')

const mockFun1 = (a, b, c) => a * a * b * b * c * c
const mockFun2 = (a, b, c) => a ** 2 * b ** 2 * c ** 2
const mockFun3 = (a, b, c) => pow(a, 2) * pow(b, 2) * pow(c, 2)

const mockAlg1 = { fun: mockFun1, id: 'mock function 1' }
const mockAlg2 = { fun: mockFun2, id: 'mock function 2' }
const mockAlg3 = { fun: mockFun3, id: 'mock function 3' }

describe('Mock algorithms', () => {
  test('return the same value', () => {
    const a = 4
    const b = -5
    const c = 7

    const mock1 = mockAlg1.fun(a, b, c)
    const mock2 = mockAlg2.fun(a, b, c)
    const mock3 = mockAlg3.fun(a, b, c)

    assert(mock1 === mock2 && mock2 === mock3)
  })
})

describe('Timing function', () => {
  const algos = [mockAlg1, mockAlg2, mockAlg3]
  const args = [-3, 6, -9]

  it('sorts results in ascending order', () => {
    const runs = 20
    const { sortedTimes } = timeRepo(algos, args, runs, 'unit test order')

    for (let idx = 0; idx < sortedTimes.length - 1; idx++) {
      assert(sortedTimes[idx][1] <= sortedTimes[idx + 1][1])
    }
  })

  it('throws if "runs" is less than 1', () => {
    const runs = 0
    assert.throws(
      () => timeRepo(algos, args, runs, 'unit test throw'),
      RangeError
    )
  })
})
