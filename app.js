const button = document.querySelector(".button");
function selection() {
  if (document.getSelection) console.log(document.getSelection().toString());
}

button.addEventListener("click", selection);
