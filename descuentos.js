function precio_descuento(precio,descuento){
    const porcentaje_precio_con_descuento = 100 - descuento;
    const precio_con_descuento = (precio * porcentaje_precio_con_descuento) / 100;

    return precio_con_descuento;
}

function calcular_precio_con_descuento(){
    const precio = document.getElementById("precio_original");
    const descuento = document.getElementById("descuento_producto");
    const precio_value = precio.value;
    const descuento_value = descuento.value;

    const precio_con_descuento = precio_descuento(precio_value,descuento_value);
    
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El resultado del precio con descueto es de $" + precio_con_descuento;
}

const input_precio = document.getElementById("precio_original");
const input_descuento = document.getElementById("descuento_producto");
