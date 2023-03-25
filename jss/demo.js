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

// let num  = [0,20,30,40,50];
// num.filter(function (nums) {
//     return nums > 20;
// })

//map
// [0,10,20,30,40,50].map( function(num) {
//     return num / 10
// })

// const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
// const uniqueFruits = new Set(repetitiveFruits);
// console.log(uniqueFruits);

// //convert object to array
// const result = [];
// const drone = {
//     speed: 100,
//     color: 'yellow'
// }
// const droneKeys = Object.keys(drone);
// droneKeys.forEach( function(key) {
//     result.push(key, drone[key])
// })
// console.log(result);

//spread Operator

// const fruits = ['apple', 'pear', 'plum']
// const berries = ['blueberry', 'strawberry']
// const fruitsAndBerries = [...fruits, ...berries] // concatenate
// console.log(fruitsAndBerries); // outputs a single array

// const londonClubs = ['Arsenal', 'Palace'];
// const manchesterClubs = ['City', 'united']

// const combTwo = [...londonClubs, ...manchesterClubs];
// console.log(combTwo);


// names = ['Brian', 'Eunita', 'Esther', 'Winnie'];

// function appendIndex(names, index) {

//     console.log(`${index}. ${names}`);
// }

// names.forEach(appendIndex);

// let greet = 'hello world';
// console.log(greet.charCodeAt(0));
// let txt = "a,b,c,d,e";   // String
// txt.split(",");          // Split on commas
// txt.split(" ");          // Split on spaces
// txt.split("|");          // Split on pipe 
// console.log(txt);

// let target = document.querySelector('table');

// function handleClick() {
//     console.log('click the Body');
// }

// target.addEventListener('click', handleClick)


// function headCaption() {
//     console.log('This is a caption clicked');
// }

////.......working with Math.....

// let mat = Math.min(1, 2, 3, 5, 7, 8, 9);

// console.log(mat);
// let maxx = Math.max(1, 2, 3, 5, 7, 8, 9);

// console.log(maxx);

// let round = Math.round(7.4);
// console.log(round);

// let ce = Math.ceil(6.1);
// console.log(ce);



//..............JAVASCRIPT DATES.........


let dat = new Date();
console.log(dat);

let d = new Date("October 13, 2014 11:13:00");

console.log(d);






