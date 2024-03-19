const calc = require('./calculator')

test('Addition',()=>{
    const value1 = 5;
    const value2 = 10;
    expect(calc.add(value1,value2)).toBe(value1+value2)
})


test('Addition',()=>{
    const value1 = [5,5,5,5];
    expect(calc.add(value1)).toBe(20)
})

test('Subtraction',()=>{
    const value1 = 5;
    const value2 = 10;
    expect(calc.sub(value1,value2)).toBe(value1-value2)
})


test('Subtraction',()=>{
    const value1 = [5,5,5,5];
    expect(calc.sub(value1)).toBe(-10)
})


test('Multiplication',()=>{
    const value1 = 5;
    const value2 = 10;
    expect(calc.mul(value1,value2)).toBe(value1*value2)
})


test('Multiplication',()=>{
    const value1 = [5,5,5,5];
    expect(calc.mul(value1)).toBe(625)
})
