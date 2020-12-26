import { readLines } from '../../utils/read-lines'

async function day6Part1() {
  const lines = await readLines('day6-part1')
  const counts = []

  for (let i = 0; i < lines.length; i++) {
    let text = ''

    while (lines[i]) {
      text += lines[i]
      i++
    }

    if (text === '') {
      continue
    }

    const chars = text.split('').filter((char, index, arr) => {
      if (char === '\n' || char === '\r') {
        return false
      }

      return index === arr.indexOf(char)
    })

    counts.push(chars.length)
  }

  const sum = counts.reduce((total, count) => total + count, 0)

  console.log(sum)
}

day6Part1()
