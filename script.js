const buttonval = document.getElementById("buttoninc");
buttonval.addEventListener("click", calcu);

let createdvalue = document.createElement("h2");
document.getElementById("textdisplay").appendChild(createdvalue);

function calcu() {
  const first = Number(document.getElementById("firstval").value);

  const symb = document.getElementById("symbol").value;

  const last = Number(document.getElementById("secondval").value);
  let calculated = 0;

  if (symb === "+") {
    calculated = first + last;
  } else if (symb === "-") {
    calculated = first - last;
  } else if (symb === "*") {
    calculated = first * last;
  } else if (symb === "/") {
    if (last === 0) {
      alert("Cannot divide by zero");
      return;
    }
    calculated = Math.round(first / last);
  } else if (symb != "*" || "+" || "-" || "/") {
    alert("Invalid operator");
    return;
  }

  let text = ` Result ${calculated}`;
  createdvalue.textContent = text;
}
