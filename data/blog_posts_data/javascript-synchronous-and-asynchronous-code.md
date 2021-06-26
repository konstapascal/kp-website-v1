---
title: Javascript Synchronous and Asynchronous Code
excerpt: Asynchronous code is something you will eventually encounter when learning Javascript. It is a very confusing topic and difficult to grasp at first, especially when not having background with other programming languages.
date: '2021-06-25' # ISO Format
author: Konstantinos Pascal
labels: ['JAVASCRIPT', 'ES6']
url: 'javascript-synchronous-and-asynchronous-code'
---

## Introduction

Asynchronous code is definitely very tricky to understand at first, but extremely important to do so. Understanding this topic will lead to writing better code and as a result, less bugs. Bugs are unavoidable but once you understand async code, you will know even how to fix them!

## Synchronous code

To understand async code we need to first look at synchronous code.

**Synchronous code execution** is something that you may already know about but never thought of closely. Execution of code, line by line, in the order it is written is what this means.

Take the following code snippet and output as an example:

```javascript
console.log('script start');

(function () {
	console.log('inside function');
})();

console.log('script end');

// Output:

// script start
// inside function
// script end
```

The logs to the console appear in the order we expect them too, synchronously, it is very straight forward.

Asynchronous code is not as straightforward thoough, this is what we will be looking at next.

## Asynchronous code

Examples of asynchronous code in Javascript are functions such as `setTimeout()`, `setInterval()` or `addEventListener()`.

Asynchronous code is code that, will usually take some amount of time to finish, some time that we are not able to predict beforehand. The same asynchronous code operation may take 1s, 3s or 20s when ran multiple times, especially in the case of event handlers.

Since Javascript is a single-threaded programming language, that means that it only has one thread of execution. Asynchronous operations would lead to the complete blockage of this thread. If the main thread of execution in the browser is blocked, the whole page becomes unresponsive as nothing else is allowed to execute.

Because of this, Javascript is not equipped to deal with asynchronous code. The environment in which the Javascript runs, such as the browser for example, will help with running this code, and hand back the result once it is done. This is precisely what happens with `setTimeout()` for example.

Let's look at the following code:

```javascript
console.log('script start');

(function () {
	console.log('inside function');
})();

setTimeout(() => console.log('inside timeout'), 1000);

console.log('script end');

// Output:

// script start
// inside function
// script end
// inside timeout
```

The resulting output might be expected to you, but what if we change the second `setTimeout()` argument to 0:

```javascript
console.log('script start');

(function () {
	console.log('inside function');
})();

setTimeout(() => console.log('inside timeout'), 0);

console.log('script end');

// Output:

// script start
// inside function
// script end
// inside timeout
```

We get the exact same result despite setting no delay for the execution of the callback function within the `setTimeout()`.

That is because, as explained earlier, the execution of the function is passed to the environment that the JS is running in. After the delay has passed, the browser will create a task containing the callback and push it to the task queue. From here, it waits for the event loop to pick it up and place it on the call stack.

The event loop within the JS engine is responsible for picking what gets to run next. The event loop will pick the next task that has been queued only after the call stack is empty. In our case, the call stack does not empty until everything has been executed, and we return from every function, including the global execution context.

This means that, `setTimeout` does not actually execute after a delay of 0 ms, but rather after a minimum of time provided as the argument.

## Conclusion

In conclusion, we have learned what synchronous and asynchronous code is, how it behaves within the context of the browser, and code executes in the order it does.

Asynchronous code will always execute after the call stack is empty, at the very minimum, so while not always obvious from the code, you can still predict where that is by looking and thinking about the order of execution.
