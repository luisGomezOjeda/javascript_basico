//codigo del cuadrado
console.group("cuadrados");

function perimetro_cuadrado(lado){
    return lado * 4;
}

function area_cuadrado(lado){
 return lado * lado;
}

console.groupEnd();

console.group("triangulos");

function perimetro_triangulo(lado_triangulo_1,lado_triangulo_2,base_triangulo){
    return lado_triangulo_1 + lado_triangulo_2 + base_triangulo;
}

function area_triangulo(base_triangulo,altura_triangulo){
    return base_triangulo * altura_triangulo / 2;
}

console.groupEnd();

//codigo del circulo

console.group("circulos");

function diametro_circulo(radio){
    return radio * 2;
} 

const PI = Math.PI;

function perimetro_circulo(radio){
    const diametro = diametro_circulo(radio);
    return diametro * PI;
}

function area_circulo(radio_circulo){
    return (radio_circulo * radio_circulo) * PI;
}

//interacion con el html

function calcular_perimetro_cuadrado(){
    const input =document.getElementById("cuadrado");
    const value = input.value;

    const perimetro = perimetro_cuadrado(value);  
    alert(perimetro);
}

function calcular_area_cuadrado(){
    const input =document.getElementById("cuadrado");
    const value = input.value;
    
    const area = area_cuadrado(value);
    alert(area);
}

function calcular_perimetro_triangulo(){
    const input_lado_1 = document.getElementById("triangulo_lado_1");
    const input_lado_2 = document.getElementById("triangulo_lado_2");
    const input_base = document.getElementById("base_triangulo");
    const value_lado_1 = input_lado_1.value;
    const value_lado_2 = input_lado_2.value;
    const value_base = input_base.value;

    const triangulo_perimetro = perimetro_triangulo(value_lado_1,value_lado_2,value_base);
    alert(triangulo_perimetro);
}

function calcular_area_triangulo() {
    const input_altura = document.getElementById("altura_triangulo");
    const input_base = document.getElementById("base_triangulo");
    const value_altura = input_altura.value;
    const value_base = input_base.value;

    const triangulo_area = area_triangulo(value_base, value_altura);
    alert(triangulo_area);
}

function calcular_diametro(){
    const input =document.getElementById("radio_circulo");
    const value = input.value;
    
    const diametro = diametro_circulo(value);
    alert(diametro);
}

function calcular_area_circulo(){
    const input =document.getElementById("radio_circulo");
    const value = input.value;
    
    const diametro = diametro_circulo(value);
    const area = area_circulo(diametro);
    alert(area);
}


//cuadrado
document.getElementById("cuadrado");
//triangulo
document.getElementById("triangulo_lado_1");
document.getElementById("triangulo_lado_2");
document.getElementById("base_triangulo");
document.getElementById("altura_triangulo");
//circulo
document.getElementById("radio_circulo");

