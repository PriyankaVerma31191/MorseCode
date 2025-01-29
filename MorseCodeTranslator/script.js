

const morseCode = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.",
  H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.",
  O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-",
  U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
  1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....",
  6: "-....", 7: "--...", 8: "---..", 9: "----.", 0: "-----",
  " ": "/"
};

// Reverse lookup for Morse to text
const textToMorse = new Map(Object.entries(morseCode));
const morseToText = new Map(Object.entries(morseCode).map(([key, value]) => [value, key]));

function validateInput(input) {
  if (typeof input !== 'string' || input.trim() === "") {
      throw new Error("Input must be a non-empty string");
  }
}

export function translateToMorse(text) {
  validateInput(text);
  return text.toUpperCase()
      .split("")
      .map(char => textToMorse.get(char) || "")
      .join(" ");
}

export function translateToText(morse) {
  validateInput(morse);
  return morse.split(" ")
      .map(symbol => morseToText.get(symbol) || "")
      .join("");
}

export function autoTranslate(input) {
  validateInput(input);
  const trimmedInput = input.trim();

  // If input contains only dots, dashes, and spaces, assume Morse code input
  if (/^[.\- /]+$/.test(trimmedInput)) {
      return translateToText(trimmedInput);
  } else {
      return translateToMorse(trimmedInput);
  }
}

// Attach event listener
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("translateBtn").addEventListener("click", () => {
      const input = document.getElementById("message").value;
      try {
          const output = autoTranslate(input);
          document.getElementById("output").value = output;
      } catch (error) {
          document.getElementById("output").value = error.message;
      }
  });
});
