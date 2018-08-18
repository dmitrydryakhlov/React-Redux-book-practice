let sandwich = {
    bread: 'dutch crunch',
    meat: 'tuna',
    cheese: 'swiss',
    toppings: ['lettuce', 'tomato', 'mustard']
}
let { bread, meat } = sandwich;
console.log(bread, meat);
bread = 'garlic'
meat = 'turkey'
console.log(sandwich.bread, sandwich.meat)
console.log(bread, meat)

let lordify = ({ firstName }) => {
    console.log(`${firstName} of Cantenbury`)
}
let regularPerson = {
    firstName: 'Bill',
    lastName: 'Wilson'
}
lordify(regularPerson)

let [,,a] = ["Kirkwood", "Squaw", "Alpine"]
console.log(a);

