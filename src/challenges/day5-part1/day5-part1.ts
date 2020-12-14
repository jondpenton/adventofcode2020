import { readLines } from '../../utils/read-lines'

type Space = 'F' | 'B' | 'L' | 'R'

async function day5Part1() {
  const lines = await readLines('day5-part1')
  let highestId = -1

  for (const line of lines) {
    const rows = {
      low: 0,
      high: 128,
    }
    const columns = {
      low: 0,
      high: 8,
    }
    const seat: { row?: number; column?: number } = {}

    for (const character of line.split('') as Space[]) {
      if (!seat.row) {
        if (character === 'F') {
          const diff = rows.high - rows.low

          if (diff === 2) {
            seat.row = rows.low
          }

          rows.high = diff / 2 + rows.low
        } else if (character === 'B') {
          const diff = rows.high - rows.low

          if (diff === 2) {
            seat.row = rows.high - 1
          }

          rows.low = rows.high - diff / 2
        }
      } else if (!seat.column) {
        if (character === 'L') {
          const diff = columns.high - columns.low

          if (diff === 2) {
            seat.column = columns.low
          }

          columns.high = diff / 2 + columns.low
        } else if (character === 'R') {
          const diff = columns.high - columns.low

          if (diff === 2) {
            seat.column = columns.high - 1
          }

          columns.low = columns.high - diff / 2
        }
      }
    }

    if (seat.column === undefined || seat.row === undefined) {
      continue
    }

    const id = seat.row * 8 + seat.column

    if (id > highestId) {
      highestId = id
    }
  }

  console.log(highestId)
}

day5Part1()
