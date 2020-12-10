import { readLines } from '../../utils/read-lines'

async function day2Part2() {
  const lines = await readLines('day2-part2')

  const validPasswordCount = lines.reduce((validCount, line) => {
    const parts = line.split(' ')
    const letterPositions = parts[0].split('-').map(Number)
    const letterToCount = parts[1][0]
    const password = parts[2]
    const positionsFound = letterPositions.reduce((count, position) => {
      if (password[position - 1] === letterToCount) {
        return count + 1
      }

      return count
    }, 0)

    if (positionsFound === 1) {
      return validCount + 1
    }

    return validCount
  }, 0)

  console.log(validPasswordCount)
}

day2Part2()
