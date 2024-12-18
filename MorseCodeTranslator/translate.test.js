import { translateToMorse, translateToText, autoTranslate } from "./script.js";

describe("Morse Code Translation", () => {

    // Test for translating text to Morse code
    test("translateToMorse should translate text to Morse code", () => {
        expect(translateToMorse("CAT")).toBe("-.-. .- -");
        expect(translateToMorse("PEAR")).toBe(".--. . .- .-.");
        expect(translateToMorse("123")).toBe(".---- ..--- ...--");
        expect(translateToMorse("A B C")).toBe(".- / -... / -.-.");
    });

    // Test for translating Morse code to text
    test("translateToText should translate Morse code to text", () => {
        expect(translateToText("-.-. .- -")).toBe("CAT");
        expect(translateToText(".--. . .- .-.")).toBe("PEAR");
        expect(translateToText(".---- ..--- ...--")).toBe("123");
        expect(translateToText(".- / -... / -.-.")).toBe("A B C");
    });

  
    // Test for invalid characters
    test("autoTranslate should return empty string for invalid characters", () => {
        expect(autoTranslate("~!@#")).toBe(""); 
        expect(autoTranslate("HELLO @123")).toBe(""); 
        expect(autoTranslate("HELLO *&^")).toBe(""); 
    });

    // Test for invalid input types
    test("translateToMorse should throw error if argument is not a string", () => {
        expect(() => translateToMorse(123)).toThrow("Argument must be a string");
        expect(() => translateToMorse(null)).toThrow("Argument must be a string");
        expect(() => translateToMorse(undefined)).toThrow("Argument must be a string");
        expect(() => translateToMorse([])).toThrow("Argument must be a string");
        expect(() => translateToMorse({})).toThrow("Argument must be a string");
    });

    test("translateToText should throw error if argument is not a string", () => {
        expect(() => translateToText(123)).toThrow("Argument must be a string");
        expect(() => translateToText(null)).toThrow("Argument must be a string");
        expect(() => translateToText(undefined)).toThrow("Argument must be a string");
        expect(() => translateToText([])).toThrow("Argument must be a string");
        expect(() => translateToText({})).toThrow("Argument must be a string");
    });

    test("autoTranslate should throw error if argument is not a string", () => {
        expect(() => autoTranslate(123)).toThrow("Argument must be a string");
        expect(() => autoTranslate(null)).toThrow("Argument must be a string");
        expect(() => autoTranslate(undefined)).toThrow("Argument must be a string");
        expect(() => autoTranslate([])).toThrow("Argument must be a string");
        expect(() => autoTranslate({})).toThrow("Argument must be a string");
    });
});