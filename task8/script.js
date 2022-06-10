

const randomNumber = ( min, max ) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const secretNumber = randomNumber(1, 1000000)

const verify = ( guess ) => {
    if( secretNumber < guess){
        return -1
    } else if (secretNumber > guess){
        return 1
    } else {
        return 0
    }
}

const guessNumber = (min, max, atempt) => {
    let newMin
    let newMax
    let sum = atempt
    const number = randomNumber(min, max)
    console.log({min, max ,number, atempt})
    if(sum != 0){
        sum = atempt - 1
        if(verify(number) === 1){
            newMin = number
            guessNumber(newMin, max, sum)
        } else if (verify(number) === -1){
            newMax = number
            guessNumber(min, newMax, sum)
        } else {
            console.log(`Well done, you found the secret number in ${(50-atempt)} atempts` )
            return 
        }
    } else{
        console.log(" You have to guess correctly in 50 tries...")
    }
}

guessNumber(1, 1000000, 50)

