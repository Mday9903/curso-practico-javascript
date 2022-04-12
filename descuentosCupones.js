//Array de objetos (array de cupones)
var cupones = [
    {nombre: "Cupon1", descuento:5, codigo:"123456"},
    {nombre: "Cupon2", descuento:10, codigo:"123654"},
    {nombre: "Cupon3", descuento:15, codigo:"123111"},
];

function onClickButtonPriceDiscount(){
    const precioLista = document.getElementById("inputPrice");
    const valorInputPrice = inputPrice.value;
    const codigoCupon = document.getElementById("inputCode");
    const valorInputCode = inputCode.value;

    const cuponValido = validarCupon();
    
    if (!cuponValido){
        alert("El cupón no es válido");
    } else {
        const precioConCupon = calcularPrecioConCupon(valorInputPrice,cuponValido.descuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerHTML = "El precio final con descuento es de: $" + precioConCupon + ".";
    }
}

function validarCupon (){    
    const codigoCupon = document.getElementById("inputCode");
    const valorInputCode = inputCode.value;

    const esValido = cupones.find(function(cupon){
        return cupon.codigo === valorInputCode;
    });

    return esValido;

}


function calcularPrecioConCupon(precioLista,descuento){
  
    const precioFinal = precioLista - ((precioLista * descuento)/100);

    return precioFinal;
};
