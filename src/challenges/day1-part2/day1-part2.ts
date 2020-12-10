import { readLines } from '../../utils/read-lines'

async function day1Part2() {
  const lines = await readLines('day1-part2')
  const nums: number[] = []

  for (let i = 0; i < lines.length; i++) {
    const num1 = Number(lines[i])

    for (let j = i + 1; j < lines.length; j++) {
      const num2 = Number(lines[j])

      for (let k = j + 1; k < lines.length; k++) {
        const num3 = Number(lines[k])

        if (num1 + num2 + num3 === 2020) {
          nums.push(num1, num2, num3)
          break
        }
      }
    }

    if (nums.length !== 0) {
      break
    }
  }

  const multipliedNums = nums.slice(1).reduce((acc, num) => acc * num, nums[0])

  console.log(multipliedNums)
}

day1Part2()
