// try {
//   adddlert("Welcome guest");
// } catch (err) {
//   console.error(err);
// }

// function tryCatch() {
//   try {
//     let num = console.log("this");
//     adddlert("Welcome guest");
//   } catch (error) {
//     console.log("this is an " + error);
//   } finally {
//     console.log("success");
//   }
// }

// tryCatch();

//json object

let companies = [
  {
    name: "Sony",
    numberOfEmployees: 10000,
    ceo: "John",
    rating: 3.6,
  },
  {
    name: "Samsung",
    numberOfEmployees: 120000,
    ceo: null,
    rating: 4.5,
  },
];

// let companies1 = `[
//   {
//     "name": "Sony",
//     "numberOfEmployees": 10000,
//     "ceo": "John",
//     "rating": 3.6
//   }`;

// let numbers = `[
//   {
//     n: 2,
//     e: 1,
//   },
//   {
//     from: 1,
//     to: 2,
//   },
//   {
//     from: 2,
//     to: 3,
//   },
//   {
//     from: 3,
//     to: 4,
//   },
// ];`;

// let text = `[
//   {
//     firstname: "Jesper",
//     surname: "Aaberg",
//     phone: ["555-0100", "555-0120"],
//   },
// ];`;

// JSON.parse converts the strings into JSON object
// console.log(JSON.parse(text));
console.log(JSON.stringify(companies));
// console.log(JSON.parse(companies1));
// console.log(JSON.parse(numbers));

// const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
// console.log(obj);
