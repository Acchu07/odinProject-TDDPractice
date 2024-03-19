class Calculator{
    add(value1,value2){
        if(Array.isArray(value1)){
            return value1.reduce((storedValue, currentValue)=> storedValue + currentValue)
        }
        return value1+value2;
    }

    sub(value1,value2){
        if(Array.isArray(value1)){
            return value1.reduce((storedValue, currentValue)=> storedValue - currentValue)
        }
        return value1-value2;
    }

    mul(value1,value2){
        if(Array.isArray(value1)){
            return value1.reduce((storedValue, currentValue)=> storedValue * currentValue)
        }
        return value1*value2;
    }
}


const calcy = new Calculator();

module.exports = calcy;