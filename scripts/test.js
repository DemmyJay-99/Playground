const students = [10, "patrick", 999,98,2,3,4];

const student = students.filter(capitalize);
const studen = student.filter(age);
const stude = studen.filter(ccc);
const isAnInt = students.filter(int);


function capitalize(element) {
    return element % 2 === 0;
}

function age(element) {
    return element > 18;
}

function ccc(element) {
    return element <= 9;
}
function int(element) {
    return isNaN(element);
}

// console.log(students);
// console.log(student);
// console.log(studen);
// console.log(stude);
console.log(isAnInt);

class Product {
    constructor(name, price,age) {
        this.name = name;
        this.price = price;
        this.age = age;
    }

    addProduct(){
        console.log(this.price + this.name);
    }

    displayProduct(){
        console.log(`This is ${this.name} it is $${this.price.toFixed(2)} and it is ${this.age} years old`);
    }
}

const pepper = new Product(3,7);
const paper = new Product("Paper", 20, "16");

paper.displayProduct();
paper.addProduct();
pepper.addProduct();

class circle {
    static pi = 3.14;

    static getDiameter(radius){
        return radius * 2;
    }
    static getArea(radius){
        return this.pi * radius * radius;
    }
}

console.log(circle.pi);
console.log(circle.getDiameter(10));
console.log(circle.getArea(10));


class User {
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("patrick");

console.log(User.userCount);
console.log(user1.username);

// inheritance of classes

// class Animal {
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating.`);
//     }
// }

// class Rabbit extends Animal {
//     name = "rabbit";

//     run(){
//         console.log(`${this.name} is running`);
//     }
// }

// class Fish extends Animal {
//     name = "fish";

//     swim(){
//         console.log(`The ${this.name} is swimming`);
//     }
// }

// class Hawk extends Animal {
//     name = "hawk";
//     fly(){
//         console.log(`This ${this.name} is flying dawgg`);
//     }
// }
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// fish.swim();
// hawk.fly();
// rabbit.run();

// class Animal {
//     alive = true;
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         console.log(`This ${this.name} is eating.`);
//     }
// }

// class Rabbit extends Animal {
//     // name = "rabbit";
//     constructor (name,age){
//         super(name, age);
//     }

//     run(){
//         console.log(`${this.name} is running`);
//     }
// }

// class Fish extends Animal {
//     constructor (name,age){
//         super(name, age);
//     }

//     swim(){
//         console.log(`The ${this.name} is swimming`);
//     }
// }

// class Hawk extends Animal {
//     constructor (name, age){
//         super(name, age);
//     }
//     fly(){
//         console.log(`This ${this.name} is flying dawgg`);
//     }
// }

// const rabbit = new Rabbit("Rabbit", 16);

// console.log(rabbit.age);









// setters and getters

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("You fucking twat!");
        }
    }
    set height(newHeight){
        if (newHeight > 0) {
            this._height=  newHeight;
        } else {
            console.error("You fucking twat!");
        }
    }
    get width(){
        return `${this._width.toFixed(3)} cm`;
    }
    get height(){
        return `${this._height.toFixed(3)} cm`;
    }
    get area(){
        return `${Math.floor(this._height * this._width).toFixed(3)} cm^2`;
    }
}


const rectangle = new Rectangle(30, 10);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


class Person {
    constructor(firstname, age, lastname){
        this.firstname = firstname;
        this.age = age;
        this.lastname = lastname;
    }

    set firstname(NewFirstname){
        if(typeof NewFirstname === "string" && NewFirstname.length > 0 ) {
            this._firstname = NewFirstname;
        }
        else {
            console.error("You motherfucking Twat!!!!!");
        }
    }
    set age(NewAge){
        if(typeof NewAge === "number" && NewAge >= 0 ) {
            this._age = NewAge;
        }
        else {
            console.error("You motherfucking Twat!!!!!");
        }
    }
    set lastname(Newlastname){
        if(typeof Newlastname === "string" && Newlastname.length > 0 ) {
            this._lastname = Newlastname;
        }
        else {
            console.error("You motherfucking Twat!!!!!");
        }
    }
    get firstname(){
        return `${this._firstname}`;
    }
    get age(){
        return `${this._age}`;
    }
    get lastname(){
        return `${this._lastname}`;
    }
    get fullname(){
        return this._firstname + " " + this._lastname;
    }
}

const demmy = new Person("Demmy", 15, "Jay");

console.log(`${demmy.firstname} is cryinggg because he saw his last name was ${demmy.lastname} and he was ${demmy.age} years old`);
console.log(demmy.fullname);



















// Destructuring

let a = 1;
let b = 2;

// variable destructuring

[a, b] = [b, a];

console.log(a);
console.log(b);

// array destructuring (swapping)

const colours = ["blue", "yellow", "pink"];

[colours[0], colours[2]] = [colours[2], colours[0]];

console.log(colours);

// declaring array elements as variables

const moreColours = ["blue", "yellow", "pink", "black","purple", "violet"];

// const array1 = moreColours[1];
// console.log(array1);
//  <that's one way to do it haha>

[color1, color2, color3, color4, ...extraColours] = moreColours;

console.log("The ball is " + color1 );
console.log("The other balls are " + extraColours);


// extract valuse from objects {still destructuring}


const person1 = {
    firstName : "Spongebob",
    lastName : "Squarepants",
    ager : 45,
    job : "Fry Cook",
}
const person2 = {
    firstName : "Patrick",
    lastName : "Star",
    ager : 46,
    job : "None",
}

const {firstName, lastName, ager, job} = person1;

console.log(job);

// for...of

const heroes = ["Spidey", "Batsy", "Supes"];

for (const hero of heroes) {
    if(hero === "Supes") break;
    console.log(hero);
}

// goto 6:15 for nested objects with classes

const person = {
    name: "Mellow",
    age: 16,
    isStudent: true,
    hobbies: ["reading", "coding", "doomscrolling"],
    address: {
        street: "Ojo Close",
        city: "Akure",
        houseNo: 13,
        country: "Nigeria"
    }
}

    console.log(person.address);
    console.log(person.hobbies[0]);

// looping through objects

for(const key in person.address ){
    console.log(person.address[key]);
};

// looping through arrays

// for (const element of array) {
//     // write code here
// }

























//  array sorting

const fruits = ["apple", "coconut", "avocado"];

const fruit = fruits.sort();

console.log(fruit);

// sorting array with number as elementa

const numbers = [1, 2, 3, 4, 10, 6 ,7, 9, 8, 0,50];

numbers.sort((a, b) => a-b);
console.log(numbers);


// array spread operator

const arr = [...numbers, ...fruits];
console.log(arr);


// rest