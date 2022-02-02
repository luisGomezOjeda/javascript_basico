//usuario
let lista_1 = [];
//media aritmetica
let salarios = [];
//mediana
let mitad_lista_1;
//top 10%
let corte_inicial;
let corte_final;
//html
function recibir_y_ordenar(){
  //recibir
    const nombre_persona = document.getElementById("nombre_input").value;
    const salario_value = Number(document.getElementById("salario_input").value);
    let persona_nueva = lista_1.push({nombre : nombre_persona, salario : salario_value});
    //ordenar
    lista_1.sort((a,b) => {
      if(a.salario < b.salario){
            return -1;
          }
          if(a.salario > b.salario){
            return 1
          }
          return 0;
        });
        salarios = lista_1.map(
          function(lista){
            return lista.salario;        
          }
        );

        let mostrar_lista_1 = document.getElementById("mostrar_lista");
        mostrar_lista_1.innerText = lista_1.map(function(lista){
          return "[Nombre: " + lista.nombre + ", Salario: $" + lista.salario + " ] ";
        });

        mitad_lista_1 = parseInt(salarios.length / 2);
        
        corte_inicial = parseInt((lista_1.length * 90) / 100);
        corte_final =  lista_1.length - corte_inicial;
      }
      
      //media_aritmetica
      
      function media_aritmetica(lista) {
        const sumaLista = lista.reduce(
          function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
  }
  
function calcular_media_aritmetica(){
  const media_salario = media_aritmetica(salarios);
  
    resutado_media = document.getElementById("resultado_media");
    resutado_media.innerText = "El promedio es $" + media_salario;
  }
  
//mediana

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
  if(par(salarios.length)){
    let elemento_1 = salarios[mitad_lista_1 - 1];
    let elemento_2 = salarios[mitad_lista_1];
    
  elemento_1_2 = Media_Aritmetica([elemento_1,elemento_2]);
  mediana = elemento_1_2;
}
else{
  mediana = salarios[mitad_lista_1];
}
}

function calcular_mediana(){
  mediana_function();
  resultado = document.getElementById("resultado_mediana");
  resultado.innerText = "La mediana de tu lista es $" + mediana ;
}

//moda

let lista_1_count = {};

let moda;

function moda_function(){
  lista_1_count = salarios.map(
    function(elemento){
        if(lista_1_count[elemento]){
            lista_1_count[elemento] += 1;
          }
        else{
            lista_1_count[elemento] = 1;
          }
        }
        );
        
        const lista_1_array = Object.entries(lista_1_count).sort(
          function(elemento_A,elemento_B){
            return elemento_A[1] - elemento_B[1];
          }
          );
          moda = lista_1_array[lista_1_array.length-1];
        }
        
        function calcular_moda(){
          calcula_moda = moda_function();
          moda = parseInt(moda);
  const resultado = document.getElementById("resultado_moda");
    resultado.innerText = "La moda de tu lista es $" + moda;
  }

  //top 10%

  let salarios_top_10;

  function top_10(){
    salarios_top_10 = lista_1.splice(corte_inicial,corte_final);
    nombres_salarios_top_10 = salarios_top_10.map(function(lista){
    return lista.nombre;
  });
  numbers_salarios_top_10 = salarios_top_10.map(function(lista){
    return lista.salario;
  });
}
function calcular_top_10(){
  let function_top_10 = top_10();
  let resultado_top_10 = document.getElementById("resultado_top_10");
  resultado_top_10.innerText = salarios_top_10.map(function(lista){
    return "Nombre: " + lista.nombre + ", Salario:  $" + lista.salario + "\r";
  });
}



