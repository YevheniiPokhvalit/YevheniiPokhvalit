// Task 1
let person = {
    name: 'John Doe',
    age: 30
};
console.log(person.name); // John Doe
console.log(person.age); // 30

// Task 2
person.name = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(person.name.firstName); // John
console.log(person.name.lastName); // Doe

// Task 3
person.bio = function() {
    console.log(`Name: ${this.name.firstName} ${this.name.lastName}, Age: ${this.age}`);
};
person.bio();

// Task 4
person.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name.firstName}`);
};
person.introduceSelf();

// Task 5
function createPerson(name) {
    return {
        name,
        introduceSelf() {
            console.log(`Hi! I'm ${this.name}`);
        }
    };
}

const person1 = createPerson('Alice');
const person2 = createPerson('Bob');
person1.introduceSelf(); // Hi! I'm Alice
person2.introduceSelf(); // Hi! I'm Bob

// Task 6
function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
        console.log(`Hi! I'm ${this.name}`);
    };
}

const mary = new Person('Mary');
const tom = new Person('Tom');
mary.introduceSelf(); // Hi! I'm Mary
tom.introduceSelf(); // Hi! I'm Tom

// Task 6.1
console.log('prop' in mary); // false

// Task 7
let DirtyMartini = {
    english_please() {
        console.log(`ingredients:
      6 fluid ounces gin
      1 dash dry vermouth (0.0351951ml) 
      1 fluid ounce brine from olive jar
      4 stuffed green olives`);
    },
    excuse_my_french() {
        console.log(`ingrédients:
      170.4786 ml de gin
      1 trait de vermouth sec (0.0351951ml) 
      28.4131 ml de saumure du pot d'olive
      4 olives vertes farcies`);
    }
};

DirtyMartini.english_please();
DirtyMartini.excuse_my_french();
