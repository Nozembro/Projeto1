export function soma(valor) {
    let resultadoExatoSoma = 0;
    let resultadoTotalSoma = 0;
    let resultadoSom = 0;
    for (var i = 1; i <= valor; i++) {
        for (var j = i; j <= valor; j++) {
            resultadoSom = i + j;
            if (resultadoSom <= valor) {
                resultadoTotalSoma++;
            } 
            if (resultadoSom === valor) {
                resultadoExatoSoma++;
            }
        }
    }
    if (valor === 0 || valor === 1) {
        return 0
    } else {
        return Math.ceil((resultadoExatoSoma * 100) / resultadoTotalSoma)
    }
}