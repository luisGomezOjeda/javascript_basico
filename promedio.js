
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }

//html

let lista = [];


function recibir_numero(){
  let numero_nuevo = Number(document.getElementById("promedio").value);
  const añadir_numero_nuevo = lista.push(numero_nuevo);
}

function calcular_promedio(){
  const promedio = calcularMediaAritmetica(lista);
  const resultado = document.getElementById("resultado");
  resultado.innerText =("El promedio es " + promedio);
}