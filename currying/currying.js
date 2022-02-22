/*A função abaixo não obtem valor algum, a fn soma(a) retorna soma(b) que retorna a soma entre os dois parametros formais.*/
function soma(a){
    return function soma(b){
        return a + b
    }
}
/* Abaixo estou chamando uma constante de nome soma2 que está chamando a fn soma(a) e atribuindo um parametro real neste caso o valor é 5*/
// soma(a) vale 5
// Abaixo estou atrindo valor a fn soma(b) que neste caso tambem valera 5 ao executar o resultado devera ser igual a 10.
const soma2 = soma(5)
console.log(soma2(5))

// Ao meu entender está expressão seria o mesmo que fazer desta forma abaixo:
/*

function soma(a, b) {
    return a + b
}
const soma2 = soma(8, 2)

console.log(soma2)

*/