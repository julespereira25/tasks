const date = Date();

console.log(date);

const date1 = new Date();

console.log(date1);

const date2 = Date.now();
console.log(date2);

const date3 = Date.parse();
console.log(date3);

Date.UTC(year, month, day);
const date4 = new Date(Date.UTC(2021, 5, 5));
console.log(date4);

//getDate()

const x = new Date();
const date5 = x.getDate();
console.log(date1);

//getDay()

const y = new Date();
const date6 = y.getDay();
console.log(date6);

//getFullYear()

const z = new Date();
const date7 = y.getFullYear();
console.log(date7);

//getHours()
//Returns the hour in the specified date according to local time

const a = new Date();
const date8 = a.getHours();
console.log(date8);

//getMilliseconds()

const b = new Date();
const date9 = b.getMilliseconds();
console.log(date9);

//getMinutes()

const c = new Date();
const date10 = c.getMinutes();
console.log(date10);

//getMonth()

const d = new Date();
const date11 = d.getMonth();
console.log(date11);

//getSeconds()

const e = new Date();
const date12 = e.getSeconds();
console.log(date12);

//getTime()

const f = new Date();
const date13 = e.getTime();
console.log(date13);

//getTimezoneOffset()

const g = new Date();
const date14 = g.getTime();
console.log(date14);

//getUTCDay()
const h = new Date();
const date15 = g.getUTCDay();
console.log(date15);

//getUTCFullYear()
const i = new Date();
const date16 = i.getUTCFullYear();
console.log(date16);

//getUTCHours()
const j = new Date();
const date17 = j.getUTCHours();
console.log(date17);

//getUTCMilliseconds()
const k = new Date();
const date18 = k.getUTCMilliseconds();
console.log(date18);

//getUTCMinutes()
const l = new Date();
const date19 = l.getUTCMinutes();
console.log(date19);

//getUTCSeconds()
const m = new Date();
const date20 = m.getUTCSeconds();
console.log(date20);

//getYear()
const n = new Date();
const date21 = n.getYear();
console.log(date21);

//setDate()
const o = new Date();
o.setDate(24);
console.log(o.getDate());
o.setDate(32);
console.log(o.getDate());

//setFullYear()
const p = new Date();
p.setFullYear(2020);
console.log(p.getFullYear());

//setHours()

const q = new Date();
q.setHours(20);
console.log(q);

//setMilliseconds()

const r = new Date();
console.log(r.getMilliseconds());

//setMinutes()

const s = new Date();
s.setMinutes(45);
console.log(s.getMinutes());

//setMonths()

const t = new Date();
t.setMonth(4);
console.log(t.getMonth());

//setSeconds()

const u = new Date();
u.setSeconds(42);
console.log(t.getSeconds());

//setTime()

const event1 = new Date("July 5, 2021");
const event2 = new Date();
event2.setTime(event1.getTime());
console.log(event1);
console.log(event2);

//setUTCDate()

const event25 = new Date();

event25.setUTCDate(20);

console.log(event25.getUTCDate());

//setUTCFullYear()

const event26 = new Date();

event26.setUTCFullYear(2022);

console.log(event26.getUTCFullYear());

//setUTCHours()
const hours = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(hours.toUTCString());

console.log(hours.getUTCHours());

hours.setUTCHours(23);

console.log(hours.toUTCString());

//setUTCMilliseconds()

const event30 = new Date();

event30.setUTCMilliseconds(420);

console.log(event30.getUTCMilliseconds());

//setUTCMinutes()

const event31 = new Date();

event31.setUTCMinutes(25);

console.log(event31.getUTCMinutes());

//setUTCMonth()

const event32 = new Date();

event32.setUTCMonth(11);

console.log(event32.getUTCMonth());

//setUTCSeconds()

const event32 = new Date();

event32.setUTCSeconds(39);

console.log(event32.getUTCSeconds());

//setYear()

const event33 = new Date();

event32.setYear(2022);

console.log(event32.getUTCSeconds());

//toDateString()

const string = new Date();

console.log(string.toDateString());

//ISO string()

const string1 = new Date();
console.log(string1.toISOString());

///Json string()

const string2 = new Date();

const jsonDate = string2.toJSON();

console.log(jsonDate);

//toLocaleDateString()

const string3 = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(string3.toLocaleDateString("de-DE", options));
console.log(string3.toLocaleDateString(undefined, options));

//toLocaleString()

const string4 = new Date();

console.log(string4.toLocaleString("en-GB", { timeZone: "UTC" }));

console.log(string4.toLocaleString("ko-KR", { timeZone: "UTC" }));

//toLocaleTimeString()

const string5 = new Date();

console.log(string5.toLocaleTimeString("en-US"));

console.log(string5.toLocaleTimeString("it-IT"));

console.log(string5.toLocaleTimeString("ar-EG"));

//toString()

const string6 = new Date();

console.log(string6.toString());

//toTimeString()

const string7 = new Date();

console.log(string7.toTimeString());

//toUTCString()

const string8 = new Date();

console.log(string8.toUTCString());

//valueOf()

const string9 = new Date();

console.log(string9.valueOf());

//epoch

let birthday = new Date(628021800000);
console.log(birthday);
let seconds = Math.floor(Date.now() / 1000);
console.log(seconds);

let xy = new Date(2010, 6, 26).getTime() / 1000;
console.log(xy);
let today = new Date();

var myDate = new Date(); // Your timezone!
var myEpoch = myDate.getTime() / 1000.0;
console.log(myEpoch);

// let current = today.setFullYear(today.getFullYear() + 1);

// console.log(current);

// const oneYearAhead = new Date( new Date().setFullYear(new Date().getFullYear() + 1)
// );

//find the day from todays date in 2022
let today = new Date();

let current = today.setFullYear(today.getFullYear() + 1);

console.log(current);

let str = today.toDateString();

console.log(str);

//manipulate date object

// const date10 = new Date("2020-12-31");

const oneYearAhead = new Date(
  new Date().setFullYear(new Date().getFullYear() + 1)
);

//epoch

const myDate = new Date();
const MillisecondssinceEpoch = myDate.getTime();
console.log(MillisecondssinceEpoch);
const secondsSinceEpoch = Math.round(myDate.getTime() / 1000);
console.log(secondsSinceEpoch);
const hoursSinceEpoch = Math.round(myDate.getTime() / 3600);
console.log(hoursSinceEpoch);

formats(dd - mm - yyyy)(yyyy - dd - monthname);
mm - dd - yyyy;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;

const month = today.toLocaleString("default", { month: "long" });

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}
today = mm + "-" + dd + "-" + yyyy;
console.log(today);
today = yyyy + "-" + dd + "-" + month;
console.log(today);
today = dd + "/" + mm + "/" + yyyy;
console.log(today);

//given a date find the previous day.

var today1 = new Date();
var yesterday = new Date(today1);

yesterday.setDate(yesterday.getDate() - 1);

var yesterday1 = yesterday.toDateString();

console.log(yesterday1);

//if date and time given print output date and time after 12hrs;

// var s = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});

var s = new Date();
s.setHours(s.getHours() + 12);

console.log(s);

var today7 = s.getTime();

console.log(today7.getHours());
