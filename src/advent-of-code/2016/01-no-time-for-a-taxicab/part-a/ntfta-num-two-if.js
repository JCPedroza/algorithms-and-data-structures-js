/**
 * Computes the block distance of a destination based on input instructions.
 * Uses numbers to represent directions, modulo operator to change direction,
 * and two small 'if' chans to change direction and distance separately.
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
  let dir = 0 // 0: north, 1: east, 2: south, 3: west

  for (const ins of splitIns) {
    const turn = ins[0]
    const dist = parseInt(ins.slice(1))

    // Update direction based on turn.
    if (turn === 'L') dir = (dir + 3) % 4
    else dir = (dir + 1) % 4

    // Update distance based on direction.
    if (dir === 0) y += dist
    else if (dir === 1) x += dist
    else if (dir === 2) y -= dist
    else x -= dist
  }

  return Math.abs(x) + Math.abs(y)
}

module.exports = {
  fun: blockDistance,
  id: 'distance-num two-if'
}
