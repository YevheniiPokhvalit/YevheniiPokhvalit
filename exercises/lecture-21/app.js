// Task 1
const fruits = 'apple banana cantaloupe blueberries grapefruit';
const fruitsArray = fruits.split(' ');
console.log(fruitsArray);

// Task 2
console.log('Using for loop:');
for (let i = 0; i < fruitsArray.length; i++) {
    console.log(fruitsArray[i]);
}

// Task 3
console.log('Using while loop:');
let j = 0;
while (j < fruitsArray.length) {
    console.log(fruitsArray[j]);
    j++;
}

// Task 4
console.log('Using do...while loop:');
let k = 0;
do {
    console.log(fruitsArray[k]);
    k++;
} while (k < fruitsArray.length);

// Task 5
console.log('Using for...of loop:');
for (const fruit of fruitsArray) {
    console.log(fruit);
}

// Task 6
const Numbs = [1,2,3,4,5,6,7,8,9,10];
console.log('Even numbers using for loop:');
for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}

// Task 7
let names = ['Batman'];
names.push('Joker');
console.log(names);

// Task 8
let names = ['Batman'];
names.unshift('Joker');
console.log(names);

// Task 9
let names = ['Batman', 'Joker', 'Bane'];
names.unshift('Catwoman');
console.log(names);

// Task 10
let names = ['Batman', 'Joker', 'Bane'];
names = ['Catwoman', ...names];
console.log(names);

// Task 11
let names = ['Batman', 'Joker', 'Bane'];
names.splice(1, 0, 'Catwoman');
console.log(names);

// Task 12
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const indexToRemove = names.indexOf('Catwoman');
if (indexToRemove !== -1) {
    names.splice(indexToRemove, 1);
}
console.log(names);

// Task 13
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const indexToReplace = names.indexOf('Catwoman');
if (indexToReplace !== -1) {
    names[indexToReplace] = 'Alfred';
}
console.log(names);

// Task 14
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (!names.includes('Alfred')) {
    names.push('Alfred');
}
console.log(names);

// Task 15
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const indexToRemove = names.indexOf('Alfred');
if (indexToRemove !== -1) {
    names.splice(indexToRemove, 1);
}
console.log(names);
