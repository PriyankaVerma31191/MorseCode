import { translateToMorse, translateToText, autoTranslate } from "./script.js";

describe("Morse Code Translator", () => {
    test("translateToMorse should translate text to Morse code", () => {
        expect(translateToMorse("CAT")).toBe("-.-. .- -");
        expect(translateToMorse("PEAR")).toBe(".--. . .- .-.");
        expect(translateToMorse("A B C")).toBe(".- / -... / -.-.");
    });

    test("translateToText should translate Morse code to text", () => {
        expect(translateToText("-.-. .- -")).toBe("CAT");
        expect(translateToText(".--. . .- .-.")).toBe("PEAR");
        expect(translateToText(".- / -... / -.-.")).toBe("A B C");
    });

    test("autoTranslate should handle text input correctly", () => {
        expect(autoTranslate("HELLO")).toBe(".... . .-.. .-.. ---");
        expect(autoTranslate("MORSE CODE")).toBe("-- --- .-. ... . / -.-. --- -.. .");
    });

    test("autoTranslate should handle Morse input correctly", () => {
        expect(autoTranslate(".... . .-.. .-.. ---")).toBe("HELLO");
        expect(autoTranslate("-- --- .-. ... . / -.-. --- -.. .")).toBe("MORSE CODE");
    });

    test("autoTranslate should return error for invalid input", () => {
        expect(() => autoTranslate(123)).toThrow("Input must be a non-empty string");
        expect(() => autoTranslate("")).toThrow("Input must be a non-empty string");
    });
});
