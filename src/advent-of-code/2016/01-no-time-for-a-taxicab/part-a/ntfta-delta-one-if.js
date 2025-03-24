/**
 * Computes the block distance of a destination based on input instructions.
 * Uses differences (deltas) to represent directions, and one 'if' chain to
 * change direction.
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
  let dx = 0
  let dy = 1

  for (const ins of splitIns) {
    const turn = ins[0]
    const dist = parseInt(ins.slice(1))

    // Update direction deltas based on turn.
    if (turn === 'L') { // 90° counterclockwise
      const temp = dx
      dx = -dy
      dy = temp
    } else { // 90° clockwise
      const temp = dx
      dx = dy
      dy = -temp
    }

    // Update distance based on direction deltas.
    x += dist * dx
    y += dist * dy
  }

  return Math.abs(x) + Math.abs(y)
}

module.exports = {
  fun: blockDistance,
  id: 'distance-delta one-if'
}
