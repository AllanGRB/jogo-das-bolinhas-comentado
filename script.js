//função para criar a bolinha
function addBola() {
	//cria a div na variavel bola
	var bola = document.createElement("div");
	//utiliza a variavel bola e inclui a classe bola
	bola.setAttribute("class", "bola");
	// determina duas posições para p1 e p2
	var p1 = Math.floor(Math.random() * 970);
	var p2 = Math.floor(Math.random() * 570);
	//utiliza as variaveis p1 e p2 para atribuir valores em ralação à esquerda e topo da tela e torna a cor randomica
	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:rgb("+Math.floor(Math.random()*235)+","+Math.floor(Math.random()*235)+","+Math.floor(Math.random()*235)+");");
	//cria o comando para a bolinha sumir ao clicar
	bola.setAttribute("onclick", "estourar(this)");
	//comando para a pagar a variavel bola
	document.body.appendChild(bola);
}
//função para apagar a bolinha
function estourar(elemento) {
	// comando para apagar o elemento
	document.body.removeChild(elemento);
}
//função para iniciar o aparecimento das bolinhas
function iniciar() {
	//define o intervalo de surgimento das bolinhas em milesegundos
	setInterval(addBola, 2000);
}