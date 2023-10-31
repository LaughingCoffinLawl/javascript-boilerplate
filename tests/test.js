export function capitalize(string) {
  let newString = string.toLowerCase();
  newString = newString[0].toUpperCase() + newString.slice(1);

  return newString;
}

export function reverseString(string) {
  let newString = string.split("").reverse().join("");
  return newString;
}

export function calculator(a, b) {
  return {
    add(a, b) {
      return a + b;
    },
    substract(a, b) {
      return a - b;
    },
    divide(a, b) {
      if (b === 0) {
        return "impossible";
      } else {
        return a / b;
      }
    },
    multiply(a, b) {
      return a * b;
    },
  };
}

export function cypher(string, shift) {
  let newString = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const symbols = " -_&?!@#/,.!?!@#$%^&*()";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (alphabet.includes(char)) {
      const isUpper = char === char.toUpperCase();
      const sourceAlphabet = isUpper
        ? alphabet.slice(0, 26)
        : alphabet.slice(26);
      const index =
        (sourceAlphabet.indexOf(char) + shift) % sourceAlphabet.length;
      const shiftedChar = sourceAlphabet[index];
      newString += isUpper ? shiftedChar : shiftedChar.toLowerCase();
    } else if (symbols.includes(char)) {
      const index = (symbols.indexOf(char) + shift) % symbols.length;
      newString += symbols[index];
    } else {
      newString += char;
    }
  }
  return newString;
}

export function analyzeArray(array) {
  let avg = 0;
  return {
    min: Math.min(...array),
    max: Math.max(...array),
    avg: array.reduce((sum, element) => sum + element, 0) / array.length,
    length: array.length,
  };
}
