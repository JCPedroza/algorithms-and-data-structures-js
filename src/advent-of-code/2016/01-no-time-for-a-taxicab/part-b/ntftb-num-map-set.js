/**
 * Finds the block distance from the first repeated location. Uses maps
 * numbers to number set to remember locations.
 *
 * @param {string} instr
 * @returns {number}
 */
const blockDistance = (instr) => {
  let x = 0
  let y = 0
  let dir = 0 // 0: north, 1: east, 2: south, 3: west

  /** @type {Map<number, Set<number>>} */
  const pastLocs = new Map()
  const splitIns = instr ? instr.split(', ') : []

  for (const ins of splitIns) {
    const turn = ins[0]
    const dist = parseInt(ins.slice(1))
    let prevX = x
    let prevY = y

    // Update direction based on turn.
    if (turn === 'L') dir = (dir + 3) % 4
    else dir = (dir + 1) % 4

    // Update distance based on direction.
    if (dir === 0) y += dist
    else if (dir === 1) x += dist
    else if (dir === 2) y -= dist
    else x -= dist

    // Remember all visited locations on the x axis.
    while (prevX !== x) {
      if (!pastLocs.has(prevX)) pastLocs.set(prevX, new Set([y]))
      else if (!pastLocs.get(prevX)?.has(y)) pastLocs.get(prevX)?.add(y)
      else return Math.abs(prevX) + Math.abs(y)

      if (prevX < x) prevX++
      else prevX--
    }

    // Remember all visited locations on the y axis.
    while (prevY !== y) {
      if (!pastLocs.has(x)) pastLocs.set(x, new Set([prevY]))
      else if (!pastLocs.get(x)?.has(prevY)) pastLocs.get(x)?.add(prevY)
      else return Math.abs(x) + Math.abs(prevY)

      if (prevY < y) prevY++
      else prevY--
    }
  }

  throw new Error('No location was visited more than once')
}

module.exports = {
  fun: blockDistance,
  id: 'number-map-set'
}
