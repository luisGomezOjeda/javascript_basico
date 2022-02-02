

function Media_Aritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  
  const promedioLista = sumaLista / lista.length;
  
  return promedioLista;
}


const lista_1 = [];



function recibir_y_ordenar_numero(){
  //recibir
  let numero_nuevo = Number(document.getElementById("input_mediana").value);
  const añadir_numero_nuevo = lista_1.push(numero_nuevo);
//ordenar
lista_1.sort((a,b) => {
    return a - b;
  });

  mitad_lista_1 = parseInt(lista_1.length / 2);
}
let mitad_lista_1;


function par(num){
  if(num % 2 === 0){
    true;
  }
  else{
    false;
  }
}

let mediana;
function mediana_function(){
if(par(lista_1.length)){
  let elemento_1 = lista_1[mitad_lista_1 - 1];
  let elemento_2 = lista_1[mitad_lista_1];

  elemento_1_2 = Media_Aritmetica([elemento_1,elemento_2]);
  mediana = elemento_1_2;
}
else{
  mediana = lista_1[mitad_lista_1];
  }
}
//html


function calcular_mediana(){
  mediana_function();
  resultado = document.getElementById("resultado");
  resultado.innerText = "La mediana de tu lista es " + mediana;
}


