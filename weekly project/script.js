document
  .querySelector(".factorialButton")
  .addEventListener("click", factorialize);

document.querySelector(".showTables").addEventListener("click", function () {
  let start = document.querySelector(".startingInput").value;
  let end = document.querySelector(".endingInput").value;
  Tables(start, end);
});

function factorialize() {
  let num = document.querySelector(".factorialInput").value;
  let result = {
    series: "",
    value: num,
  };
  console.log(num);
  if (num === 0 || num === 1) {
    result.value = 1;
    result.series = "1";
    return result;
  } else {
    while (num > 1) {
      num--;
      result.value *= num;
      result.series += num + (num !== 1 ? "x" : "");
    }
    document.querySelector(".output-series").innerHTML = result.series;
    document.querySelector(".output-value").innerHTML = result.value;
  }
}

// + "=" + result + "<br>"
const difference = 9;

function Tables(start, end) {
  let tempDifference = end - start; //12-2=10

  if (tempDifference <= difference) {
    //10<=9

    for (let i = start; i <= end; i++) {
      let table = "";
      console.log(i);
      for (let j = 1; j < 11; j++) {
        table += i + " x " + j + " = " + j * i + "<br>";
      }
      document.querySelector(".table-output").innerHTML += table + "<br>";
    }
  } else {
    console.log("the end number should be less than ", start + difference);
  }
}

function calculator(value){
  
}
