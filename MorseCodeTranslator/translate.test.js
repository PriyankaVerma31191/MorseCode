import {translateToMorse, translateToText, autoTranslate} from "./script.js";

describe("Morse Code Translation", () => {
    test("translateToMorse should translate text to Morse code", () => {
        expect(translateToMorse("Morse Code")).toBe("-- --- .-. ... . / -.-. --- -.. .");
        expect(translateToMorse("Testing 123")).toBe("- . ... - .. -. --. / .---- ..--- ...--");
    });

    test("translateToText should translate Morse code to text", () => {
        expect(translateToText("-- --- .-. ... . / -.-. --- -.. .")).toBe("MORSE CODE");
        expect(translateToText("- . ... - .. -. --. / .---- ..--- ...--")).toBe("TESTING 123");
    });

    test("autoTranslate should detect Morse or text input and translate correctly", () => {
        expect(autoTranslate("Morse Code")).toBe("-- --- .-. ... . / -.-. --- -.. .");
        expect(autoTranslate("-- --- .-. ... . / -.-. --- -.. .")).toBe("MORSE CODE");
        expect(autoTranslate("Testing 123")).toBe("- . ... - .. -. --. / .---- ..--- ...--");
        expect(autoTranslate(".---- ..--- ...--")).toBe("123");
    });

    test("autoTranslate should return empty string for invalid characters", () => {
        expect(autoTranslate("~!@#")).toBe("");
    });
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
