const user = {
    name: 'Rafael',
    age: 26,
    nationality: 'Brazilian'
}

user['name'] = 'Rafinha'
console.log(user['name'])
let prop = user['name'] = 'Rafaelsio'
console.log(prop)
user[0] = "Rafalow"
console.log(user[0])
