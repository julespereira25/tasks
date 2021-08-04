// //"use strict" defines that the JavaScript code should be executed in "strict mode".
// //With strict mode you can, for example, not use undeclared variables.
// //Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
// //Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
// // All modern browsers support "use strict" except Internet Explorer 9 and lower:
// // Strict mode makes it easier to write "secure" JavaScript.

// // function stringMethods() {
// //   var str = "HELLO WORLD";
// //   console.log(str.charAt(0));
// //   var str = "HELLO";
// //   console.log(str[3]);
// // }

// // stringMethods();

// // function stringMultipleLines() {
// //   var string = "Hello \
// //   Dolly  !";
// //   console.log(string);
// //   var string1 = "Hello " + "Dolly!";
// //   console.log(string1);
// // }

// // stringMultipleLines();

// // function arrayFunctions() {
// //   var fruits = ["Banana", "Orange", "Apple", "Mango"];
// //   console.log(Array.isArray(fruits));
// // }

// // arrayFunctions();

// // function arrayForeach() {
// //   const array1 = ["a", "b", "c"];
// //   array1.forEach((element) => console.log(element));
// // }

// // arrayForeach();

// // // The map() method creates a new array with the results of calling a function for every array element.
// // // map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results.

// // function arrayMap() {
// //   var numbers1 = [45, 4, 9, 16, 25];
// //   var numbers2 = numbers1.map(Math.sqrt);
// //   console.log(numbers2);
// //   const array1 = [1, 4, 9, 16];
// //   const map1 = array1.map((x) => x * 2);
// //   console.log(map1);
// // }

// // arrayMap();

// function arrayFilter() {
//   var numbers = [45, 4, 9, 16, 25, 18, 19];
//   var over18 = numbers.filter((x) => x > 18);
//   console.log(over18);

//   var words = [
//     "spray",
//     "limit",
//     "elite",
//     "exuberant",
//     "destruction",
//     "present",
//   ];
//   var result = words.filter((x) => x.length > 6);
//   console.log(result);
// }

// arrayFilter();

// //Array.reduce()
// // The JavaScript function JSON.parse() is used to convert the text into a JavaScript object

// function parseJSON() {
//   var txt = '{"name":"John", "age":30, "city":"New York"}';
//   var obj = JSON.parse(txt);
//   console.log(obj);

//   var json = '{"result":true, "count":42}';
//   var obj = JSON.parse(json);
//   console.log(obj.count);
// }

// parseJSON();

// // The JavaScript function JSON.parse() is used to convert the object into a JavaScript text

// function stringifyJSON() {
//   var obj = { name: "John", age: 30, city: "New York" };
//   var myJSON = JSON.stringify(obj);
//   console.log(myJSON);
// }

// stringifyJSON();

// function arrowFunction() {
//   // var x = function (x, y) {
//   //   return x * y;
//   // };

//   const x = (x, y) => x * y;
//   console.log(x);
// }

// arrowFunction();

// function mapObjects() {
//   const apples = { name: "Apples" };
//   const bananas = { name: "Bananas" };
//   const oranges = { name: "Oranges" };
//   // Create a new Map
//   const fruits = new Map();
//   // Add new Elements to the Map
//   fruits.set(apples, 500);
//   fruits.set(bananas, 300);
//   fruits.set(oranges, 200);
// }

// // Classes are a template for creating objects

// function classConstructor() {
//   class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }

//   const myCar = new Car("Ford", 2014);

//   console.log(myCar.name);
//   console.log(myCar.year);
// }

// classConstructor();
//write a promise to fetch the api
//write a callback to fetch the api

function fetchUrl() {
  const fetch = require("node-fetch");
  fetch("https://demo7501501.mockable.io/getlist")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

fetchUrl();

function promiseFunction() {
  let p = new Promise((resolve, reject) => {
    let fetchPromise = "https://demo7501501.mockable.io/getlist";
    if (fetchPromise == "https://demo7501501.mockable.io/getlist") {
      resolve("Successful");
    } else {
      reject("Failed");
    }
  });

  //single parameter resolve
  p.then((message) => {
    const fetch = require("node-fetch");
    fetch("https://demo7501501.mockable.io/getlist")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    console.log("this is " + message);
  }).catch((message) => {
    console.log("this has " + message);
  });
}

promiseFunction();
