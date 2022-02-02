
let ingresos_fijos;
let ingresos_no_fijos;

let servicios_basicos;
let alimentacion;
let movilidad;
let vivienda;
let deudas;
let otros_gastos;
let impuestos;

let suma_ingresos;

let suma_gastos;

let dinero_restante;

let resultado;

function recibir_y_calcular(){
    //ingresos
    ingresos_fijos = Number(document.getElementById("ingresos_fijos").value); 
    ingresos_no_fijos = Number(document.getElementById("ingresos_no_fijos").value);
    //gastos  
    servicios_basicos = Number(document.getElementById("servicios_basicos").value);  
    alimentacion = Number(document.getElementById("alimentacion").value);  
    movilidad = Number(document.getElementById("movilidad").value);  
    vivienda = Number(document.getElementById("vivienda").value);  
    deudas = Number(document.getElementById("deudas").value);  
    otros_gastos = Number(document.getElementById("otros_gastos").value);  
    impuestos = document.getElementById("select");
    //calculo
    
    
    suma_ingresos = Number(ingresos_fijos + ingresos_no_fijos);

    
        if(impuestos.value == 0 ){
            alert("seleciones un pais");
        }
        else if(impuestos.value == 1){
            impuestos = (suma_ingresos * (100 - 70) / 100);
        }
        else if(impuestos.value == 2){
            impuestos = (suma_ingresos * (100 - 85) / 100);
        }
        else if(impuestos.value == 3){
            impuestos = (suma_ingresos * (100 - 80) / 100);
        }
        else if(impuestos.value == 4){
            impuestos = (suma_ingresos * (100 - 88) / 100);
        }

    suma_gastos = servicios_basicos + alimentacion + movilidad + vivienda + deudas + otros_gastos + impuestos; 

    dinero_restante = suma_ingresos - suma_gastos;
    
    resultado = document.getElementById("resultado");

    if(dinero_restante > 0){
        if(ingresos_fijos > suma_gastos){
            resultado.innerText = "Tu capacidad de ahorro es de $" + dinero_restante + ".\b Tu capacidad de ahorro depende de los ingresos no fijos y una parte de los ingresos fijos";
        }
        else{
            resultado.innerText = "Tu capacidad de ahorro es de $" + dinero_restante + ".\b Tu capacidad de ahorro depende de los ingresos no fijos";
        }
    }
    else if(dinero_restante === 0 ){
        resultado.innerText = "No posees capacidad de ahorro ya que tus cuentas estan muy justas. \bIntenta escatimar en los gastos menos necesarios";
    }
    else{
        resultado.innerText = "No posees capacidad de ahorro ya que tienes una deuda de $" + dinero_restante + "\bEmpieza por dejar de acumular deuda, escaticamdo en gastos";
    }
}