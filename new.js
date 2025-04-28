const sub = document.getElementById("sub");
const add = document.getElementById("add");
const multi = document.getElementById("multi");
const div = document.getElementById("div");

//ADDITION
add.addEventListener("click", function(){
  const num1 = document.getElementById("value1").value;
  const num2 = document.getElementById("value2").value;

  const total = parseFloat(num1) + parseFloat(num2);
  document.getElementById("result").innerHTML = total;
})

//SUBTRACTION
sub.addEventListener("click", function(){
  const num1 = document.getElementById("value1").value;
  const num2 = document.getElementById("value2").value;

  const total = parseFloat(num1) - parseFloat(num2);
  document.getElementById("result").innerHTML = total;
})

//MULTIPLICATIONS
multi.addEventListener("click", function(){
  const num1 = document.getElementById("value1").value;
  const num2 = document.getElementById("value2").value;

  const total = parseFloat(num1) * parseFloat(num2);
  document.getElementById("result").innerHTML = total;
})

//DIVISION
div.addEventListener("click", function(){
  const num1 = document.getElementById("value1").value;
  const num2 = document.getElementById("value2").value;

  const total = parseFloat(num1) / parseFloat(num2);
  document.getElementById("result").innerHTML = total;
})