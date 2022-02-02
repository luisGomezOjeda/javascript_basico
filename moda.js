const lista_1 = [];

const lista_1_count = {};

let moda;

function moda_function(){
lista_1.map(
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

//html

function recibir_numero(){
    let numero_nuevo = Number(document.getElementById("moda").value);
    const añadir_numero_nuevo = lista_1.push(numero_nuevo);
}

function calcular_moda(){
    calcular_moda = moda_function();
    moda = parseInt(moda);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "La moda de tu lista es " + moda;
}

