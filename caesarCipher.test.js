const cipher = require('./caesarCipher')

test('caesarCipher',()=>{
    const value = 'z';
    const shift = 3;
    expect(cipher(value,shift)).toBe('C')
})


test('caesarCipher',()=>{
    const value = 'abc';
    const shift = 3;
    expect(cipher(value,shift)).toBe('DEF')
})

test('caesarCipher',()=>{
    const value = 'abc. xyz';
    const shift = 5;
    expect(cipher(value,shift)).toBe('FGH. CDE')
})

test('caesarCipher',()=>{
    const value = `This 1230 is just to test caesar's cipher if it is working as !@#$% intended or not`;
    const shift = 7;
    expect(cipher(value,shift)).toBe(`AOPZ 1230 PZ QBZA AV ALZA JHLZHY'Z JPWOLY PM PA PZ DVYRPUN HZ !@#$% PUALUKLK VY UVA`)
})

test('caesarCipher',()=>{
    const value = `The quick brown fox jumps over the lazy dog.`;
    const shift = 13;
    expect(cipher(value,shift)).toBe(`GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.`)
})