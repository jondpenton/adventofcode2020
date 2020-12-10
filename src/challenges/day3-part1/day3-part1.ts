import { readLines } from '../../utils/read-lines'

type Coordinate = {
  x: number
  y: number
}

type Position = Coordinate
type Velocity = Coordinate

async function day3Part1() {
  const lines = await readLines('day3-part1')
  const slope: Velocity = {
    x: 3,
    y: 1,
  }
  const position: Position = {
    x: 0,
    y: 0,
  }
  let collisions: number = 0

  while (position.y < lines.length) {
    position.x += slope.x
    position.y += slope.y
    const square: string | undefined =
      lines[position.y]?.[position.x % lines[0].length]

    if (square && square === '#') {
      collisions++
    }
  }

  console.log(collisions)
}

day3Part1()
