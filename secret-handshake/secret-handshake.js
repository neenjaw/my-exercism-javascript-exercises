class Action {
   constructor(description, code) {
      this.description = description
      this.code = code
   }
}

const actions = [
  new Action('wink', 0b1),
  new Action('double blink', 0b10),
  new Action('close your eyes', 0b100),
  new Action('jump', 0b1000)
]

const commands = (code) => {
  const commands = actions
    .filter(checkCode(code))
    .map(getDescription)

  if (checkCode(code)(0b10000)) commands.reverse()

  return commands
}

const checkCode = (code) => {
  return (action) => (code & action.code) !== 0
}

const getDescription = (action) => {
  return action.description
}
