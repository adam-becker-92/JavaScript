const arrayLength = 20

const startingArray = new Array(arrayLength).fill().map((_, i) => i + 1);

const twoFive = (value) => {
    const isMultipleOfTwo = (value % 2) === 0;
    const isMultipleOfFive = (value % 5) === 0;
    if(!(isMultipleOfTwo || isMultipleOfFive)) {
        console.log(value);
        return;
    }
    if(isMultipleOfTwo && isMultipleOfFive){
        console.log(`${value}: twofive`);
        return;
    } 
    if(isMultipleOfTwo ){
        console.log(`${value}: two`);
    } 
    if(isMultipleOfFive){
        console.log(`${value}: five`);
    } 
}

startingArray.forEach(twoFive)