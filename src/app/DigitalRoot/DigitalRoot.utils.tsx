export const reduceTotal = (total: number): number => {
  if (total < 10) {
    return total
  }
  let newTotal = 0
  total
    .toString()
    .split('')
    .forEach((char) => {
      newTotal += parseInt(char, 10)
    })
  return reduceTotal(newTotal)
}

export const getCharacterAsNumber = (char: string): number => {
  switch (char) {
    case '1':
    case 'a':
    case 'j':
    case 's':
      return 1
    case '2':
    case 'b':
    case 'k':
    case 't':
      return 2
    case '3':
    case 'c':
    case 'l':
    case 'u':
      return 3
    case '4':
    case 'd':
    case 'm':
    case 'v':
      return 4
    case '5':
    case 'e':
    case 'n':
    case 'w':
      return 5
    case '6':
    case 'f':
    case 'o':
    case 'x':
      return 6
    case '7':
    case 'g':
    case 'p':
    case 'y':
      return 7
    case '8':
    case 'h':
    case 'q':
    case 'z':
      return 8
    case '9':
    case 'i':
    case 'r':
      return 9
    default:
      return 0
  }
}

export const getDigitalRoot = (value: string) => {
  let total = 0
  value.split('').forEach((char) => {
    total += getCharacterAsNumber(char.toLowerCase())
  })
  return reduceTotal(total)
}
