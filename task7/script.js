
const printABC = () => {
    let alphabetArr = []
    let a = 97
    for (let i = 0; i < 26; i++) {
        let letter = String.fromCharCode(a+i)
        alphabetArr.push(letter.toUpperCase())
    }
    console.log(alphabetArr)
}


printABC()