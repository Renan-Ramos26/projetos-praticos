const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      display.value = ""; // limpa tudo
    } 
    else if (value === "=") {
      try {
        display.value = eval(display.value); // calcula expressão
      } catch {
        display.value = "Erro";
      }
    } 
    else {
      display.value += value; // adiciona número ou operador
    }
  });
});
