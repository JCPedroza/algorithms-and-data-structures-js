/**
 * Finds the block distance from the first repeated location. Uses one string
 * set to remember locations.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} instr
 * @returns {number} Block distance to the first repeated location.
 */
const blockDistance = (instr) => {
  let x = 0
  let y = 0
  let dir = 0 // 0: north, 1: east, 2: south, 3: west

  const splitIns = instr ? instr.split(', ') : []
  const pastLocs = new Set(`${x},${y}`)

  for (const ins of splitIns) {
    const turn = ins[0]
    const dist = parseInt(ins.slice(1))

    // Update direction based on turn.
    if (turn === 'L') dir = (dir + 3) % 4
    else dir = (dir + 1) % 4

    for (let block = 0; block < dist; block++) {
      if (dir === 0) y++
      else if (dir === 1) x++
      else if (dir === 2) y--
      else x--

      const strLoc = `${x},${y}`
      if (pastLocs.has(strLoc)) return Math.abs(x) + Math.abs(y)

      pastLocs.add(strLoc)
    }
  }

  throw new Error('No location was visited more than once')
}

module.exports = {
  fun: blockDistance,
  id: 'str-set'
}
