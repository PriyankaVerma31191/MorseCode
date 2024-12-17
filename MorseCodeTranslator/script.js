const morseCode = {
    A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.",
    H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.",
    O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-",
    U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
    1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....",
    6: "-....", 7: "--...", 8: "---..", 9: "----.", 0: "-----",
    " ": "/"
  };
  const textToMorse = Object.fromEntries(
    Object.entries(morseCode).map(([key, value]) => [key, value])
);

const morseToText = Object.fromEntries(
    Object.entries(morseCode).map(([key, value]) => [value, key])
);

 function validateInput(input) {
  if (typeof input !== 'string') {
      throw new Error("Argument must be a string");
  }
}
   export function translateToMorse(text){
    return text
    .toUpperCase()
    .split("")
    .map(char =>textToMorse[char]|| "")
    .join("")
  }
   export function translateToText(morse){
    return morse
    .split("")
        .map(symbol=> morseToText[symbol]) || ""
        .join("");
    
  }
   export function autoTranslate(input){
    if(input.trim().includes(".")|| input.trim().includes("_")){
        return translateToText(input);

    }else{
        return translateToMorse(input);
    }
  }
  const button = document.querySelector("button")
button.addEventListener("click", () => {
    const input = document.getElementById("message").value;
    const output = autoTranslate(input);
     const translatedOutput = document.getElementById("output")
     translatedOutput.value = output;
});

