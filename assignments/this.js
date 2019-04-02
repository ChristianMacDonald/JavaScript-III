/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding: All Javascript programs take place within the context of a global object. In browsers, this global object is called window, but in node, it is called global. In lieu of any other overriding context, this refers to the global object.
* 2. Implicit Binding: When a function is called using the dot operator on an object, this refers to the object in front of the dot.
* 3. New Binding: When using a constructor function with the new keyword, this refers to the object to be returned by the constructor function.
* 4. Explicit binding: When using the call or apply functions, one must pass the object to which this refers, thus allowing one to use functions belonging to one object on another.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const person = {
    "name": "Christian",
    "sayHi": function () {
        console.log(`Hi, my name is ${this.name}.`);
    }
}

person.sayHi();

// Principle 3

// code example for New Binding
function Person(attributes) {
    this.name = attributes.name;
}

const anotherPerson = new Person({ "name": "Matthew" });
console.log(anotherPerson.name);

// Principle 4

// code example for Explicit Binding
person.sayHi.call(anotherPerson);