function teste() {
    console.log(text)
    var text;
}

console.log(teste())

// Ao invés de apresentar erro, a função retorna undefined por que o Js joga a variavel text para cima do console.log(text) impossibilitando de acontecer o erro