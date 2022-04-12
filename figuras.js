// Código del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");

function perimetroCuadrado(lado){
    return  lado * 4;
} 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm.");

function areaCuadrado(lado){
    return  lado * lado;
} 
// console.log("El área del cuadrado es: " + areaCuadrado + " cm^2.");
console.groupEnd();

// Código del triángulo

console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


// console.log("Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + " cm, " 
//     + ladoTriangulo2 
//     + " cm y " 
//     + baseTriangulo
//     + " cm de base." 
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + " cm.");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm.");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + " cm^2.");
console.groupEnd();


// Código del círuclo

console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + " cm.");

//Diámetro
function diametroCirculo(radio){
    return radio * 2 ;
}


//Pi
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perímetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
} 

console.groupEnd();


function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);    
}

function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);    
}

function alturaTrianguloIsosceles(
lado1 = document.getElementById("InputIsosceles1").value
, lado2 = document.getElementById("InputIsosceles2").value
, lado3 = document.getElementById("InputIsosceles3").value){
   
    if (lado1 == lado2 && lado1 != lado3 ){
        var isosceles = true;
        var ladoIgual = lado1;
        var base = lado3;
    } else if (lado1 == lado3 && lado1 != lado2){
        var isosceles = true;
        var ladoIgual = lado1;
        var base = lado2;
    } else if (lado2 == lado3 && lado2 !=lado1){
        var isosceles = true;
        var ladoIgual = lado2;
        var base = lado1;
    } else {
        var isosceles = false;
        alert("El triángulo no es isósceles");
    }

    if (isosceles == true){
        const altura = Math.sqrt((ladoIgual * ladoIgual) - ((base * base) / 4));
        alert("La altura del triángulo isosceles es: " + altura + "."); 
    }
    

}