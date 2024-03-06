var input1 = document.querySelector(".toBinary input");
var input2 = document.querySelector(".fromBinary input");
var button1 = document.querySelector(".toBinary button");
var button2 = document.querySelector(".fromBinary button");
var p1 = document.querySelector(".toBinary p");
var p2 = document.querySelector(".fromBinary p");

button1.addEventListener("click", toBinary);
button2.addEventListener("click", fromBinary);

function toBinary() {
  const letterRegex = /[a-zA-Z]/g;
  if (letterRegex.test(input1.value)) {
    alert("Input salah");
  } else if (input1.value === "") {
    alert("Input kosong");
  } else {
    var first = eval(input1.value);
    var change = parseInt(first);
    var result = change.toString(2);
    p1.textContent = result;
  }
}

function fromBinary() {
  const letterRegex = /[a-zA-Z]/g;
  const binaryRegex = /^[01]+$/;
  if (letterRegex.test(input2.value)) {
    alert("Input salah");
  } else if (!binaryRegex.test(input2.value)) {
    alert("Input bukan binary");
  } else if (input2.value === "") {
    alert("Input kosong");
  } else {
    var change = parseInt(input2.value);
    var result = parseInt(change, 2);
    p2.textContent = result;
  }
}
