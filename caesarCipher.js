function caesarCipher(value, shift)
{
    value = value.toUpperCase();
    let arrayCaesarShift = arrayWithCharCodes(value)
    arrayCaesarShift = arrayWithShiftedCodes(arrayCaesarShift,shift);
    return arrayCaesarShift.join('')
}

function arrayWithCharCodes(value){
    const arrayCaesarShift = [];    
    let i = 0;
    while (i < value.length)
    {
        let charCode = value.charCodeAt(i);
        if ((charCode > 64 && charCode < 91))
        {
            arrayCaesarShift.push(charCode)
        }
        else{
            arrayCaesarShift.push(value.charAt(i));
        }
        i++;
    }
    return arrayCaesarShift;
}

function arrayWithShiftedCodes(arrayCaesarShift,shift){
    let i = 0;
    while(i < arrayCaesarShift.length){
        if(typeof arrayCaesarShift[i] === 'number'){
            let newValue = arrayCaesarShift[i] + shift;
            if(newValue > 90){
                const startValue = 64;
                const difference = newValue - 90;
                const newCharCode = startValue + difference;
                arrayCaesarShift[i] = String.fromCodePoint(newCharCode)
            }
            else{
                arrayCaesarShift[i] = String.fromCodePoint(newValue);
            }
            i++;
        }
        else{
            i++;
            continue;
        }
    }
    return arrayCaesarShift;
}


module.exports = caesarCipher;