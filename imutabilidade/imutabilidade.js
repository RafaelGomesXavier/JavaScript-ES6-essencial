const user = {   // Criação do objeto user
    name: 'Rafael',
    lastName: 'Gomes Xavier'
}

function getUserWithFullName(user) {   // Criação da função que recebe user como parametro, porem sem conteudo ainda
    return {
        ...user, // Retorna e adiciona fullName no escopo do objeto
        fullName: `${user.name} ${user.lastName}`
    }
}

// Na chamada da função é atribuido o conteudo de user ao parametro user citado acima
const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName)