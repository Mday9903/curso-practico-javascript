// Media aritmética
const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularMediaAritmetica (lista){
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce( //reduce recibe como argumento una función y nos sirve para sumar cada uno de los elementos de la lista. 
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    ); 

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}