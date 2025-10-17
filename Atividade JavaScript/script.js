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

function botaoFor() {
    let pTexto = document.getElementById("texto") 
    for (let i=0; i<5; i++){

      pTexto.innerHTML = pTexto.innerHTML + "<br>" + i;
      console.log(i);

  } 

  let lista = ["arroz", "salada", "picanha"]
  for (let index = 0; index < lista.length; index++) {
    const element = lista [index];
    pTexto.innerHTML += `<br>${element}`;

}

}