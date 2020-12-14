import { readLines } from '../../utils/read-lines'

type Passport = {
  birthYear?: number
  issueYear?: number
  expirationYear?: number
  height?: {
    amount: number
    measurement: 'cm' | 'in'
  }
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

async function day4Part2() {
  const lines = await readLines('day4-part2')
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
          passport.birthYear = Number(value)
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
          passport.expirationYear = Number(value)
          break
        }
        case 'hcl': {
          passport.hairColor = value
          break
        }
        case 'hgt': {
          let measurementIndex = value.indexOf('cm')

          if (measurementIndex === -1) {
            measurementIndex = value.indexOf('in')
          }

          if (measurementIndex === -1) {
            break
          }

          passport.height = {
            amount: Number(value.slice(0, measurementIndex)),
            measurement: value.slice(measurementIndex) as 'cm' | 'in',
          }
          break
        }
        case 'iyr': {
          passport.issueYear = Number(value)
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
      if (OPTIONAL_FIELDS.includes(key)) {
        continue
      }

      if (!passport[key]) {
        passportValid = false
        break
      }
    }

    if (!passportValid) {
      continue
    }

    console.log(passport)

    if (
      !(passport.birthYear! >= 1920 && passport.birthYear! <= 2002) ||
      !(passport.issueYear! >= 2010 && passport.issueYear! <= 2020) ||
      !(passport.expirationYear! >= 2020 && passport.expirationYear! <= 2030) ||
      !(
        (passport.height!.measurement === 'cm' &&
          passport.height!.amount >= 150 &&
          passport.height!.amount <= 193) ||
        (passport.height!.measurement === 'in' &&
          passport.height!.amount >= 59 &&
          passport.height!.amount <= 76)
      ) ||
      !(
        passport.hairColor![0] === '#' &&
        passport
          .hairColor!.slice(1)
          .split('')
          .every((character) => /[0-9a-f]/.test(character))
      ) ||
      !['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(
        passport.eyeColor!
      ) ||
      !(
        passport.passportID!.length === 9 &&
        !Number.isNaN(Number(passport.passportID!))
      )
    ) {
      continue
    }

    validCount++
  }

  console.log(validCount)
}

day4Part2()
