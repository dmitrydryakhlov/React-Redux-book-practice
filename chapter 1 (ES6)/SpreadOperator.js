let arr1 = [1,2,3,4,5,5,6,7,7]
let arr2 = [9,8,7,6,5,4,3,2,1]

let spread = [...arr1, ...arr2];

console.log(spread)

let [last] = [...arr2].reverse()
console.log(last)
console.log(arr2);

let lakes = ['donner', 'marlette', 'cascade']
let [first, ...rest] = lakes

console.log(first)
console.log(rest)

function directories(...args){
    console.log(args)
}

let morning = {
    breakfast: 'oatmeal',
    lunch: 'peanut butter and jelly'
}

let dinner = 'mac and cheese'

let backpackingMeals = {
    ...morning,
    dinner
}

console.log(backpackingMeals)