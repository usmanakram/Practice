Source: Object-oriented Programming in JavaScript | Mosh
Source Link: https://www.youtube.com/watch?v=PFmuCDHHpwk

//////////////////////////////////////////////////////////////
# 01 Getting Started
//////////////////////////////////////////////////////////////

## 4 Pillars of OOP (lesson 1.2)

1. Encapsulation  *(Reduce complexity + increase reusability)*
1. Abstraction    *(Reduce complexity + isolate impact of changes)*
1. Inheritance    _(Eliminate redundant code)_
1. Polymorphism   _(Refactor ugly if/else & switch/case statements)_

### 1) Encapsulation:
Uncle Bob says,
> "The best functions are those with no parameters."

Using encapsulation, we group related variables and functions together, and this way we can reduce complexity. Now we can reuse this object in different parts of the program, or in different programs.

### 2) Abstraction:
Example: DVD player

Hiding some properties and methods from outside and show only the essentials.
It gives us a couple of benefits.
1) It makes the interface of objects simpler.
2) It reduces the impact of change.

### 3) Inheritance:
It is a mechanism that allows us to eliminate redundant code.

Explanation:
We can pick common properties and methods from different classes and create a parent class having those common properties and methods.

### 4) Polymorphism:
`Poly` means many and `morph` means form, in that case polymorphism means many forms.
In OOP, polymorphism is a techique that allows us to get rid of long 'if/else' or 'switch/case' statements.

---
//////////////////////////////////////////////////////////////
# 02 Objects
//////////////////////////////////////////////////////////////

## Object Literals (lesson 2.2)

```javascript
const circle = {}; // Object literal
```

An object in javascript is essentially a collection of key/value pair.

```javascript
const circle = {
  radius: 1,
  location: {
    x: 2,
    y: 1,
  },
  draw: function() {
    console.log('draw');
  }
};
```

Object literal is a simple way to define an object. But, we can also define objects using factories and constructors.

//////////////////////////////////////////////////////////////

## Factories (lesson 2.3)

Factory Function (Camel Notation)
```javascript
function createCircle(radius) {
  return {
    // radius: radius,
    // after ES6, we can write it as
    radius,
    /*draw: function() {
        console.log('draw');
    },*/
    // after ES6, we can write it as
    draw() {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);
circle.draw();
````
For Factory function, we should use Camel Notation.

//////////////////////////////////////////////////////////////

## Constructors (lesson 2.4)

Constructor Function (Pascal Notation)
```javascript
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const another = new Circle(1);
```

When we use `new` keyword, three things happen
1. This `new` operator create an empty javascript object.
2. It sets `this` to point newly created object. (By default, `this` points to global object. If we skip `new`, `this` will point to global object that is `window` in case browser or `global` in case of node)
3. It returns newly created object.

//////////////////////////////////////////////////////////////

## Constructor Property (lesson 2.5)

Every object has a constructor property that referances the function that was used to creaate that object.

```javascript
another.constructor
circle.constructor
```

We can view constructor function by entering the above code inside chrome developer tool.
`another.constructor` will return `Circle` function.
`circle.constructor` will return built in constructor function in javascript. When we create an object using the object literal syntax, internally, javascript engine uses this constructor function.

```javascript
let x = {};
```
Javascript engine will translate it something like this
```javascript
let x = new Object();
```

In javascript, we have a few other built in constructors, for example
```javascript
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...
```

//////////////////////////////////////////////////////////////

## Functions are Objects (lesson 2.6)

```javascript
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
```

When we declare a function, internally, it represented like below.

```javascript
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
  console.log('draw');
}
`);

const circle = new Circle1(1);

const another = new Circle(1);
```

Let's take a look
```Javascript
Circle.call({}, 1); // It's exactly like above expression ( new Circle(1); )
```

When we use `new`, internally, javascript calls `call()` method.

We have another method same like above (`call()`), but accepts parameters in the form of array.

```javascript
Circle.apply({}, [1, 2, 3]);
```

//////////////////////////////////////////////////////////////

## Value vs Reference Types (lesson 2.7)

### Value Types (primitives)
1. Number
2. String
3. Boolean
4. Symbol
5. undefined
6. null

### Reference Types (objects)
1. Object
2. Function
3. Array

Primitives are copied by value.
Objects are copied by their reference.

//////////////////////////////////////////////////////////////

## Adding/Removing Properties (lesson 2.8)

```javascript
const circle2 = new Circle(10);
circle2.location = { x: 1 };

console.log(circle2);

delete circle2.location;
console.log(circle2);
```

//////////////////////////////////////////////////////////////

## Enumerating Properties (lesson 2.9)

