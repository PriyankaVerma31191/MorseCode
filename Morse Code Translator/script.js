const morseCode = {
    A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.",
    H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.",
    O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-",
    U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
    1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....",
    6: "-....", 7: "--...", 8: "---..", 9: "----.", 0: "-----",
    " ": "/"
  };
  const textToMorse = morseCode;
  const morseToText = morseCode.map(([Key, value]) => [value,key])
   
  function translateToMorse(text){
    return text
    .toUpperCase()
    .split("")
    .map(char =>textToMorse[char]|| "")
    .join("")
  }
  function translateToText(morse){
    return morse
    .split("")
        .map(symbol=> morseToText[symbol]) || ""
        .join("");
    
  }
  function autoTranslate(input){
    if(input.trim().includes(".")|| input.trim().includes("_")){
        return translateToText(input);

    }else{
        return translateToMorse(input);
    }
  }
  const button = document.querySelector(button)
button.addEventListener("click", () => {
    const input = document.getElementById("message").value;
    const output = autoTranslate(input);
     const translatedOutput = document.getElementById("output")
     translatedOutput.value = output;
})
