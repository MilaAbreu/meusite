const titulo = document.getElementById("titulo") //captura elementos a partir do id

const header = document.getElementsByClassName("topo") //captura elementos pela classe

const main = document.querySelector("p")  //pega qualquer tipo de elemento 

const p = document.querySelectorAll("p") //captura listas de qualquer elemento

const nome = prompt("Qual seu nome?") //Prompt é uma janela que abre para soliticar uma entrada de dados. Depois de entrar com os dados eles ficam salvos na variavel 

titulo.innerText = `Bem-vindo ao meu portifolio, ${nome}` //tem que usar a crase para ler, acessa o elemento entra na propriedaded do texto e reatribui um novo valor