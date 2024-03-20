const analyze = require('./analyzeArray')



test('anaylzeArray', () =>
{
    const array = [1, 8, 3, 4, 2, 6];
    const object = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    expect(analyze(array)).toStrictEqual(object)

})

test('anaylzeArray', () =>
{
    const array = [1, 10, 3, 4, 2, 6,9];
    const object = {
        average: 5,
        min: 1,
        max: 10,
        length: 7
    };
    expect(analyze(array)).toStrictEqual(object)

})
