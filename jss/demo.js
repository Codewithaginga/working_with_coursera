// const fruits = ['kiwi','mango','apple','pear'];
// function appendIndex(fruit, index) {
//     console.log(`${index}. ${fruit}`)
// }
// fruits.forEach(appendIndex);

// const conuty = ['busia', 'kakamega', 'Vihiga'];

// function appendIndexi(fruit, index) {
//     console.log(`${index}. ${fruit}`);
// }

// conuty.forEach(appendIndexi);

// console.log();

// let veggies = ['kales','cabbage', 'carrots'];

// veggies.forEach(function (veggies, index) {
//     console.log(`${index}. ${veggies}`);
// });

//filter

let num  = [0,20,30,40,50];
num.filter(function (nums) {
    return nums > 20;
})

//map
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})

//const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

//convert object to array
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result);

