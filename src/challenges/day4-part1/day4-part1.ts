import { readLines } from '../../utils/read-lines'

type Passport = {
  birthYear?: string
  issueYear?: string
  expirationYear?: string
  height?: string
  hairColor?: string
  eyeColor?: string
  passportID?: string
  countryID?: string
}
type PassportFields = keyof Passport
type FieldAbbreviation =
  | 'byr'
  | 'iyr'
  | 'eyr'
  | 'hgt'
  | 'hcl'
  | 'ecl'
  | 'pid'
  | 'cid'

const OPTIONAL_FIELDS: PassportFields[] = ['countryID']
const PASSPORT_FIELDS: PassportFields[] = [
  'birthYear',
  'countryID',
  'expirationYear',
  'eyeColor',
  'hairColor',
  'height',
  'issueYear',
  'passportID',
]

async function day4Part1() {
  const lines = await readLines('day4-part1')
  let validCount = 0

  for (let i = 0; i < lines.length; i++) {
    const passportLines: string[] = []

    while (lines[i]) {
      passportLines.push(lines[i])
      i++
    }

    const passportParts: string[] = passportLines.flatMap((line) =>
      line.split(' ')
    )
    const passport: Passport = {}

    for (const part of passportParts) {
      const [key, value] = part.split(':') as [FieldAbbreviation, string]

      switch (key) {
        case 'byr': {
          passport.birthYear = value
          break
        }
        case 'cid': {
          passport.countryID = value
          break
        }
        case 'ecl': {
          passport.eyeColor = value
          break
        }
        case 'eyr': {
          passport.expirationYear = value
          break
        }
        case 'hcl': {
          passport.hairColor = value
          break
        }
        case 'hgt': {
          passport.height = value
          break
        }
        case 'iyr': {
          passport.issueYear = value
          break
        }
        case 'pid': {
          passport.passportID = value
          break
        }
      }
    }

    let passportValid = true
    for (const key of PASSPORT_FIELDS) {
      if (!passportValid) {
        break
      }

      if (OPTIONAL_FIELDS.includes(key)) {
        continue
      }

      if (!passport[key]) {
        passportValid = false
        break
      }
    }

    if (passportValid) {
      validCount++
    }
  }

  console.log(validCount)
}

day4Part1()
