const simplePigLatinTest = require("../simplePigLatin");

test('Pig latin is cool should return igPay atinlay siay oolcay', () => { 
    expect(simplePigLatinTest.pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
})

test('Hello world ! should return elloHay orldway !', () => {
    expect(simplePigLatinTest.pigIt("Hello world !")).toBe("elloHay orldway !");
})

