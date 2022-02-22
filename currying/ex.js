function soma(a) {
    return function soma(b) {
        return a + b
    }
}

const soma2 = soma(8)
console.log(soma2(2))

////


function conta(a, b) {
    return a + b
}
const conta2 = conta(8, 2)

console.log(conta2)