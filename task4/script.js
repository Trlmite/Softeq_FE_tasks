
const arr = ['1', 'a', '25', '13.1']

const sumOfNaturalNumbers = (array) => {
    sum = 0
    for (let i = 0; i < array.length; i++) {
       let currentNumber = Number(array[i])
       if (Number.isInteger(currentNumber)){
           sum += currentNumber
       } 
    }
    console.log(sum)
}

sumOfNaturalNumbers(arr)