const reverse = require('./reverseString')

test('reverseString',()=>{
    const inputString = 'car';
    expect(reverse(inputString)).toMatch('rac')  
})

test('reverseString',()=>{
    const inputString = 'racecar'
    expect(reverse(inputString)).toMatch('racecar');
})