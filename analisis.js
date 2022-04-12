//Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
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

//Calculadora de mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


//Mediana General

const salarioCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

const salariosColSorted = salarioCol.sort(
    function(salaryA,salaryB){
    return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;

const salarios10ColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
)

const medianaTop10Col = medianaSalarios(salarios10ColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});