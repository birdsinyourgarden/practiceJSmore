function eliminarDuplicados(arr) {
    const mapSinDup = new Map();

    arr.forEach(num => mapSinDup.set(num, num));

    const arrayOr = [...mapSinDup.keys()].sort((a, b) => b - a);

    return arrayOr;
}

const numeros = [4, 2, 9, 2, 5, 9, 4, 7];
const resultado = eliminarDuplicados(numeros);
console.log(resultado);