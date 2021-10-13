---
title: Javascript Promises Introduction
excerpt: Asynchronicity and promises are closely tied to eachother and thus, people not fully grasping asynchronous code, usually have issues understanding promises too. In this article, we will introduce the Promise API and look at how it works.
read_time: 5 mins
date: '2021-10-03' # ISO Format
last_edited: '2021-10-06'
author: Konstantinos Pascal
labels: ['JAVASCRIPT', 'ES6', 'PROMISE']
url: 'javascript-promises-introduction'
---

## Introduction

First of all, if you haven't done so, I recommend you read my article on **synchronous** and **asynchronous** code behaviour in Javascript. The article can be found [here](https://konstapascal.dev/blog/javascript-synchronous-and-asynchronous-code).

This will give you a good introduction to **asynchronous** behaviour, which is crucial to be familiar with when working with **promises** since both functions that return promises and callback functions handling the result of those promises, are asynchronous.

### Promise object

**But what are promises and why do they exist?** At their most basic, promises are just another object type in Javascript. What makes promises special from other objects, is that they are a wrapper for some other code inside it.

The object provides us with ways and methods to work with that code. It allows us to know the status of the code, the resulting value and will keep track of its execution.

When working with functions that return promises, it is crucial to understand that you cannot work with them synchronously, but will have to use specific instance Promise methods such as `then()`, `catch()` and, the less used, `finally()`.

An example of an asynchronous operation/function in Javascript that will return a promise, is the commonly used `fetch()`, available on the global object.

Let's look at the following code:

```javascript
const fetchResponsePromise = fetch('https://randomuser.me/api/');
console.log(fetchResponsePromise);

// Output:
// Promise {<pending>}
```

This is happening because, the Javascript engine will execute code line by line. From the time the fetch function was fired off and until the next line, the fetch operation has not finished. Under the hood, fetch will excecute asynchronous code that will execute in a non-blocking way off the main thread.

It would be great if we can somehow log the result of fetch, the moment it has made its resolved value available. This is where the `then()` methods comes in.

## Promise Methods

### then() method

The `then()` method is a method part of any promises' prototype. This will take in a callback function, that it will attach to the promise for later execution. Once the asynchronous code within the promises finishes its execution, it is said that the promise is **settled**.

The settlement can be either a success, meaning that the promise has been **fulfilled**, or a failure, meaning it is **rejected**. The initial state of any promise is **pending**.

The callback within the `then()` will be queued for execution the moment the promise **fulfilles**. A promise is always settled with a value. In the case of `fetch()`, that would be the requested data from the API. This data will be passed in to the callback as an argument.

Let's look at the previous example, but this time, by logging within the `then()` callback.

```javascript
const fetchResponsePromise = fetch('https://randomuser.me/api/');

fetchResponsePromise.then(response => {
	console.log(fetchResponsePromise);
});

// Output:
// Promise {<fulfilled>: Response}
```

Here we can see that the log is executed not immediatelly, but only after the result has come back. This is what is great about promises, giving you the ability to sequence asynchronous operations in a predictable manner.

The `fetch()` functions resolved value will be a `Response` object. In order to further parse this into out desired JSON response from the API, we would have to make use of another promise based method, namely `Response.json()`. In order to chain `then()` methods one after the initial one, you can simply return a promise from the previous ones.

This can be done like this:

```javascript
const fetchResponsePromise = fetch('https://randomuser.me/api/');

fetchResponsePromise
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
	});

// Output:
// {results: Array(1), info: {…}}
```

And this is how we can use `fetch()` and `then()` to correctly make an API request and access our data from that request.

**But what if something goes wrong?**

### catch() method

In the case of a promise rejection, we need a way to handle that error, and this is where the `catch()` method comes in.

Take the following example, a request to an API that does not exist:

```javascript
const fetchResponsePromise = fetch('https://wrong-url.com/api/');

fetchResponsePromise
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
	});

// Output:
// Uncaught (in promise) TypeError: Failed to fetch
```

A Javascript `Error` object will be thrown. If you later inspect the promise with a console log, you would see:

```javascript
console.log(fetchResponsePromise);

// Output:
// Promise {<rejected>: TypeError: Failed to fetch}
```

As we expect, the promise has been rejected. In order to handle this error and any other type of rejection error, we can attach a `catch()` method. This method, just like the `then()`, will take in a callback function and only gets queued for execution if the promise rejects. Let's look at that:

```javascript
const fetchResponsePromise = fetch('https://wrong-url.com/api/');

fetchResponsePromise
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log(err);
	});

// Output:
// TypeError: Failed to fetch
```

Now, instead of the error getting thrown, we get a log of the value that resulted from the rejection of the promise. That value was passed to the callback of the `catch()` method as an argument.

What is great about `catch()` is that no matter how many `then()` methods you may have chained in the sequence, the `catch()` will be able to intercept any rejection from any of those promises.

### finally() method

This method is a special one and its callback will run on **settlement**. We have seen how `then()` runs on fulfillment, `catch()` on rejection, and now, `finally()` will run after the promise has settled, meaning after either **fulfillment** or **rejection**.

It is very useful in some cases, but it is definitely the least used Promise prototype method out of the three.

## Conclusion

While pure Promise syntax is less used in todays modern Javascript, with **async** and **await** replacing it most of the time, it is still the foundation of that syntax and is what actually runs under the hood. It is very important to know what promises are, how they work and how you can use them to their fullest.

We have looked at promises in general, their asynchronous behaviour and at the three main Promise instance methods, the `then()`, `catch()` and `finally()`.

In a future article, I may go over static Promise methods such as:

-  `Promise.all()`
-  `Promise.allSettled()`
-  `Promise.any()`
-  `Promise.race()`

As always, I highly recommend the MDN documentation on promises, as a great source of knowledge on the matter. You can find it [here!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
