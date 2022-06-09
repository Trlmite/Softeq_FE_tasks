
const firstNumber = "1";
const lastNumber = "99";

const findPrimeNumbers = ( firstNumber, lastNumber ) => {

    for (let index = firstNumber; index <= lastNumber; index++) {
        if ( index % 3 === 0 && index % 7 === 0){
            console.log("OpenSource")
        } else if ( index % 7 === 0){
            console.log("Source")
        } else if ( index % 3 === 0 ){
            console.log("Open")
        } else {
            console.log(index)
        }
    }
}

findPrimeNumbers(firstNumber, lastNumber)