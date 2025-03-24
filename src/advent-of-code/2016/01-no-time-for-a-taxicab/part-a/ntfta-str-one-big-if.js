/**
 * Computes the block distance of a destination based on input instructions.
 * Uses strings to represent directions, and one big 'if' chain to change
 * distance and direction.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} instr Movement instructions.
 * @returns {number} Block distance from the destination.
 */
const blockDistance = (instr) => {
  const splitIns = instr ? instr.split(', ') : []
  let x = 0
  let y = 0
  let dir = 'N'

  for (const ins of splitIns) {
    const turn = ins[0]
    const dist = parseInt(ins.slice(1))

    if (dir === 'N') {
      if (turn === 'L') {
        x -= dist
        dir = 'W'
      } else {
        x += dist
        dir = 'E'
      }
    } else if (dir === 'S') {
      if (turn === 'L') {
        x += dist
        dir = 'E'
      } else {
        x -= dist
        dir = 'W'
      }
    } else if (dir === 'W') {
      if (turn === 'L') {
        y -= dist
        dir = 'S'
      } else {
        y += dist
        dir = 'N'
      }
    } else {
      if (turn === 'L') {
        y += dist
        dir = 'N'
      } else {
        y -= dist
        dir = 'S'
      }
    }
  }

  return Math.abs(x) + Math.abs(y)
}

module.exports = {
  fun: blockDistance,
  id: 'distance-str one-big-if'
}
