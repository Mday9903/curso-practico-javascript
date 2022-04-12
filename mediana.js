// Mediana

//Variables

const lista1 = [
    100,
    200,
    500,
    400000000,
];





//Funciones 

function calcularMediana(lista){

    const listaOrdenada = ordenarLista(lista)
    const mitadLista = parseInt(listaOrdenada.length / 2);
    let mediana;
        
    if (esPar(listaOrdenada.length)){ 

            const elemento1 = listaOrdenada[mitadLista - 1];
            const elemento2 = listaOrdenada[mitadLista];

            const promedioElemento1y2 = calcularMediaAritmetica([
                elemento1,
                elemento2
            ]);
            
            mediana = promedioElemento1y2;
            alert(mediana);

    } else {
            mediana = listaOrdenada[mitadLista];    
            alert(mediana);
        }

}

function ordenarLista(lista){
    
    listaEnOrden = lista.sort(compararNumeros); // Sort ordena los elementos del String. La función comprarNumeros le indica que el ordenamiento es ascendente.

    return listaEnOrden;
}

function calcularMediaAritmetica (lista){
 
    const sumaLista = lista.reduce( //reduce recibe como argumento una función y nos sirve para sumar cada uno de los elementos de la lista. 
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    ); 

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

function compararNumeros(a,b){
    return a - b;
}

function esPar(numerito){
    if(numerito % 2 === 0){ // % es el mod.
        return true;
    } else {
        return false;
    }
}