```javascript
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(10);

for (let key in circle) {
  // Print only keys
  if (typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

// Get all the keys in an array
const keys = Object.keys(circle);
console.log(keys);

// Check, if an object has given property
if ('radius' in circle) {
  console.log('Circle has a radius');
}
```

//////////////////////////////////////////////////////////////

## Abstraction (lesson 2.10)

```javascript
function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function(factor) {

  }

  this.draw = function() {
    this.computeOptimumLocation(0.1);
    console.log('draw');
  };
}

const circle = new Circle(10);
circle.draw();
```

Hide the details and expose only the essentials.

//////////////////////////////////////////////////////////////

## Private Properties and Methods (lesson 2.11)

```javascript
function Circle(radius) {
  this.radius = radius;

  // Local variable
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function(factor) {

  }

  this.draw = function() {
    computeOptimumLocation(0.1);
    console.log('draw');
  };
}

const circle = new Circle(10);
circle.draw();
```

//////////////////////////////////////////////////////////////

## Getters/Setters (lesson 2.12)

Technically, local variables of objects are not private members of objects. Because, they are not inside objects, they are just local variables.
But, from an object oriented point of view, we can refer to them as private members of the object.

If we need to get private members/local variables, one solution we have to write a method that return our required private member.

```javascript
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);
circle.getDefaultLocation();
circle.draw();
```

We have another way to do this.
```javascript
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  /*this.getDefaultLocation = function() {
    return defaultLocation;
  };*/
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y)
        throw new Error('Invalid location.');
      defaultLocation = value;
    }
  });

  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);
console.log(circle.defaultLocation);
circle.defaultLocation = { x: 2, y: 2};
```

//////////////////////////////////////////////////////////////

## Exercise & Solution (lesson 2.14 & 2.15)

```javascript
function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    if (running)
      throw new Error('Stopwatch has already started.');

    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running)
      throw new Error('Stopwatch is not started.');

    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    // get: function() { return duration; }
    // we can write it down as
    get: () => duration
  });
}
```

---
//////////////////////////////////////////////////////////////
# 03 Prototypes
//////////////////////////////////////////////////////////////

## Inheritance (lesson 3.1)

Base/Super/Parent
Derived/Sub/Child

We refer to the inheritance as `IS-A` relationship.
We say circle `IS-A` shape.

But, in javascript, we don't have classes, we only have objects. So that's when prototypical inheritance comes in the picture.
So essentially, we have two types of inheritance, `classical` and `prototypical`.

//////////////////////////////////////////////////////////////

## Prototypes and Prototypical Inheritance (lesson 3.2)

We refer to the shape object as the prototype of the circle. So a prototype is essentially a parent of another object.
Every object in javascript, except only a single object, has a prototype or parent. And it inherits all the members defined in it's prototype.

```javascript
let x = {};
let y = {};

Object.getPrototypeOf(x) === Object.getPrototypeOf(y)

x.__proto__ // Not recommended, it's depricated
```

A prototype is just a regular object in memory. There is nothing special about it. Every object has a prototype or a parent, except the root object.

//////////////////////////////////////////////////////////////

## Multi-level Inheritance (lesson 3.3)

```javascript
const myArray = [];
```

`myArray` derived from `arrayBase` that derived from `objectBase`
This is what we call multi level inheritance.
Similarly,
`circle` inherits from `circleBase`, and `circleBase` inherits from `objectBase`.

Every object in JavaScript except the root object has a prototype/parent
Objects created by a given constructor will have the same prototype. So, all circle objects created by the `Circle` constructor will have the same prototype, and similarly, all arrays created by the array constructor will have the same prototype.

//////////////////////////////////////////////////////////////

## Property Descriptors (lesson 3.4)

We cannot iterate properties defined inside builtin parents, like Object, Array etc. Because, those properties have attributes attached to them. Sometimes these attributes prevent a property from being enumerated.

```javascript
let person = { name: 'Usman' };
```

To get parent of "person" object.
In console, we can get the same result by typing `person.__proto__`
```javascript
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(descriptor);
```

```javascript
Object.defineProperty(person, 'name', {
  // By default, all these properties are true
  writable: false,
  enumerable: false, // visibility
  configurable: false // deletable
});

person.name = 'John';

console.log(person);
console.log(Object.keys(person));
delete person.name;
console.log(person);
```

//////////////////////////////////////////////////////////////

## Constructor Prototypes (lesson 3.5)

Constructors also have a prototype property
This is the object that will be used as the parent for objects created by constructor

---
//////////////////////////////////////////////////////////////
# 04 Prototypical Inheritace
//////////////////////////////////////////////////////////////

---
//////////////////////////////////////////////////////////////
# 05 ES6 Classes
//////////////////////////////////////////////////////////////

---
//////////////////////////////////////////////////////////////
# 06 ES6 Modules
//////////////////////////////////////////////////////////////
