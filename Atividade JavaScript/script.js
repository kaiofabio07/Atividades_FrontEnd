function verificarRefeicao() {
  
  let comida = document.getElementById("comidaInput").value.toLowerCase();
 
  let resultado = document.getElementById("resultado");

  if (comida === "pão com ovo") {
    resultado.textContent = "Isso é café da manhã ☕🍞";
  } 
  else if (comida === "feijão com arroz") {
    resultado.textContent = "Isso é almoço 🍛🍽️";
  } 
  else if (comida === "") {
    resultado.textContent = "Você não digitou nada! Então é jantar 🌙🍲";
  } 
  else {
    resultado.textContent = "Isso parece ser jantar 🌙🍲";
  }
}