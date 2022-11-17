function sortearIntervalo(min,max) {
  min = Math.floor(1);
  max = Math.floor(60);
  return Math.floor(Math.random()*(60 - 1)+ 1);
}

function botaoSorteio(){
var listaSorteados = [];
while(listaSorteados.length <=5) {
  var numSorteado = sortearIntervalo();
// numero aleatorio que for sorteado vai ser adicionado a lista;
  if(listaSorteados.indexOf(numSorteado)=== -1){
//  Se esse numero que foi sorteado aleatoriamente nao estiver dentro da minha array listaSorteados, quero que seja incluido.
// Se o numSorteado tiver retorno dentro da array igual a -1, significa dizer que nao existe dentro da minha array,
// chamada de listaSorteados, esse numero que foi sorteado. Dai eu devo inserir esse numero na lista.
      listaSorteados[listaSorteados.length] = numSorteado;
     var listaNumerosSorteados = listaSorteados;
// O length representa o tamanho da array.
// Aqui eu adiciono no indice zero, ou seja na primeira posiçao da lista, a minha lista sorteados, caso o numero que foi sorteado 
// receba -1, significando que o numero que foi sorteado aleatoriamente ainda não pertence a lista. Ele vai repetir esse processo
// 6 vezes, pois ele quer que a sejam sorteados 6 numeros.

  }

var output = document.querySelector("#output").innerHTML =listaSorteados.join(" 💰 ");
}
      listaSorteados.sort(function(a, b) { return a - b; });{
}
var listas = [];
listas = listaSorteados;
var output = document.querySelector("#output-crescente").innerHTML = listas.join(" ⇨ ");
}

function botaoLimpar(){
        listaSorteados = [];
        output.innerHTML = listaSorteados;
}