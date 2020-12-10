import { readLines } from '../../utils/read-lines'

async function day2Part1() {
  const lines = await readLines('day2-part1')

  const validPasswordCount = lines.reduce((validCount, line) => {
    const parts = line.split(' ')
    const [lowCount, highCount] = parts[0].split('-').map(Number)
    const letterToCount = parts[1][0]
    const password = parts[2]
    const count = password.split('').reduce((count, letter) => {
      if (letter === letterToCount) {
        return count + 1
      }

      return count
    }, 0)

    if (count >= lowCount && count <= highCount) {
      return validCount + 1
    }

    return validCount
  }, 0)

  console.log(validPasswordCount)
}

day2Part1()
