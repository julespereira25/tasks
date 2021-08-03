const points = [40, 100, 1, 5, 25, 10];
const points1 = [40, 100, 1, 5, 25, 10];
var numbers = [12, 10, 15, 11, 14, 13, 16];
var numbers1 = [12, 10, 14, 11, 14, 18, 16];
var reverseNumbers = [];
//sort an array in a reversing order
function reverse(array) {
  var output = [];
  while (array.length) {
    output.push(array.pop());
  }

  return output;
}

//sort an array in a ascending order

console.log(reverse(numbers));

function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

bubbleSort(numbers1);
console.log(numbers1);

//sort an array in a desceding order

function dscSort(array) {
  var i;
  for (var j = i - 1; j >= 0 && array[j] < tmp; j--) {
    var tmp = array[i];
    for (var j = i - 1; j >= 0 && array[j] < array[i]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = tmp;
  }
  return array;
}

dscSort(points1);
console.log(points1);

//queue and stack in javascript

Stack;

var stack = [];
stack.push(1);
stack.push(2);

var value = stack.pop();
console.log(value);
console.log(stack);

//Queue
var queue = [];

queue.push(1);
queue.push(2);

var value1 = queue.shift();
console.log(value1);
console.log(queue);
