import { readLines } from '../../utils/read-lines'

async function day1Part1() {
  const lines = await readLines('day1-part1')
  const nums = []

  for (let i = 0; i < lines.length; i++) {
    const num1 = Number(lines[i])

    for (let j = i + 1; j < lines.length; j++) {
      const num2 = Number(lines[j])

      if (num1 + num2 === 2020) {
        nums.push(num1, num2)
        break
      }
    }

    if (nums.length !== 0) {
      break
    }
  }

  const multipliedNums = nums.slice(1).reduce((acc, num) => acc * num, nums[0])

  console.log(multipliedNums)
}

day1Part1()
