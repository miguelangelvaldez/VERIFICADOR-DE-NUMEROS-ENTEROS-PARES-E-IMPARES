
const separar = document.getElementById('separar');

separar.addEventListener('click', () => {
    const numeros = document.getElementById('numeros').value;
    let pares = document.getElementById('pares');
    let impares = document.getElementById('impares');
    let primos = document.getElementById('primos');

    let numerosSeparados = numeros.split(',');
    let numerosPares = numerosSeparados.filter(numero => numero % 2 === 0);
    let numerosImpares = numerosSeparados.filter(numero => numero % 2 === 1);
    let numerosPrimos = numerosSeparados.filter(numero => {
        for (let x = 2; x < numero; x++) {
            if (numero % x === 0) {
                return false;
            }
        }
        return numero > 1;
    });

    pares.value = numerosPares;
    impares.value = numerosImpares;
    primos.value = numerosPrimos;
});