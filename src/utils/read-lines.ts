import { promises as fs } from 'fs'
import path from 'path'

async function readLines(folder: string): Promise<string[]> {
  const text = await fs.readFile(
    path.join(__dirname, '../challenges', folder, 'input.txt'),
    { encoding: 'utf8' }
  )
  const lines = text.split(/[\n\r]/g)

  return lines
}

export { readLines }
