document
  .querySelector(".factorialButton")
  .addEventListener("click", factorialize);

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
