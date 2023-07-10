export function divisao(valor) {
    let resultadoExatoDiv = 0;
    let resultadoTotalDiv = 0;
    let resultadoDiv = 0;
    for (var i = 1; i <= valor * 5; i++) {
        for (var j = 1; j <= valor * 5; j++) {
            resultadoDiv = i / j;
            if (resultadoDiv <= valor && Number.isInteger(resultadoDiv)) {
                resultadoTotalDiv++;
            } 
            if (resultadoDiv === valor) {
                resultadoExatoDiv++;
            }
        }
    }
    if (valor === 0) {
        return 0
    } else {
        return Math.ceil((resultadoExatoDiv * 100) / resultadoTotalDiv)
    }
}