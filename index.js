<<<<<<< HEAD
function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const NamesAndDigits = []

  for (let i = 0, l = line.length; i < l; i++) {
    NamesAndDigits.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${NamesAndDigits.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};
=======
function CurrentLine(line) {
  if (!line.length) {
    return "The line is currently empty, time to relax!"
  }
}

  const NamesandDigits = []

  for (let i = 0, l = line.length; i < l; i++) {
    NamesandDigits.push(`${i + 1}. ${line[i]}`)
    return `The line is currently: ${numbersAndNames.join(', ')}`
  }
  
function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served, time to relax!"
  }

  return `Currently serving ${line.shift()}.`
}
>>>>>>> 85e45764d9bbac97012ffe4e110d46662d88f633

function takeANumber(line, name) {
  line.push(name)

<<<<<<< HEAD
  return `Welcome, ${name}. You are number ${line.length} in line.`
};
=======
  return `Welcome, ${name}. You are number ${line.length} in line, take a breather before we serve you.`
}
>>>>>>> 85e45764d9bbac97012ffe4e110d46662d88f633
