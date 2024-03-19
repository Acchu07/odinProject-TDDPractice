const capitalize = require('./capitalize')

test('Capitalize First Letter', ()=>{
    const inputString = 'christoph';
    expect(capitalize(inputString)).toMatch('Christoph');
})

test('Capitalize First Letter', ()=>{
    const inputString2 = 'trishtoph';
    expect(capitalize(inputString2)).toMatch('Trishtoph')
})