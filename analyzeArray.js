const array = [1, 10, 3, 4, 2, 6, 9];

function analyzeArray(array)
{
    const sortedArray = array.sort((a, b) => a - b);
    const min = sortedArray[0];
    const max = sortedArray[sortedArray.length - 1];
    const length = sortedArray.length;
    const average = (sortedArray.reduce((storedValue, currentValue) => storedValue + currentValue)) / length;
    return {
        average,
        min,
        max,
        length
    };

}


module.exports = analyzeArray