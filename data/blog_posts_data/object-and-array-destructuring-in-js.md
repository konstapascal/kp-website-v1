---
title: Object and Array Destructuring in Javascript
excerpt: Object and array destructuring in JS is a very simple yet powerful feature of the language. It makes handling objects and arrays less tedious by allowing you to extract values and work with them easier.
date: '2021-06-12' # ISO Format
author: Konstantinos Pascal
labels: ['JAVASCRIPT', 'ES6', 'OBJECT', 'ARRAY']
url: 'object-and-array-destructuring-in-js'
---

## Introduction

With the release of ES6, the sixth edition of ECMAScript, Javascript has gotten a bunch of new features, ranging from new variable declaration methods, to new built-in object methods and new syntax.

Destructuring assignment is a a new expression within the language that makes it possible to extract values from array, or properties from an object and assign them to distinct variables.

## Code examples

Let's say we have the following array and object:

```javascript
const arr = [10, 20, 30, 40];
const obj = { firstName: 'John', lastName: 'Doe', age: 25 };
```

### Traditional assignment

One way to assign its values to variables, is by accessing them by their index in arrays, or with the dot notation for objects like so:

```javascript
const first = arr[0]; // 10
const second = arr[1]; // 20
// ... and so on

const firstName = obj.firstname; // "John"
const lastName = obj.lastName; // "Doe"
const age = obj.age; // 25
```

You can already see that this is very tedious and will quickly take many lines and many variable declarations.

### Object and array destructuring

Array and object destructuring assignments solve this by decresing the amount of assignments you may need into a single line, this can be done the following way:

```javascript
const [first, second, third, fourth] = [10, 20, 30, 40];
console.log(first, second, third, fourth); // 10 20 30 40

const { firstName, lastName, age } = { firstName: 'John', lastName: 'Doe', age: 25 };
console.log(firstName, lastName, age); // "John" "Doe" 25
```

Be aware that destructuring behaves slightly differently for arrays and objects. For arrays, you may assign the values to any variable name you want, while for objects, the name of the variable needs to match with the property name from within the object.

Because of this behaviour, the variables from an object destructuring can be written in any order, as long as they match names. For arrays, the values will be assigned to the variables in order.

### Assigning object properties to new variable names

You are not constrained to using variable names identical to the property names. You can choose to assign to new variable names as well:

```javascript
const { firstName: newFirstName, lastName: newLastName, age: newAge } = {
	firstName: 'John',
	lastName: 'Doe',
	age: 25
};

console.log(newFirstName, newLastName, newAge); // "John" "Doe" 25
```

### Skip assignment of array value

You may skip assigning a variable from an array by simply leaving an empty space in its place. For objects, you only assign what you need to.

```javascript
const [first, , , fourth] = [10, 20, 30, 40];
console.log(first, fourth); // 10 40

const { firstName, age } = { firstName: 'John', lastName: 'Doe', age: 25 };
console.log(firstName, age); // "John" 25
```

### Using the rest operator

The rest operator can also be used to, as the name suggests, assign the rest of the values from an array to a variable. That variable will hold an array of the rest values. This is easier to understand with an example:

```javascript
const [first, second, ...rest] = [10, 20, 30, 40];

console.log(first, second); // 10 20
console.log(rest); // [30, 40]
console.log(...rest); // 30 40
```

The rest operator behaves the same way for objects as well.

### Destructuring of nested properties

Destructuring of nested objects is also possible. Take the following object:

```javascript
const personObj = {
	firstName: 'John',
	lastName: 'Doe',
	favorites: {
		favoriteFood: 'Pizza',
		favoriteLanguage: 'Javascript'
	}
};

const {
	firstName: newFirstName, // variable name change
	favorites: { favoriteFood, favoriteLanguage }
} = personObj;

console.log(newFirstName); // "John"
console.log(favoriteFood, favoriteLanguage); // "Pizza" "Javascript"
```

And the same goes for when you are working with arrays too.

## Conclusion

In conclusion, we have looked at just a few ways of utilizing destructuring assignment for arrays and objects in Javascript. I would encourage to research this topic further as there is much more to it than this.

One of my favorites aspects of this syntax, that I have not covered, is being able to destructure objects or arrays passed into a function, directly from within the function parameter. This in particular is something you will encounter all the times in Javascript libraries such as React when working with props.

If you are interested in reading more about destructuring, visit the official MDN documentation by clicking [here!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
