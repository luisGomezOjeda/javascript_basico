function altura_triangulo(lado_1,lado_2,base){
    if (lado_1 === lado_2 && lado_1 , lado_2 != base){
        var altura =(lado_1*lado_1) - ((lado_2*lado_2) / 4);
        return Math.sqrt(altura);
    }
    else{
        console.log("Este no es un triangulo isóseles");
    }
}