function capitalize(inputString){
    const restOfName = inputString.slice(1);
    return inputString.charAt(0).toUpperCase().concat('',restOfName);
}

module.exports = capitalize