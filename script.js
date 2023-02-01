function reset() {
  document.getElementById("txt1").value = "";
  document.getElementById("txt2").value = "";
  document.getElementById("txtsum").value = "";
}

function add() {
  let a = document.getElementById("txt1").value;
  a = parseInt(a);

  let b = document.getElementById("txt2").value;
  b = parseInt(b);

  let sum = a + b;

  document.getElementById("txtsum").value = String(sum);
}

function sub() {
  let a = document.getElementById("txt1").value;
  a = parseInt(a);

  let b = document.getElementById("txt2").value;
  b = parseInt(b);

  let sum = a - b;
  document.getElementById("txtsum").value = String(sum);
}

function mul() {
  let a = document.getElementById("txt1").value;
  a = parseInt(a);

  let b = document.getElementById("txt2").value;
  b = parseInt(b);

  let sum = a * b;
  document.getElementById("txtsum").value = String(sum);
}

function div() {
  let a = document.getElementById("txt1").value;
  let b = document.getElementById("txt2").value;
  let sum = a / b;

  document.getElementById("txtsum").value = String(sum);
}
