//dom manipulation


//getElementByID

// let title = document.getElementById('main-heading');
// title.style.color = 'blue';


//getElementsByClassName

let listName = document.getElementsByClassName("list-items");
console.log(listName);


//getElementByTagName
let tagName = document.getElementsByTagName("li");
console.log(tagName);


//getElementByQuerrySelector

let container = document.querySelector("section");
console.log(container);

//getElementByQuerrySelectorALL


// let ul = document.querySelector('ul');
// let li = document.createElement('li');

// ul.append(li)

// let d = new Date()
// let  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursdays', 'Friday', 'Saturday']
// document.getElementById('dat').innerHTML = days[d.getDay()];

// let items;
// let arr = ['Addis Ababa', 'Daes Salaam', 'Kigali', 'Pretoria', 'London'];
// arr.push('Dakar');

// document.getElementById('dat').innerHTML = arr;


//........Traverse the Dom.


//......Parent Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);


//.................Event Listners....

let btnTwo = document.querySelector('.btn-2');

function alertButton() {
    alert('I am leaving for london current;ly')
}

btnTwo.addEventListener('click', alertButton);

let btnThree = document.querySelector('.btn-3');

function alertButton3() {
    alert('I am Going To mary a beautiful wife')
}

btnThree.addEventListener('click', alertButton3);


