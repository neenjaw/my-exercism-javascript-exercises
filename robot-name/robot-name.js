function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function getRandomIntegerDigit() {
//   return getRandomIntInclusive(0, 9)
// }

// function getRandomLetter() {
//   const a = 65 // 'A'
//   const z = 90 // 'Z'

//   return String.fromCharCode(getRandomIntInclusive(a, z))
// }

// function getName() {
//   return [
//     getRandomLetter(),
//     getRandomLetter(),
//     getRandomIntegerDigit(),
//     getRandomIntegerDigit(),
//     getRandomIntegerDigit(),
//   ].join('')
// }

function range(start, end) {
  return (function*() {
    for (let index = start; index <= end; index++) {
      yield index;
    }
  })()
}

function alphaRange() {
  return range(65, 90)
}

function digitRange() {
  return range(0, 9)
}

function* generateNames() {
  for (let a of alphaRange()) {
    a = String.fromCharCode(a)
    for (let b of alphaRange()) {
      b = String.fromCharCode(b)
      for (const c of digitRange()) {
        for (const d of digitRange()) {
          for (const e of digitRange()) {
            // console.log({a,b,c,d,e})

            yield `${a}${b}${c}${d}${e}`
          }
        }
      }
    }
  }
}

const robotRegistry = new Set();

for (const name of generateNames()) {
  robotRegistry.add(name)
}

function getUniqueName() {
  const i = getRandomIntInclusive(0, robotRegistry.size-1)
  const name = [...robotRegistry.values()][i]
  robotRegistry.delete(name)
  return name
}

export class Robot {
  constructor() {
    this._name = getUniqueName()
  }

  get name() {
    return this._name
  }

  reset() {
    this._name = getUniqueName()
  }
}

Robot.releaseNames = () => { };
