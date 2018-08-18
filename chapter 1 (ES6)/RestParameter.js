let firstName = 'Dmitry'
let lastName = 'Dryakhlov'

let person = { firstName, lastName }
console.log(person)
firstName = '123'
console.log(person)
person.firstName = 321

console.log(firstName)

const skier = {
    firstName,
    lastName,
    powderYell() {
        let yell = this.firstName.toUpperCase()
        console.log(`${yell} ${yell} ${yell}!!!`)
    },
    speed(mph) {
        this.lastName = mph
        console.log('speed:', mph)
    }
}

console.log(skier)