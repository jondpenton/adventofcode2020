import { readLines } from '../../utils/read-lines'

type Coordinate = {
  x: number
  y: number
}

type Position = Coordinate
type Velocity = Coordinate

async function day3Part2() {
  const lines = await readLines('day3-part2')
  const slopes: Velocity[] = [
    {
      x: 1,
      y: 1,
    },
    {
      x: 3,
      y: 1,
    },
    {
      x: 5,
      y: 1,
    },
    {
      x: 7,
      y: 1,
    },
    {
      x: 1,
      y: 2,
    },
  ]
  const collisions: number[] = slopes.map((slope) => {
    const position: Position = {
      x: 0,
      y: 0,
    }
    let collisionCount: number = 0

    while (position.y < lines.length) {
      position.x += slope.x
      position.y += slope.y
      const square: string | undefined =
        lines[position.y]?.[position.x % lines[0].length]

      if (square && square === '#') {
        collisionCount++
      }
    }

    return collisionCount
  })
  const multipliedCollisions = collisions
    .slice(1)
    .reduce((total, collision) => total * collision, collisions[0])

  console.log(multipliedCollisions)
}

day3Part2()
